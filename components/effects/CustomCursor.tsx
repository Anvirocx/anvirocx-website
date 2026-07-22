"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animationFrame = 0;

    const moveCursor = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animationFrame = requestAnimationFrame(animateRing);
    };

    const showInteractiveState = () => {
      ring.classList.add("cursor-ring-active");
      dot.classList.add("cursor-dot-active");
    };

    const hideInteractiveState = () => {
      ring.classList.remove("cursor-ring-active");
      dot.classList.remove("cursor-dot-active");
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [data-cursor='interactive']",
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", showInteractiveState);
      element.addEventListener("mouseleave", hideInteractiveState);
    });

    window.addEventListener("mousemove", moveCursor);
    animationFrame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animationFrame);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", showInteractiveState);
        element.removeEventListener("mouseleave", hideInteractiveState);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
