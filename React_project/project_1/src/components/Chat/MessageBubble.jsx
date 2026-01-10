import { useRef, useEffect } from "react";
import { Bot, Check, CheckCheck, ShieldAlert } from "lucide-react";
import gsap from "gsap";
import { useAuth } from "../../context/AuthContext";

const MessageBubble = ({ message, isFirstInGroup = true }) => {
  const { user } = useAuth();
  const bubbleRef = useRef(null);

  const isOwn = message.senderId === user?.uid;
  const isAI = message.type === "ai" || message.isAI;

  useEffect(() => {
    gsap.fromTo(
      bubbleRef.current,
      {
        opacity: 0,
        x: isOwn ? 30 : -30,
        scale: 0.9,
        skewX: isOwn ? -5 : 5,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        skewX: 0,
        duration: 0.5,
        ease: "expo.out",
      }
    );
  }, [isOwn]);

  const formatTime = (date) => {
    if (!date) return "00:00";
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div
      ref={bubbleRef}
      className={`flex items-start gap-4 mb-1 ${
        isOwn ? "flex-row-reverse" : ""
      }`}
    >
      {/* Avatar with Status Ring */}
      {!isOwn && isFirstInGroup && (
        <div className="relative group flex-shrink-0 mt-1">
          <div
            className={`
            w-10 h-10 rounded border flex items-center justify-center overflow-hidden
            ${
              isAI
                ? "border-neon-purple/50 bg-neon-purple/10"
                : "border-white/10 bg-dark-900"
            }
          `}
          >
            {isAI ? (
              <Bot className="w-5 h-5 text-neon-purple" />
            ) : (
              <img
                src={
                  message.senderPhoto ||
                  `https://ui-avatars.com/api/?name=${message.senderName}&background=6366f1&color=fff&size=40`
                }
                alt={message.senderName}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          {/* Futuristic Status Indicator */}
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-void flex items-center justify-center rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
      )}

      {!isOwn && !isFirstInGroup && <div className="w-10" />}

      {/* Futuristic Bubble */}
      <div
        className={`
        relative group max-w-[75%] lg:max-w-[65%] p-4
        ${
          isOwn
            ? "msg-bubble-sent"
            : isAI
            ? "msg-bubble-ai"
            : "msg-bubble-received"
        }
      `}
      >
        {/* Info Header */}
        {!isOwn && isFirstInGroup && (
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`text-[10px] font-mono tracking-tighter ${
                isAI ? "text-neon-purple" : "text-cyber-blue"
              }`}
            >
              // {isAI ? "AI_CORE_SYSTEM" : message.senderName?.toUpperCase()}
            </span>
            <div className="w-1 h-3 bg-white/10 rounded-full" />
            <span className="text-[9px] font-mono text-white/20">
              SEQ_NO: {Math.floor(Math.random() * 9999)}
            </span>
          </div>
        )}

        {/* content */}
        <p
          className={`text-[13px] leading-relaxed tracking-wide ${
            isOwn ? "text-white/90" : "text-white/80"
          } font-sans`}
        >
          {message.content}
        </p>

        {/* Metadata Footer */}
        <div
          className={`flex items-center gap-3 mt-3 border-t border-white/[0.03] pt-2 ${
            isOwn ? "justify-end" : ""
          }`}
        >
          <div className="flex items-center gap-1">
            <span className="text-[9px] font-mono text-white/20">UTC_</span>
            <span className="text-[9px] font-mono text-white/40">
              {formatTime(message.timestamp)}
            </span>
          </div>

          {isOwn && (
            <div className="flex items-center gap-1 opacity-40">
              <CheckCheck className="w-3 h-3 text-cyber-blue" />
              <span className="text-[8px] font-mono text-white/40">RCVD</span>
            </div>
          )}
        </div>

        {/* Corner Decal for AI */}
        {isAI && (
          <div className="absolute top-0 right-0 p-1 opacity-20">
            <ShieldAlert className="w-3 h-3 text-neon-purple" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
