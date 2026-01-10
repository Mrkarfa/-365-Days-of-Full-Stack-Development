import { useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { useAuth } from "../../context/AuthContext";

const MessageList = ({ messages, isTyping = false, typingUser = null }) => {
  const { user } = useAuth();
  const listRef = useRef(null);
  const bottomRef = useRef(null);

  // Auto scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Group messages by sender and time proximity
  const groupedMessages = messages.reduce((groups, message, index) => {
    const prevMessage = messages[index - 1];
    const isFirstInGroup =
      !prevMessage ||
      prevMessage.senderId !== message.senderId ||
      (message.timestamp &&
        prevMessage.timestamp &&
        message.timestamp - prevMessage.timestamp > 60000); // 1 minute gap

    groups.push({ ...message, isFirstInGroup });
    return groups;
  }, []);

  // Get date separator
  const formatDate = (date) => {
    if (!date) return "";
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
    return date.toLocaleDateString(undefined, {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  // Add date separators
  let lastDate = null;
  const messagesWithDates = groupedMessages.map((message) => {
    const messageDate = message.timestamp?.toDateString();
    const showDate = messageDate && messageDate !== lastDate;
    lastDate = messageDate;
    return { ...message, showDateSeparator: showDate };
  });

  return (
    <div ref={listRef} className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-3">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-dark-800 flex items-center justify-center mb-4">
            <svg
              className="w-10 h-10 text-white/20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white/80 mb-1">
            No messages yet
          </h3>
          <p className="text-sm text-white/40">
            Send a message to start the conversation
          </p>
        </div>
      ) : (
        messagesWithDates.map((message) => (
          <div key={message.id}>
            {message.showDateSeparator && (
              <div className="flex items-center justify-center my-4">
                <div className="px-3 py-1 rounded-full bg-dark-800 text-xs text-white/50">
                  {formatDate(message.timestamp)}
                </div>
              </div>
            )}
            <MessageBubble
              message={message}
              isFirstInGroup={message.isFirstInGroup}
            />
          </div>
        ))
      )}

      {isTyping && <TypingIndicator senderName={typingUser || "AI"} />}

      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
