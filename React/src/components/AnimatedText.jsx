import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({
  children,
  as: Tag = "div",
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  className = "",
  trigger = true,
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const animations = {
      fadeUp: {
        from: { y: 40, opacity: 0 },
        to: { y: 0, opacity: 1 },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideLeft: {
        from: { x: -50, opacity: 0 },
        to: { x: 0, opacity: 1 },
      },
      slideRight: {
        from: { x: 50, opacity: 0 },
        to: { x: 0, opacity: 1 },
      },
      scaleUp: {
        from: { scale: 0.9, opacity: 0 },
        to: { scale: 1, opacity: 1 },
      },
    };

    const anim = animations[animation] || animations.fadeUp;

    if (trigger) {
      gsap.fromTo(element, anim.from, {
        ...anim.to,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
      });
    } else {
      gsap.fromTo(element, anim.from, {
        ...anim.to,
        duration,
        delay,
        ease: "power3.out",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [animation, delay, duration, trigger]);

  return (
    <Tag ref={textRef} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
};

export default AnimatedText;
