"use client";

import Balancer from "react-wrap-balancer";
import { HomeHeroProps } from "./HomeHero.type";
import { ThemeToggler } from "@/features/ThemeToggler";
import { useCursorStore } from "@/shared/store";
import { cn } from "@/shared/lib";

export const HomeHero = ({ className, ...props }: HomeHeroProps) => {
  const { setIsHovered } = useCursorStore();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("z-20 relative", className)}
      {...props}
    >
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Balancer>Daulet Tulepbergenov</Balancer>
        </h1>
        <ThemeToggler />
      </header>
      <div>
        <hr className="my-3" />
        <ul>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
        <hr className="my-3" />
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};
