import {
  Menu,
  MoreVertical,
  Activity,
  Radio,
  Info,
  Sparkles,
} from "lucide-react";

const Header = ({ chatName, isAIChat, onMenuClick, onSummarize }) => {
  return (
    <header className="h-16 px-6 flex items-center justify-between border-b border-white/5 bg-void/80 backdrop-blur-2xl relative z-10">
      <div className="noise-overlay opacity-[0.03]" />

      {/* Left Info */}
      <div className="flex items-center gap-6">
        <button
          className="lg:hidden p-2 text-white/40 hover:text-white transition-colors"
          onClick={onMenuClick}
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4">
          <div
            className={`
            w-10 h-10 rounded border flex items-center justify-center relative
            ${
              isAIChat
                ? "border-neon-purple/50 bg-neon-purple/10"
                : "border-white/10 bg-dark-900"
            }
          `}
          >
            {isAIChat ? (
              <Sparkles className="w-5 h-5 text-neon-purple" />
            ) : (
              <span className="text-xs font-mono text-white/40">
                {chatName?.substring(0, 2).toUpperCase() || "TX"}
              </span>
            )}
            {/* Status indicator decal */}
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 border border-void" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold tracking-wider text-white uppercase italic">
                {chatName || "CHANNEL_OFFLINE"}
              </h2>
              <div className="flex gap-0.5">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-0.5 h-3 ${
                      i === 1 ? "bg-cyber-blue" : "bg-white/10"
                    } rounded-full`}
                  />
                ))}
              </div>
            </div>
            {isAIChat ? (
              <p className="text-[10px] font-mono text-neon-purple uppercase tracking-[0.2em] animate-pulse">
                // NEURAL_LINK_ACTIVE
              </p>
            ) : (
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
                // ENCRYPTED_CHANNEL
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Action Suite */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 mr-4 text-[9px] font-mono text-white/20 uppercase tracking-widest">
          <Radio className="w-3 h-3 text-emerald-500/50" />
          Latency: 12ms
        </div>

        {onSummarize && (
          <button
            onClick={onSummarize}
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-cyber-blue/30 
                     bg-cyber-blue/5 text-cyber-blue text-[10px] font-bold uppercase tracking-widest
                     hover:bg-cyber-blue/10 transition-all group"
          >
            <Sparkles className="w-3 h-3 group-hover:rotate-12 transition-transform" />
            Summarize_Data
          </button>
        )}

        <button className="p-2 text-white/40 hover:text-white transition-colors border border-transparent hover:border-white/5 rounded">
          <Info className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
