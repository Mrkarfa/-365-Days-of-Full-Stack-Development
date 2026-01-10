import { useState, useRef, useEffect, useCallback } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import { useAuth } from "../../context/AuthContext";
import { useChat } from "../../hooks/useChat";
import { useAI } from "../../hooks/useAI";
import Header from "../Layout/Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import gsap from "gsap";

const ChatWindow = ({ chatId, onMenuClick }) => {
  const { user } = useAuth();
  const { messages, loading, sendMessage } = useChat(chatId);
  const {
    getResponse,
    generateSmartReplies,
    smartReplies,
    clearSmartReplies,
    loading: aiLoading,
  } = useAI();

  const [chatInfo, setChatInfo] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const windowRef = useRef(null);

  useEffect(() => {
    if (chatId) {
      gsap.fromTo(
        windowRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [chatId]);

  useEffect(() => {
    if (!chatId) {
      setChatInfo(null);
      return;
    }

    const fetchChatInfo = async () => {
      const chatRef = doc(db, "chats", chatId);
      const chatSnap = await getDoc(chatRef);
      if (chatSnap.exists()) {
        setChatInfo(chatSnap.data());
      }
    };

    fetchChatInfo();
  }, [chatId]);

  const handleSendMessage = useCallback(
    async (content) => {
      if (!chatId || !content.trim()) return;

      try {
        await sendMessage(content);

        if (chatInfo?.isAIChat) {
          setIsTyping(true);
          try {
            const aiMessages = [
              ...messages.map((m) => ({
                role: m.senderId === user.uid ? "user" : "assistant",
                content: m.content,
              })),
              { role: "user", content },
            ];

            const aiResponse = await getResponse(aiMessages);

            const messagesRef = collection(db, "chats", chatId, "messages");
            await addDoc(messagesRef, {
              content: aiResponse,
              senderId: "ai-assistant",
              senderName: "AI Assistant",
              type: "ai",
              isAI: true,
              timestamp: serverTimestamp(),
            });
          } catch (error) {
            console.error("AI response error:", error);
          } finally {
            setIsTyping(false);
          }
        }
      } catch (error) {
        console.error("Send message error:", error);
      }
    },
    [chatId, chatInfo, messages, user, sendMessage, getResponse]
  );

  const handleRequestSmartReplies = useCallback(async () => {
    if (messages.length === 0) return;
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.senderId !== user?.uid) {
      await generateSmartReplies(lastMessage.content);
    }
  }, [messages, user, generateSmartReplies]);

  if (!chatId) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-void relative overflow-hidden">
        <div className="noise-overlay opacity-[0.03]" />
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />

        <div className="relative z-10 text-center p-8 max-w-sm">
          <div className="w-24 h-24 mx-auto mb-8 relative group">
            <div className="absolute inset-0 bg-cyber-blue shadow-[0_0_50px_rgba(0,242,255,0.2)] blur-2xl rounded-full scale-150 opacity-20" />
            <div className="relative z-10 w-24 h-24 bg-dark-900 border border-white/10 rounded-xl flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-accent opacity-50 blur-lg absolute" />
              <svg
                className="w-12 h-12 text-cyber-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-black tracking-[0.2em] text-white uppercase mb-4 text-glow">
            // STATUS: IDLE
          </h2>
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest leading-relaxed">
            SYSTEM_WAITING_FOR_CHANNEL_SELECTION.
            PLEASE_INITIALIZE_LINK_PROTOCOL_VIA_SIDEBAR.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={windowRef} className="flex-1 flex flex-col bg-void relative">
      <div className="noise-overlay opacity-[0.02]" />
      <Header
        chatName={chatInfo?.name}
        isAIChat={chatInfo?.isAIChat}
        onMenuClick={onMenuClick}
        onSummarize={
          messages.length >= 3 ? () => console.log("Summarize") : null
        }
      />

      <div className="flex-1 relative overflow-hidden">
        <MessageList
          messages={messages}
          isTyping={isTyping}
          typingUser={chatInfo?.isAIChat ? "AI_CORE" : null}
        />
      </div>

      <MessageInput
        onSend={handleSendMessage}
        onRequestSmartReplies={
          !chatInfo?.isAIChat ? handleRequestSmartReplies : null
        }
        smartReplies={smartReplies}
        onSelectSmartReply={(reply) => handleSendMessage(reply)}
        onClearSmartReplies={clearSmartReplies}
        disabled={loading || aiLoading}
      />
    </div>
  );
};

export default ChatWindow;
