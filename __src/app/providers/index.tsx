import { Layout } from "@/shared/types";
import { Lenis } from "./Lenis";

export const Providers = ({ children }: Layout) => {
  return <Lenis>{children}</Lenis>;
};
