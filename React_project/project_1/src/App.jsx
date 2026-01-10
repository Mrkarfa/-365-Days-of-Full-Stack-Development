import { useState, useEffect, useRef } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { useChat } from "./hooks/useChat";
import LoginPage from "./components/Auth/LoginPage";
import Sidebar from "./components/Layout/Sidebar";
import ChatWindow from "./components/Chat/ChatWindow";
import gsap from "gsap";

const ChatApp = () => {
  const { user, loading: authLoading } = useAuth();
  const {
    conversations,
    currentChat,
    setCurrentChat,
    createChat,
    createAIChat,
  } = useChat();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef(null);

  // Animate main content on mount
  useEffect(() => {
    if (user && mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [user]);

  // Show loading state
  if (authLoading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-accent-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-white/60">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!user) {
    return <LoginPage />;
  }

  // Handle new chat creation
  const handleNewChat = async () => {
    try {
      const chatId = await createChat([], `Chat ${conversations.length + 1}`);
      if (chatId) {
        setCurrentChat(chatId);
        setSidebarOpen(false);
      }
    } catch (error) {
      console.error("Create chat error:", error);
    }
  };

  // Handle new AI chat creation
  const handleNewAIChat = async () => {
    try {
      const chatId = await createAIChat();
      if (chatId) {
        setCurrentChat(chatId);
        setSidebarOpen(false);
      }
    } catch (error) {
      console.error("Create AI chat error:", error);
    }
  };

  // Handle chat selection
  const handleSelectChat = (chatId) => {
    setCurrentChat(chatId);
    setSidebarOpen(false);
  };

  return (
    <div ref={mainRef} className="flex h-screen bg-dark-950 overflow-hidden">
      <Sidebar
        conversations={conversations}
        currentChat={currentChat}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        onNewAIChat={handleNewAIChat}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <ChatWindow
        chatId={currentChat}
        onMenuClick={() => setSidebarOpen(true)}
      />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <ChatApp />
    </AuthProvider>
  );
}

export default App;
