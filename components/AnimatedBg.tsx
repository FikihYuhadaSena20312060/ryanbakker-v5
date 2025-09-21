"use client";

import { useEffect, useRef } from "react";

const AnimatedBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Browser detection for optimizations
    const isSafari =
      /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);
    const isMobile =
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    // Check if canvas filter blur is supported and works properly
    const supportsCanvasFilter = (() => {
      try {
        const testCanvas = document.createElement("canvas");
        const testCtx = testCanvas.getContext("2d");
        if (!testCtx) return false;

        // Test if filter property is supported
        testCtx.filter = "blur(10px)";
        if (testCtx.filter !== "blur(10px)") return false;

        // Test if the filter actually works by drawing and checking if it's applied
        testCtx.fillStyle = "red";
        testCtx.fillRect(0, 0, 10, 10);
        testCtx.filter = "blur(5px)";
        testCtx.fillRect(5, 5, 10, 10);

        // Reset filter
        testCtx.filter = "none";
        return true;
      } catch {
        return false;
      }
    })();

    // Performance optimizations for mobile
    const isLowEndDevice =
      isMobile && (navigator.hardwareConcurrency || 4) <= 2;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation timing for consistent speed across browsers
    let lastTime = 0;
    const targetFPS = isLowEndDevice ? 30 : 60; // Reduce FPS on low-end devices
    const frameInterval = 1000 / targetFPS;

    // Blob class
    class Blob {
      x: number;
      y: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      baseSpeed: number;
      directionChangeTimer: number;
      directionChangeInterval: number;

      constructor(x: number, y: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;

        // Individual speed and movement patterns for each blob
        this.baseSpeed = 0.8 + Math.random() * 1.2; // Random speed between 0.8 and 2.0
        this.vx = (Math.random() - 0.5) * this.baseSpeed;
        this.vy = (Math.random() - 0.5) * this.baseSpeed;

        // Random direction change intervals for more organic movement
        this.directionChangeTimer = 0;
        this.directionChangeInterval = 2000 + Math.random() * 3000; // Change direction every 2-5 seconds
      }

      update(deltaTime: number) {
        // Use deltaTime for consistent movement regardless of frame rate
        const speedMultiplier = deltaTime / 16.67; // 16.67ms = 60fps
        this.x += this.vx * speedMultiplier;
        this.y += this.vy * speedMultiplier;

        // Update direction change timer
        this.directionChangeTimer += deltaTime;

        // Randomly change direction for more organic movement
        if (this.directionChangeTimer >= this.directionChangeInterval) {
          this.directionChangeTimer = 0;
          this.directionChangeInterval = 2000 + Math.random() * 3000; // New random interval

          // Add some randomness to the direction change
          const angle = Math.random() * Math.PI * 2;
          const speedVariation = 0.7 + Math.random() * 0.6; // 0.7 to 1.3 speed multiplier
          this.vx = Math.cos(angle) * this.baseSpeed * speedVariation;
          this.vy = Math.sin(angle) * this.baseSpeed * speedVariation;
        }

        // Add subtle drift to make movement more organic
        this.vx += (Math.random() - 0.5) * 0.01;
        this.vy += (Math.random() - 0.5) * 0.01;

        // Keep velocity within reasonable bounds
        const maxVelocity = this.baseSpeed * 1.5;
        this.vx = Math.max(-maxVelocity, Math.min(maxVelocity, this.vx));
        this.vy = Math.max(-maxVelocity, Math.min(maxVelocity, this.vy));

        // Bounce off edges with some randomness
        if (!canvas) return;
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -1;
          // Add slight random variation to prevent predictable bouncing
          this.vx += (Math.random() - 0.5) * 0.2;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -1;
          // Add slight random variation to prevent predictable bouncing
          this.vy += (Math.random() - 0.5) * 0.2;
        }

        // Keep blobs within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();

        // Use native blur if supported and not on problematic WebKit browsers, otherwise use fallback
        if (supportsCanvasFilter && !isSafari && !isIOS) {
          // Use native blur for browsers that support it
          ctx.filter = "blur(100px)";
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.filter = "none"; // Reset filter
        } else {
          // Fallback blur effect for browsers that don't support canvas filter
          const blurLayers = isLowEndDevice ? 12 : 24; // Even more layers for smoother blur
          const maxBlurRadius = isLowEndDevice ? 120 : 260; // Much larger blur radius to match 100px native blur

          for (let i = blurLayers; i > 0; i--) {
            const layerProgress = (blurLayers - i) / (blurLayers - 1); // 0 to 1
            // More gradual opacity falloff to match native blur
            const opacity =
              (1 / blurLayers) * (0.9 + 0.1 * (1 - layerProgress));
            const radius = this.size + layerProgress * maxBlurRadius;

            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      }
    }

    // Create blobs with varied sizes and positions
    const blobs = [
      new Blob(
        canvas.width * (0.2 + Math.random() * 0.2), // Random position in left area
        canvas.height * (0.2 + Math.random() * 0.2), // Random position in top area
        120 + Math.random() * 40, // Random size between 180-220
        "oklch(0.65 0.25 70.08)"
      ), // Deep Amber
      new Blob(
        canvas.width * (0.5 + Math.random() * 0.3), // Random position in center-right area
        canvas.height * (0.4 + Math.random() * 0.3), // Random position in center area
        120 + Math.random() * 40, // Random size between 180-220
        "oklch(0.55 0.25 184.704)"
      ), // Deep Blue
      new Blob(
        canvas.width * (0.3 + Math.random() * 0.4), // Random position in center area
        canvas.height * (0.6 + Math.random() * 0.2), // Random position in bottom area
        120 + Math.random() * 40, // Random size between 180-220
        "oklch(0.65 0.25 350)"
      ), // Deep Pink
    ];

    // Animation loop with proper timing
    const animate = (currentTime: number) => {
      if (!ctx || !canvas) return;

      // Calculate delta time for consistent animation speed
      const deltaTime = currentTime - lastTime;

      // Only update if enough time has passed (throttle to target FPS)
      if (deltaTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        blobs.forEach((blob) => {
          blob.update(deltaTime);
          blob.draw();
        });

        lastTime = currentTime;
      }

      requestAnimationFrame(animate);
    };

    // Start animation
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full bg-neutral-400/60 dark:bg-neutral-900/90 transition-opacity from-0% to-100% ease-in-out"
      style={{ opacity: 0.5 }}
    />
  );
};

export default AnimatedBg;
