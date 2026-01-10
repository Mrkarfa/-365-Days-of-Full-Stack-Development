import { useRef, useEffect } from "react";
import { LogOut, Settings, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useAuth } from "../../context/AuthContext";

const UserProfile = ({ minimal = false }) => {
  const { user, logout } = useAuth();
  const profileRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      profileRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  if (!user) return null;

  if (minimal) {
    return (
      <div className="flex items-center gap-3">
        <img
          src={
            user.photoURL ||
            `https://ui-avatars.com/api/?name=${user.displayName}&background=6366f1&color=fff`
          }
          alt={user.displayName}
          className="w-8 h-8 rounded-full border-2 border-accent-primary/30"
        />
        <span className="text-sm text-white/80 truncate max-w-[120px]">
          {user.displayName}
        </span>
      </div>
    );
  }

  return (
    <div ref={profileRef} className="glass rounded-2xl p-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={
              user.photoURL ||
              `https://ui-avatars.com/api/?name=${user.displayName}&background=6366f1&color=fff`
            }
            alt={user.displayName}
            className="w-12 h-12 rounded-full border-2 border-accent-primary/50"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-900" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white truncate">
            {user.displayName}
          </p>
          <p className="text-sm text-white/50 truncate">{user.email}</p>
        </div>

        <button
          onClick={logout}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors group"
          title="Sign out"
        >
          <LogOut className="w-5 h-5 text-white/50 group-hover:text-red-400 transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
