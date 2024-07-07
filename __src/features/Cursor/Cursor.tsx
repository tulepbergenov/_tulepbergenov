"use client";

import { cn } from "@/shared/lib";
import { DivProps } from "@/shared/types";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const size = 30;

const Cursor = ({ className, ...props }: DivProps) => {
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const circle = useRef<HTMLDivElement>(null);

  const manageMousemove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    mouse.current = { x: clientX, y: clientY };
  };

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    moveCircle(mouse.current.x, mouse.current.y);

    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();

    window.addEventListener("mousemove", manageMousemove);

    return () => window.removeEventListener("mousemove", manageMousemove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn("fixed top-0 left-0 bg-blue-400 rounded-full", className)}
      ref={circle}
      style={{
        width: size,
        height: size,
      }}
      {...props}
    />
  );
};

export default Cursor;
