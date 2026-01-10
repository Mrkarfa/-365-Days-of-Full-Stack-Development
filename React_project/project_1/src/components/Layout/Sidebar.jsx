import { useRef, useEffect, useState } from "react";
import {
  MessageSquare,
  Plus,
  Bot,
  Search,
  X,
  Hash,
  Activity,
} from "lucide-react";
import gsap from "gsap";
import UserProfile from "../Auth/UserProfile";

const Sidebar = ({
  conversations,
  currentChat,
  onSelectChat,
  onNewChat,
  onNewAIChat,
  isOpen,
  onClose,
}) => {
  const sidebarRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "expo.out" }
    );
  }, []);

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-40"
          onClick={onClose}
        />
      )}

      <aside
        ref={sidebarRef}
        className={`
          fixed lg:relative z-50 lg:z-auto
          w-80 h-full bg-void border-r border-white/5
          flex flex-col overflow-hidden
          transition-transform duration-500 lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="noise-overlay opacity-[0.05]" />

        {/* Futuristic Header */}
        <div className="p-6 relative">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="w-10 h-10 bg-dark-900 border border-white/10 rounded flex items-center justify-center">
                  <Hash className="w-5 h-5 text-cyber-blue" />
                </div>
                <div className="absolute -inset-1 bg-cyber-blue/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-black text-xl tracking-tighter text-glow">
                CORE<span className="text-white/20">CHAT</span>
              </span>
            </div>
            <button
              className="lg:hidden p-2 text-white/40 hover:text-white"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search with Futuristic Icon */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Activity className="w-4 h-4 text-white/20 group-focus-within:text-cyber-blue transition-colors" />
            </div>
            <input
              type="text"
              placeholder="NETWORK_SEARCH..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark-950/50 border border-white/5 rounded-none
                       text-[10px] font-mono tracking-widest text-white/80 placeholder:text-white/20
                       focus:outline-none focus:border-cyber-blue/50 transition-all uppercase"
            />
          </div>
        </div>

        {/* Action Grid */}
        <div className="px-6 py-2 grid grid-cols-2 gap-3">
          <button
            onClick={onNewChat}
            className="flex flex-col items-center justify-center gap-2 p-4
                     bg-dark-900/50 border border-white/5 rounded hover:border-accent-primary/50
                     transition-all group"
          >
            <Plus className="w-4 h-4 text-white/40 group-hover:text-white" />
            <span className="text-[8px] font-mono tracking-widest text-white/30 group-hover:text-white/60">
              NEW_LINK
            </span>
          </button>
          <button
            onClick={onNewAIChat}
            className="flex flex-col items-center justify-center gap-2 p-4
                     bg-dark-900/50 border border-white/5 rounded hover:border-neon-purple/50
                     transition-all group"
          >
            <Bot className="w-4 h-4 text-white/40 group-hover:text-neon-purple" />
            <span className="text-[8px] font-mono tracking-widest text-white/30 group-hover:text-white/60">
              AI_NODE
            </span>
          </button>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto px-4 mt-6">
          <div className="text-[8px] font-mono text-white/20 tracking-[0.3em] uppercase mb-4 px-2">
            Active_Transmissions
          </div>
          <div className="space-y-1">
            {filteredConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => onSelectChat(conv.id)}
                className={`
                  w-full flex items-center gap-4 p-3 rounded-none text-left relative group
                  transition-all duration-300
                  ${
                    currentChat === conv.id
                      ? "bg-white/5 border-l-2 border-cyber-blue"
                      : "hover:bg-white/[0.02] border-l-2 border-transparent hover:border-white/10"
                  }
                `}
              >
                <div
                  className={`
                  w-10 h-10 flex-shrink-0 flex items-center justify-center relative rounded
                  ${conv.isAIChat ? "bg-neon-purple/20" : "bg-dark-800"}
                `}
                >
                  {conv.isAIChat ? (
                    <Bot className="w-5 h-5 text-neon-purple" />
                  ) : (
                    <span className="text-xs font-mono text-white/40">
                      {conv.name?.substring(0, 2).toUpperCase() || "TX"}
                    </span>
                  )}
                  {currentChat === conv.id && (
                    <div className="absolute -inset-0.5 border border-cyber-blue/30 rounded" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[11px] font-bold tracking-tight uppercase ${
                        currentChat === conv.id
                          ? "text-cyber-blue"
                          : "text-white/70"
                      }`}
                    >
                      {conv.name || "ANONYMOUS"}
                    </span>
                    <span className="text-[8px] font-mono text-white/20">
                      SYNC_OK
                    </span>
                  </div>
                  <p className="text-[10px] text-white/30 truncate font-mono">
                    {conv.lastMessage || "IDLE_WAITING..."}
                  </p>
                </div>

                {/* Visual Glitch Decor */}
                <div className="absolute right-0 top-0 w-1 h-full opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-cyber-blue/20 to-transparent transition-opacity" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer User - Compact & Futuristic */}
        <div className="p-6 bg-dark-900/30">
          <UserProfile minimal={true} />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
