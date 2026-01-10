const TypingIndicator = ({ senderName = "Someone" }) => {
  return (
    <div className="flex items-start gap-4 mb-2">
      <div className="w-10 h-10 flex-shrink-0 bg-dark-900 border border-white/5 rounded flex items-center justify-center">
        <span className="text-[10px] font-mono text-white/20">...</span>
      </div>

      <div className="msg-bubble-received px-5 py-4 flex items-center gap-2">
        <div className="w-1 h-3 bg-cyber-blue animate-pulse rounded-full" />
        <div className="flex items-center gap-1.5 px-2">
          <div className="typing-dot bg-white/40"></div>
          <div className="typing-dot bg-white/40"></div>
          <div className="typing-dot bg-white/40"></div>
        </div>
        <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em] ml-2">
          Receiving_Data
        </span>
      </div>
    </div>
  );
};

export default TypingIndicator;
