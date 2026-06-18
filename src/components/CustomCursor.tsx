"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], [role='tab'], input, select, textarea, label, article";

const RING_LAG_MS = 55;
const DOT_SCALE = 1.27;
const RING_SCALE = 1.22;

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const hovering = useRef(false);
  const rafId = useRef<number>(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const applyEnabled = (matches: boolean) => {
      setEnabled(matches);
      document.documentElement.classList.toggle("custom-cursor-active", matches);
    };

    applyEnabled(media.matches);

    const onMediaChange = (event: MediaQueryListEvent) => {
      applyEnabled(event.matches);
    };

    media.addEventListener("change", onMediaChange);

    return () => {
      media.removeEventListener("change", onMediaChange);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dotEl = dotRef.current;
    const ringEl = ringRef.current;
    if (!dotEl || !ringEl) return;

    const setVisible = (isVisible: boolean) => {
      visible.current = isVisible;
      dotEl.style.opacity = isVisible ? "1" : "0";
      ringEl.style.opacity = isVisible ? (hovering.current ? "0.55" : "0.35") : "0";
    };

    const setHovering = (isHovering: boolean) => {
      if (hovering.current === isHovering) return;
      hovering.current = isHovering;
      dotEl.classList.toggle("cursor-dot--hover", isHovering);
      ringEl.classList.toggle("cursor-ring--hover", isHovering);
      if (visible.current) {
        ringEl.style.opacity = isHovering ? "0.55" : "0.35";
      }
    };

    const onMove = (event: MouseEvent) => {
      if (!visible.current) {
        ring.current.x = event.clientX;
        ring.current.y = event.clientY;
        setVisible(true);
      }
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const onLeave = () => setVisible(false);

    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      setHovering(!!target?.closest(INTERACTIVE_SELECTOR));
    };

    const animate = (time: number) => {
      if (!lastTime.current) lastTime.current = time;
      const delta = Math.min(time - lastTime.current, 32);
      lastTime.current = time;

      const ease = 1 - Math.exp(-delta / RING_LAG_MS);
      ring.current.x += (mouse.current.x - ring.current.x) * ease;
      ring.current.y += (mouse.current.y - ring.current.y) * ease;

      const dotScale = hovering.current ? DOT_SCALE : 1;
      const ringScale = hovering.current ? RING_SCALE : 1;

      dotEl.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      ringEl.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%) scale(${ringScale})`;

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId.current);
      lastTime.current = 0;
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999]">
      <div ref={ringRef} className="cursor-ring pointer-events-none" />
      <div ref={dotRef} className="cursor-dot pointer-events-none" />
    </div>
  );
}
