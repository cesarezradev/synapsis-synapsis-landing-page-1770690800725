"use client";

import { motion } from "framer-motion";

interface Props {
  className?: string;
  color?: string;
  size?: number;
}

export function GlowOrb({ className = "", color = "synapsis-500", size = 400 }: Props) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, var(--tw-gradient-from) 0%, transparent 70%)`,
      }}
    />
  );
}

export function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Corner gradients */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-synapsis-500/10 rounded-full blur-[160px]" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />
    </div>
  );
}
