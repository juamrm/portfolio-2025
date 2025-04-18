import React, { useRef } from "react";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number; // px movement
  className?: string;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 20, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const animFrame = useRef<number | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    animFrame.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${x / strength}px, ${y / strength}px) scale(1.08)`;
      el.style.boxShadow = `0 4px 24px 0 rgba(0,0,0,0.08)`;
    });
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    el.style.transform = "translate(0, 0) scale(1)";
    el.style.boxShadow = "none";
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "inline-block",
        transition: "transform 0.25s cubic-bezier(.22,1,.36,1), box-shadow 0.25s cubic-bezier(.22,1,.36,1)",
        willChange: "transform, box-shadow",
        cursor: "pointer"
      }}
    >
      {children}
    </div>
  );
};

export default Magnetic;
