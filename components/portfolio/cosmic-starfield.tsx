"use client";

import React, { useEffect, useRef } from "react";

/**
 * Global Cosmic Starfield Background
 * Features:
 * - Persistent across the entire page (Hero, About, Experience, Projects, etc.)
 * - Deep space theme (#020408) with ambient nebula lighting
 * - Interactive stars with cursor gravitational pull (GPT6-style)
 * - Constellation stardust connections near cursor
 * - Spacetime gravitational shockwave ripple on click
 * - Cosmic shooting stars traversing the background
 */
export function CosmicStarfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shockwavesRef = useRef<Array<{ x: number; y: number; radius: number; maxRadius: number; alpha: number }>>([]);

  const mouseRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    isHovering: false,
    rawX: 0,
    rawY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface Star {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      color: string;
      twinkleSpeed: number;
      twinklePhase: number;
      depth: number;
    }

    const STAR_COUNT = 160;
    const stars: Star[] = [];

    const starColors = [
      "255, 240, 205", // Warm gold
      "255, 210, 150", // Amber star
      "210, 230, 255", // Cool celestial blue
      "255, 255, 255", // Diamond white
      "180, 210, 255", // Nebula cyan
    ];

    for (let i = 0; i < STAR_COUNT; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const depth = Math.random();
      stars.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: (Math.random() * 1.5 + 0.6) * (0.6 + depth * 0.6),
        baseAlpha: Math.random() * 0.55 + 0.3,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        twinkleSpeed: Math.random() * 0.03 + 0.015,
        twinklePhase: Math.random() * Math.PI * 2,
        depth,
      });
    }

    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
    }

    let shootingStar: ShootingStar | null = null;
    let nextShootingStarTime = performance.now() + 3500;

    const handlePointerMove = (e: PointerEvent) => {
      mouseRef.current.isHovering = true;
      mouseRef.current.rawX = e.clientX;
      mouseRef.current.rawY = e.clientY;
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handlePointerLeave = () => {
      mouseRef.current.isHovering = false;
    };

    const handlePointerDown = (e: PointerEvent) => {
      shockwavesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 12,
        maxRadius: Math.max(width, height) * 0.45,
        alpha: 0.8,
      });

      stars.forEach((s) => {
        const dx = s.x - e.clientX;
        const dy = s.y - e.clientY;
        const dist = Math.hypot(dx, dy);
        if (dist < 260) {
          const force = (1 - dist / 260) * 7;
          s.vx += (dx / dist) * force;
          s.vy += (dy / dist) * force;
        }
      });
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleResize);

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 1. Shockwaves
      for (let w = shockwavesRef.current.length - 1; w >= 0; w--) {
        const wave = shockwavesRef.current[w];
        wave.radius += 8.5;
        wave.alpha *= 0.94;

        if (wave.alpha > 0.02 && wave.radius < wave.maxRadius) {
          ctx.beginPath();
          ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 205, 130, ${wave.alpha * 0.45})`;
          ctx.lineWidth = 2.2;
          ctx.shadowColor = "rgba(255, 190, 90, 0.5)";
          ctx.shadowBlur = 10;
          ctx.stroke();
          ctx.shadowBlur = 0;
        } else {
          shockwavesRef.current.splice(w, 1);
        }
      }

      // 2. Stars
      const nearMouseStars: Star[] = [];

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Cursor Gravitational Pull (GPT6-style)
        if (mouse.isHovering) {
          const dxM = mouse.rawX - s.x;
          const dyM = mouse.rawY - s.y;
          const distM = Math.hypot(dxM, dyM);

          if (distM < 240) {
            const pull = (1 - distM / 240) * 0.5 * (0.5 + s.depth * 0.8);
            s.vx += (dxM / distM) * pull;
            s.vy += (dyM / distM) * pull;
            nearMouseStars.push(s);
          }
        }

        s.vx *= 0.94;
        s.vy *= 0.94;

        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        s.twinklePhase += s.twinkleSpeed;
        const twinkle = 0.65 + 0.35 * Math.sin(s.twinklePhase);
        const finalAlpha = s.baseAlpha * twinkle;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${finalAlpha})`;
        ctx.shadowColor = `rgba(${s.color}, 0.5)`;
        ctx.shadowBlur = s.radius * 3;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 3. Stardust Constellation Links near cursor
      if (nearMouseStars.length > 1) {
        ctx.lineWidth = 0.75;
        for (let i = 0; i < nearMouseStars.length; i++) {
          for (let j = i + 1; j < nearMouseStars.length; j++) {
            const a = nearMouseStars[i];
            const b = nearMouseStars[j];
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < 85) {
              const lineAlpha = (1 - d / 85) * 0.32;
              ctx.strokeStyle = `rgba(255, 215, 140, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      // 4. Shooting Stars
      if (time > nextShootingStarTime && !shootingStar) {
        shootingStar = {
          x: Math.random() * width * 0.85,
          y: Math.random() * height * 0.4,
          length: Math.random() * 80 + 70,
          speed: Math.random() * 14 + 15,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          alpha: 1.0,
        };
      }

      if (shootingStar) {
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.alpha *= 0.94;

        if (shootingStar.alpha > 0.05) {
          const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
          const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;
          const grad = ctx.createLinearGradient(shootingStar.x, shootingStar.y, tailX, tailY);
          grad.addColorStop(0, `rgba(255, 250, 230, ${shootingStar.alpha})`);
          grad.addColorStop(1, "rgba(255, 190, 90, 0)");

          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(tailX, tailY);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.8;
          ctx.stroke();
        } else {
          shootingStar = null;
          nextShootingStarTime = time + Math.random() * 6000 + 4000;
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020408]">
      {/* Deep Space Subtle Nebula Accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-blue-600/3 rounded-full blur-[150px] pointer-events-none" />

      {/* Interactive Stars Canvas (Full Page) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover select-none mix-blend-screen pointer-events-none z-10"
      />
    </div>
  );
}
