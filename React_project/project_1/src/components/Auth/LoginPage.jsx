import { useRef, useEffect } from "react";
import {
  Chrome,
  MessageSquare,
  Sparkles,
  Zap,
  Shield,
  Cpu,
} from "lucide-react";
import gsap from "gsap";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { signInWithGoogle, loading } = useAuth();
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const glintRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mesh gradient movement
      gsap.to(".mesh-blob", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2,
      });

      // Create starlight particles
      const stars = Array.from({ length: 50 }).map((_, i) => {
        const star = document.createElement("div");
        star.className =
          "absolute w-[1px] h-[1px] bg-white rounded-full opacity-0";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starsRef.current.appendChild(star);
        return star;
      });

      gsap.to(stars, {
        opacity: "random(0.1, 0.8)",
        duration: "random(1, 3)",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.1,
          from: "random",
        },
      });

      // Holographic card entrance
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.8, rotateX: 45, y: 100 },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          y: 0,
          duration: 1.5,
          ease: "expo.out",
        }
      );

      // Mouse parallax
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to(cardRef.current, {
          rotateY: xPos,
          rotateX: -yPos,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(glintRef.current, {
          x: clientX - window.innerWidth / 2,
          y: clientY - window.innerHeight / 2,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative bg-void overflow-hidden perspective-1000"
    >
      <div className="noise-overlay" />

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="mesh-blob absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-primary/20 blur-[120px] rounded-full" />
        <div className="mesh-blob absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-purple/20 blur-[120px] rounded-full" />
        <div className="mesh-blob absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-cyber-blue/10 blur-[100px] rounded-full" />
      </div>

      {/* Stars Container */}
      <div
        ref={starsRef}
        className="absolute inset-0 z-1 pointer-events-none"
      />

      {/* Main Holographic Plate */}
      <div ref={cardRef} className="relative z-10 w-full max-w-lg mx-4">
        <div className="cyber-glass rounded-[32px] p-12 relative overflow-hidden group">
          {/* Holographic Glint */}
          <div
            ref={glintRef}
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"
          />

          {/* Decals */}
          <div className="absolute top-6 left-6 flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
          <div className="absolute top-6 right-8 text-[10px] font-mono text-white/20 tracking-widest uppercase">
            Protocol: Alpha-7
          </div>

          <div className="flex flex-col items-center">
            {/* Core Icon */}
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-dark-900 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-accent opacity-20" />
                <Cpu className="w-12 h-12 text-cyber-blue relative z-10 animate-pulse" />
              </div>
              <div className="absolute -inset-4 bg-cyber-blue/20 blur-2xl rounded-full z-0 opacity-50" />
            </div>

            <h1 className="text-4xl font-black text-center mb-2 tracking-tighter text-glow">
              <span className="gradient-text">CHATFLOW</span>
              <span className="text-white/90">.AI</span>
            </h1>

            <p className="text-white/40 text-center mb-12 text-sm font-mono tracking-widest uppercase">
              // Neural Link Established
            </p>

            {/* Auth Action */}
            <button
              onClick={() => !loading && signInWithGoogle()}
              disabled={loading}
              className="btn-futuristic w-full group relative"
            >
              <div className="flex items-center justify-center gap-4">
                <Chrome className="w-5 h-5 group-hover:text-cyber-blue transition-colors" />
                <span>
                  {loading ? "Decrypting..." : "Initiate Google Auth"}
                </span>
              </div>
            </button>

            {/* Sub-features */}
            <div className="mt-12 w-full grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
              <div className="flex flex-col items-center gap-2 group cursor-help">
                <Zap className="w-4 h-4 text-white/20 group-hover:text-amber-400 transition-colors" />
                <span className="text-[10px] font-mono text-white/30 uppercase">
                  Instant
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-help">
                <Sparkles className="w-4 h-4 text-white/20 group-hover:text-neon-purple transition-colors" />
                <span className="text-[10px] font-mono text-white/30 uppercase">
                  Neural
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 group cursor-help">
                <Shield className="w-4 h-4 text-white/20 group-hover:text-emerald-400 transition-colors" />
                <span className="text-[10px] font-mono text-white/30 uppercase">
                  Secure
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Underlay Label */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full text-center">
          <span className="text-[9px] font-mono text-white/10 tracking-[1em] uppercase">
            © 2026 Core Systems Integration
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
