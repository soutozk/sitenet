"use client";

import { useEffect, useState } from "react";

export function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hidden lg:block absolute inset-0 overflow-hidden">
      <div
        className="absolute w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
    </div>
  );
}
