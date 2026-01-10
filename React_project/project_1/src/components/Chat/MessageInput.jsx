import { useState, useRef } from "react";
import {
  Send,
  Smile,
  Paperclip,
  Sparkles,
  X,
  Terminal,
  Command,
} from "lucide-react";
import gsap from "gsap";

const MessageInput = ({
  onSend,
  onRequestSmartReplies,
  smartReplies = [],
  onSelectSmartReply,
  onClearSmartReplies,
  disabled = false,
}) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  const sendBtnRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() || disabled) return;

    gsap.to(sendBtnRef.current, {
      scale: 0.8,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });

    onSend(message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="p-6 border-t border-white/5 bg-void/90 backdrop-blur-2xl relative">
      <div className="noise-overlay opacity-[0.03]" />

      {/* Smart Replies - Futuristic Chips */}
      {smartReplies.length > 0 && (
        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 scrollbar-none">
          <Terminal className="w-4 h-4 text-neon-purple flex-shrink-0" />
          {smartReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => {
                onSelectSmartReply?.(reply);
                onClearSmartReplies?.();
              }}
              className="px-3 py-1 bg-neon-purple/5 border border-neon-purple/20 rounded
                       text-[10px] font-mono text-neon-purple uppercase tracking-widest
                       hover:bg-neon-purple/10 hover:border-neon-purple/40 transition-all whitespace-nowrap"
            >
              {reply}
            </button>
          ))}
          <button
            onClick={onClearSmartReplies}
            className="p-1 rounded hover:bg-white/5"
          >
            <X className="w-3 h-3 text-white/20" />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-end gap-4">
        <div className="flex-1 relative group">
          {/* Futuristic Textarea Container */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue/20 to-neon-purple/20 opacity-0 group-focus-within:opacity-100 blur transition-all duration-500 rounded-none pointer-events-none" />

          <div className="relative flex items-center bg-dark-950 border border-white/10 rounded-none overflow-hidden">
            <div className="pl-4 pr-2 text-white/10">
              <Command className="w-4 h-4" />
            </div>

            <textarea
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="TERMINAL_INPUT_READY..."
              disabled={disabled}
              rows={1}
              className="w-full pl-2 pr-4 py-4 bg-transparent
                       text-[13px] font-sans text-white/90 placeholder:text-white/10 resize-none
                       focus:outline-none transition-all duration-200
                       disabled:opacity-50"
              style={{ minHeight: "52px", maxHeight: "150px" }}
            />

            {/* AI Suggest Trigger in Sidebar of Input */}
            {onRequestSmartReplies && (
              <button
                type="button"
                onClick={onRequestSmartReplies}
                className="p-3 text-white/20 hover:text-neon-purple transition-colors"
                title="Neural_Predict"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Global Input Actions */}
        <div className="flex items-center gap-2 h-[52px]">
          <button
            type="button"
            className="p-3 bg-dark-900 border border-white/5 rounded text-white/40 hover:text-white hover:border-white/20 transition-all"
          >
            <Paperclip className="w-4 h-4" />
          </button>

          <button
            ref={sendBtnRef}
            type="submit"
            disabled={!message.trim() || disabled}
            className="p-3 bg-white text-void rounded group disabled:opacity-30 disabled:grayscale transition-all hover:scale-105 active:scale-95"
          >
            <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
