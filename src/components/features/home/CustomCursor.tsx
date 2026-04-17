"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Dot follows immediately
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Apply hover to interactive elements
    const interactiveEls = document.querySelectorAll("a, button, [role='button']");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    // Lerp animation for the ring
    const animate = () => {
      const dx = posRef.current.x - currentPosRef.current.x;
      const dy = posRef.current.y - currentPosRef.current.y;
      currentPosRef.current.x += dx * 0.1;
      currentPosRef.current.y += dy * 0.1;
      cursor.style.transform = `translate(${currentPosRef.current.x - 16}px, ${currentPosRef.current.y - 16}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  return (
    <>
      {/* Ring — follows with lerp */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.7)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
          opacity: isVisible ? 1 : 0,
          mixBlendMode: "difference",
        }}
      />
      {/* Dot — instant follow */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#C9A96E",
          opacity: isVisible ? 0.9 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
}
