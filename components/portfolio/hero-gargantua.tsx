"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Gargantua Black Hole Background for the Hero / Presentation Section Only
 * Features:
 * - High-definition Gargantua with smooth 3D mouse parallax tilt
 * - Relativistic accretion disk breathing glow & photon sphere bloom
 * - Seamless bottom gradient fade into the deep cosmic space of the subsequent sections
 */
export function HeroGargantua() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      // Normalized [-1, 1]
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (containerRef.current) {
        const tiltX = -currentY * 7;
        const tiltY = currentX * 10;
        const transX = currentX * 22;
        const transY = currentY * 16;
        containerRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${transX}px, ${transY}px, 0) scale(1.05)`;
      }

      animId = requestAnimationFrame(updateParallax);
    };

    animId = requestAnimationFrame(updateParallax);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* 3D Parallax Gargantua Container */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        <Image
          src="/gargantua.png"
          alt="Buraco Negro Gargantua"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center scale-105 opacity-90"
          style={{
            filter: "contrast(1.15) brightness(1.05) saturate(1.12)",
          }}
        />

        {/* Relativistic Accretion Disk Dynamic Breathing Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_42%,rgba(255,180,50,0.2)_0%,rgba(255,120,20,0.08)_35%,transparent_70%)] animate-pulse mix-blend-screen" />

        {/* Golden Photon Sphere Highlights */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_38%,rgba(255,230,170,0.22)_0%,transparent_40%)] mix-blend-screen" />
      </div>

      {/* Atmospheric depth lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020408]/60 via-transparent to-[#020408]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#020408_100%)] opacity-60" />

      {/* Smooth seamless bottom transition into deep cosmic space */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#020408]/70 to-[#020408]" />
    </div>
  );
}
