import { useState, useEffect, useCallback } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  where,
  getDocs,
  limit,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { useAuth } from "../context/AuthContext";

export const useChat = (chatId = null) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentChat, setCurrentChat] = useState(chatId);

  // Listen to messages in a chat
  useEffect(() => {
    if (!currentChat) {
      setMessages([]);
      setLoading(false);
      return;
    }

    const messagesRef = collection(db, "chats", currentChat, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate(),
      }));
      setMessages(newMessages);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentChat]);

  // Listen to user's conversations
  useEffect(() => {
    if (!user) {
      setConversations([]);
      return;
    }

    const chatsRef = collection(db, "chats");
    const q = query(
      chatsRef,
      where("participants", "array-contains", user.uid),
      orderBy("updatedAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newConversations = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        updatedAt: doc.data().updatedAt?.toDate(),
      }));
      setConversations(newConversations);
    });

    return () => unsubscribe();
  }, [user]);

  // Send a message
  const sendMessage = useCallback(
    async (content, type = "text") => {
      if (!currentChat || !user || !content.trim()) return;

      try {
        const messagesRef = collection(db, "chats", currentChat, "messages");
        await addDoc(messagesRef, {
          content: content.trim(),
          senderId: user.uid,
          senderName: user.displayName,
          senderPhoto: user.photoURL,
          type,
          timestamp: serverTimestamp(),
        });

        // Update chat's last message
        const chatRef = doc(db, "chats", currentChat);
        await updateDoc(chatRef, {
          lastMessage: content.trim().substring(0, 100),
          lastMessageSender: user.displayName,
          updatedAt: serverTimestamp(),
        });
      } catch (error) {
        console.error("Send message error:", error);
        throw error;
      }
    },
    [currentChat, user]
  );

  // Create a new chat
  const createChat = useCallback(
    async (participantIds, chatName = null) => {
      if (!user) return null;

      try {
        const allParticipants = [...new Set([user.uid, ...participantIds])];

        const chatsRef = collection(db, "chats");
        const newChat = await addDoc(chatsRef, {
          participants: allParticipants,
          name: chatName || "New Chat",
          createdBy: user.uid,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          lastMessage: "",
          lastMessageSender: "",
        });

        return newChat.id;
      } catch (error) {
        console.error("Create chat error:", error);
        throw error;
      }
    },
    [user]
  );

  // Create AI chat
  const createAIChat = useCallback(async () => {
    if (!user) return null;

    try {
      const chatsRef = collection(db, "chats");
      const newChat = await addDoc(chatsRef, {
        participants: [user.uid],
        name: "AI Assistant",
        isAIChat: true,
        createdBy: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        lastMessage: "",
        lastMessageSender: "",
      });

      return newChat.id;
    } catch (error) {
      console.error("Create AI chat error:", error);
      throw error;
    }
  }, [user]);

  return {
    messages,
    conversations,
    loading,
    currentChat,
    setCurrentChat,
    sendMessage,
    createChat,
    createAIChat,
  };
};

export default useChat;
