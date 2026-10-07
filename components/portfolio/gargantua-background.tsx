"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Interactive Gargantua Black Hole Background
 * Features:
 * - WebGL relativistic raymarching with Schwarzschild gravitational lensing
 * - Accretion disk with Keplerian differential rotation, turbulence & relativistic Doppler boosting
 * - Interactive 3D camera tilt following mouse motion with smooth inertia
 * - Interactive starfield with gravitational particle physics (inspired by GPT-teaser starry landing pages)
 * - Click-to-pulse spacetime gravitational wave ripple
 */
export function GargantuaBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [qualityMode, setQualityMode] = useState<"high" | "performance">("high");

  // Track mouse coordinates normalized [-1, 1]
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, speed: 0 });
  const pulseRef = useRef({ time: -10.0, x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize WebGL
    const gl =
      canvas.getContext("webgl", {
        powerPreference: "high-performance",
        antialias: false,
        alpha: true,
      }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      setIsSupported(false);
      return;
    }

    // Vertex shader
    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Relativistic Gargantua Fragment Shader
    const fsSource = `
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec3 u_pulse; // x, y, time

      #define PI 3.14159265359
      #define STEPS 48
      #define RS 1.8         // Schwarzschild radius
      #define RIN 2.4        // Inner accretion disk radius (ISCO)
      #define ROUT 8.2       // Outer accretion disk radius

      // Procedural pseudo-random hash
      float hash(vec2 p) {
        p = fract(p * vec2(234.34, 435.345));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
      }

      // Value noise
      float vnoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      // Fractal Brownian Motion for accretion plasma filaments
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.55;
        mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
        for (int i = 0; i < 4; i++) {
          v += a * vnoise(p);
          p = rot * p * 2.05 + vec2(1.2, 3.4);
          a *= 0.5;
        }
        return v;
      }

      // Relativistic Blackbody Color Ramp (Interstellar Golden/Amber Palette)
      vec3 blackbodyPalette(float t) {
        // Temperature/emission gradient
        vec3 colCore = vec3(1.0, 0.96, 0.85);     // Blinding white-hot core
        vec3 colMid  = vec3(1.0, 0.62, 0.16);     // Relativistic golden orange
        vec3 colWarm = vec3(0.88, 0.32, 0.05);    // Deep amber plasma
        vec3 colDark = vec3(0.28, 0.06, 0.02);    // Outer cooler reddish dust
        
        if (t > 0.8) {
          return mix(colMid, colCore, (t - 0.8) / 0.2);
        } else if (t > 0.35) {
          return mix(colWarm, colMid, (t - 0.35) / 0.45);
        } else {
          return mix(colDark, colWarm, t / 0.35);
        }
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);

        // Responsive black hole center offset:
        // Positioned slightly higher or right for majestic composition
        vec2 centerOffset = vec2(0.12, 0.05);
        uv -= centerOffset;

        // Gravitational wave pulse distortion from clicks
        float pDist = length(uv - u_pulse.xy);
        float pAge = u_time - u_pulse.z;
        if (pAge > 0.0 && pAge < 3.0) {
          float waveFront = pAge * 1.2;
          float waveWidth = 0.15;
          float wave = exp(-pow((pDist - waveFront) / waveWidth, 2.0)) * (1.0 - pAge / 3.0);
          uv += normalize(uv - u_pulse.xy) * wave * 0.04;
        }

        // Camera setup with dynamic mouse parallax
        // Subtle tilt angle: Pitch ~ -0.25 rad, Yaw controlled by mouse
        float yaw = u_mouse.x * 0.35;
        float pitch = -0.22 + u_mouse.y * 0.25;
        float roll = 0.18 + u_mouse.x * 0.08; // Iconic slight diagonal tilt like the movie

        // Camera rotation matrices
        mat3 rotYaw = mat3(
          cos(yaw), 0.0, sin(yaw),
          0.0,      1.0, 0.0,
         -sin(yaw), 0.0, cos(yaw)
        );
        mat3 rotPitch = mat3(
          1.0, 0.0,        0.0,
          0.0, cos(pitch), -sin(pitch),
          0.0, sin(pitch),  cos(pitch)
        );
        mat3 rotRoll = mat3(
          cos(roll), -sin(roll), 0.0,
          sin(roll),  cos(roll), 0.0,
          0.0,       0.0,        1.0
        );
        mat3 camRot = rotRoll * rotPitch * rotYaw;

        // Ray origin & initial direction
        vec3 rayOrigin = camRot * vec3(0.0, 0.0, -9.0);
        vec3 rayDir = normalize(camRot * vec3(uv, 1.45));

        vec3 pos = rayOrigin;
        vec3 vel = rayDir;

        vec3 accumColor = vec3(0.0);
        float transmittance = 1.0;
        bool hitHorizon = false;

        // Adaptive Schwarzschild geodesic step
        for (int i = 0; i < STEPS; i++) {
          float r = length(pos);

          // Event Horizon absorption
          if (r < RS) {
            hitHorizon = true;
            transmittance = 0.0;
            break;
          }

          if (r > 18.0) {
            break;
          }

          // Curved spacetime light bending (Schwarzschild gravitational acceleration)
          // a = -1.5 * Rs * pos / r^5 * |pos x vel|^2
          vec3 hVec = cross(pos, vel);
          float h2 = dot(hVec, hVec);
          vec3 accel = -1.5 * RS * pos * h2 / (r * r * r * r * r);

          // Adaptive integration step
          float dt = clamp(r * 0.07, 0.04, 0.42);

          vec3 nextVel = normalize(vel + accel * dt);
          vec3 nextPos = pos + nextVel * dt;

          // Accretion Disk Crossing in equatorial plane (Y = 0)
          if ((pos.y * nextPos.y) <= 0.0) {
            float tPlane = -pos.y / (nextPos.y - pos.y + 0.00001);
            vec3 hitPos = mix(pos, nextPos, clamp(tPlane, 0.0, 1.0));
            float rDisk = length(hitPos.xz);

            if (rDisk >= RIN && rDisk <= ROUT) {
              // Normalized radius in disk [0, 1]
              float rNorm = (rDisk - RIN) / (ROUT - RIN);

              // Differential Keplerian rotation: inner spins faster
              float angle = atan(hitPos.z, hitPos.x);
              float omega = 2.4 / pow(rDisk, 1.35);
              float rotAngle = angle + omega * u_time * 0.6;

              // Plasma filaments and dust lanes
              vec2 diskUV = vec2(rDisk * 2.8, rotAngle * 2.8);
              float turbulence = fbm(diskUV);
              float dust = fbm(diskUV * 1.8 + vec2(1.5, 0.8));

              // Relativistic Doppler beaming / boost
              // Disk matter orbits in the X-Z plane
              vec3 orbitalVel = normalize(vec3(-hitPos.z, 0.0, hitPos.x));
              float beta = dot(orbitalVel, -vel) * (0.62 / sqrt(rDisk));
              float dopplerFactor = 1.0 / (1.0 - beta);
              float dopplerBoost = pow(clamp(dopplerFactor, 0.35, 3.2), 3.2);

              // Radial emission profile (peaks near ISCO/inner edge, smooth fade to outer edge)
              float profile = pow(1.0 - rNorm, 1.3) * smoothstep(0.0, 0.08, rNorm);
              float emission = profile * (0.65 + 0.7 * turbulence) * dopplerBoost;

              // Incandescent blackbody color
              vec3 diskColor = blackbodyPalette(clamp(emission * 0.75, 0.0, 1.0));

              // Inner photon ring highlight
              if (rDisk < RIN + 0.45) {
                float innerGlow = pow(1.0 - (rDisk - RIN) / 0.45, 3.0) * 2.8;
                diskColor += vec3(1.0, 0.95, 0.9) * innerGlow;
              }

              // Disk opacity
              float alpha = clamp(emission * (0.55 + 0.45 * dust), 0.0, 0.95);

              accumColor += diskColor * alpha * transmittance;
              transmittance *= (1.0 - alpha);

              if (transmittance < 0.02) break;
            }
          }

          pos = nextPos;
          vel = nextVel;
        }

        // Deep Space Background with Gravitationally Lensed Stars
        if (!hitHorizon && transmittance > 0.01) {
          // Final deflected ray direction samples background celestial sphere
          vec3 starDir = vel;
          vec2 starUV = starDir.xy / (abs(starDir.z) + 0.1) * 90.0;

          // Twinkling stars
          float starVal = hash(floor(starUV));
          if (starVal > 0.982) {
            float twinkle = 0.5 + 0.5 * sin(u_time * 3.5 + starVal * 20.0);
            float starBrightness = pow((starVal - 0.982) / (1.0 - 0.982), 4.0) * twinkle * 1.8;
            accumColor += vec3(0.85, 0.9, 1.0) * starBrightness * transmittance;
          }

          // Faint cosmic interstellar dust cloud glow
          float nebula = fbm(starDir.xy * 2.0 + vec2(0.5, 0.2)) * 0.08;
          accumColor += vec3(0.02, 0.03, 0.06) * nebula * transmittance;
        }

        // Ambient dark space vignette
        float vignette = 1.0 - dot(uv * 0.65, uv * 0.65);
        accumColor *= clamp(vignette, 0.2, 1.0);

        gl_FragColor = vec4(accumColor, 1.0);
      }
    `;

    // Compile shader helper
    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error("Shader compile error:", glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) {
      setIsSupported(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      setIsSupported(false);
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uResLoc = gl.getUniformLocation(program, "u_resolution");
    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uMouseLoc = gl.getUniformLocation(program, "u_mouse");
    const uPulseLoc = gl.getUniformLocation(program, "u_pulse");

    let animationFrameId: number;
    const startTime = performance.now();

    // Render loop
    const render = () => {
      // Smooth mouse lerping
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const currentTime = (performance.now() - startTime) * 0.001;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform1f(uTimeLoc, currentTime);
      gl.uniform2f(uMouseLoc, mouse.x, mouse.y);
      gl.uniform3f(
        uPulseLoc,
        pulseRef.current.x,
        pulseRef.current.y,
        pulseRef.current.time
      );

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    // Resize handler
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, qualityMode === "high" ? 1.5 : 1.0);
      const width = Math.floor(window.innerWidth * dpr);
      const height = Math.floor(window.innerHeight * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (gl) {
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
        gl.deleteBuffer(positionBuffer);
      }
    };
  }, [qualityMode]);

  // Interactive Particle Stars Layer (GPT-teaser style starry dust)
  useEffect(() => {
    const pCanvas = particleCanvasRef.current;
    if (!pCanvas) return;
    const ctx = pCanvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (pCanvas.width = window.innerWidth);
    let height = (pCanvas.height = window.innerHeight);

    // Particle definition
    interface StarParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
      radius: number;
      alpha: number;
      twinkleSpeed: number;
      color: string;
      trail: { x: number; y: number }[];
    }

    const PARTICLE_COUNT = 140;
    const particles: StarParticle[] = [];

    const colors = [
      "rgba(255, 235, 190, ", // Soft gold
      "rgba(255, 195, 120, ", // Amber
      "rgba(200, 220, 255, ", // Cosmic blue-white
      "rgba(255, 255, 255, ", // Pure star
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseX: x,
        baseY: y,
        radius: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
        trail: [],
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let isMouseOver = false;

    const handlePointerMove = (e: PointerEvent) => {
      isMouseOver = true;
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update shader mouse target normalized [-1, 1]
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = nx;
      mouseRef.current.targetY = ny;
    };

    const handlePointerLeave = () => {
      isMouseOver = false;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    const handlePointerDown = (e: PointerEvent) => {
      // Create gravitational shockwave pulse
      const nx = ((e.clientX / window.innerWidth) * 2 - 1) * 0.5;
      const ny = (-(e.clientY / window.innerHeight) * 2 + 1) * 0.5;
      pulseRef.current = {
        x: nx,
        y: ny,
        time: performance.now() * 0.001,
      };

      // Scatter particles slightly from click
      particles.forEach((p) => {
        const dx = p.x - e.clientX;
        const dy = p.y - e.clientY;
        const dist = Math.hypot(dx, dy);
        if (dist < 280) {
          const force = (1 - dist / 280) * 12;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      });
    };

    const handleResize = () => {
      width = pCanvas.width = window.innerWidth;
      height = pCanvas.height = window.innerHeight;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleResize);

    // Particle render loop
    const renderParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Black hole gravity center (aligned with shader offset)
      const bhX = width * 0.58;
      const bhY = height * 0.46;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Natural subtle drift & Keplerian curve towards black hole
        const dxBH = bhX - p.x;
        const dyBH = bhY - p.y;
        const distBH = Math.hypot(dxBH, dyBH);

        if (distBH > 70 && distBH < 650) {
          // Gravitational pull + tangential orbital swirl
          const gForce = 0.015 / Math.max(distBH * 0.02, 1.0);
          const tangentX = -dyBH / distBH;
          const tangentY = dxBH / distBH;
          p.vx += (dxBH / distBH) * gForce * 0.4 + tangentX * gForce * 0.8;
          p.vy += (dyBH / distBH) * gForce * 0.4 + tangentY * gForce * 0.8;
        }

        // 2. Interactive mouse gravity (GPT-style reactive stars)
        if (isMouseOver) {
          const dxMouse = mouseX - p.x;
          const dyMouse = mouseY - p.y;
          const distMouse = Math.hypot(dxMouse, dyMouse);

          if (distMouse < 220) {
            const pull = (1 - distMouse / 220) * 0.6;
            p.vx += (dxMouse / distMouse) * pull;
            p.vy += (dyMouse / distMouse) * pull;
          }
        }

        // Apply friction
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Update positions
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Twinkle effect
        const currentAlpha =
          p.alpha * (0.6 + 0.4 * Math.sin(performance.now() * p.twinkleSpeed));

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.shadowColor = "rgba(255, 200, 100, 0.4)";
        ctx.shadowBlur = p.radius * 3;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(renderParticles);
    };

    renderParticles();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-background">
      {/* WebGL Relativistic Gargantua Shader Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover select-none"
        style={{ filter: "brightness(1.05) contrast(1.12)" }}
      />

      {/* Interactive Floating Starfield & Cosmic Dust Canvas */}
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 w-full h-full object-cover select-none mix-blend-screen opacity-90"
      />

      {/* Atmospheric depth vignette and subtle gradient for content legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--color-background)_100%)] opacity-60 pointer-events-none" />

      {/* Fallback notification if WebGL is disabled */}
      {!isSupported && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/90 text-xs text-muted-foreground">
          Modo espacial estático (WebGL não suportado pelo navegador)
        </div>
      )}
    </div>
  );
}
