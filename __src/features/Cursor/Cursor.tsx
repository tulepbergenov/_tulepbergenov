"use client";

import { cn } from "@/shared/lib";
import { gsap } from "gsap";
import { useEffect, useMemo, useRef } from "react";
import { CursorProps } from "./Cursor.type";
import { useCursorStore } from "@/shared/store";

const COLORS = ["#c32d27", "#f5c63f", "#457ec4", "#356fdb"];

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

export const Cursor = ({ className, ...props }: CursorProps) => {
  const { isHovered } = useCursorStore();

  const SIZE = useMemo(() => (isHovered ? 300 : 30), [isHovered]);
  const DELAY = useMemo(() => (isHovered ? 0.015 : 0.005), [isHovered]);

  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const circles = useRef<any[]>([]);

  const dealyedMouse = useRef<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const manageMousemove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    mouse.current = { x: clientX, y: clientY };
  };

  const moveCircle = (x: number, y: number) => {
    circles.current.forEach((circle, i) => {
      gsap.set(circle, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
      });
    });
  };

  const animate = () => {
    const { x, y } = dealyedMouse.current;

    dealyedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(dealyedMouse.current.x, dealyedMouse.current.y);

    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();

    window.addEventListener("mousemove", manageMousemove);

    return () => window.removeEventListener("mousemove", manageMousemove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {COLORS.map((color, i, array) => (
        <div
          key={color}
          className={cn(
            "fixed pointer-events-none top-0 left-0 rounded-full mix-blend-difference",
            className
          )}
          ref={(ref) => (circles.current[i] = ref) as any}
          style={{
            backgroundColor: color,
            width: SIZE,
            height: SIZE,
            filter: `blur(${isHovered ? 30 : 2}px)`,
            transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, transform ${
              (array.length - i) * DELAY
            }s ease-out`,
          }}
          {...props}
        />
      ))}
    </>
  );
};
