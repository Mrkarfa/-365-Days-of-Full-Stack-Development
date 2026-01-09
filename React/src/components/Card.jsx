import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Card = ({
  icon,
  title,
  description,
  link,
  badge,
  variant = "default",
}) => {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      const card = cardRef.current;

      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: cardRef }
  );

  const CardWrapper = link ? Link : "div";
  const wrapperProps = link ? { to: link } : {};

  return (
    <CardWrapper
      ref={cardRef}
      className={`feature-card ${variant}`}
      {...wrapperProps}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="card-inner">
        {badge && <span className="card-badge">{badge}</span>}
        {icon && <div className="card-icon">{icon}</div>}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {link && (
          <span className="card-link">
            Learn more <span className="arrow">→</span>
          </span>
        )}
      </div>
      <div className="card-glow"></div>
    </CardWrapper>
  );
};

export default Card;
