import { Layout } from "@/shared/types";
import { Lenis } from "./Lenis";
import { WrapBalancer } from "./WrapBalancer";

export const Providers = ({ children }: Layout) => {
  return (
    <Lenis>
      <WrapBalancer>{children}</WrapBalancer>
    </Lenis>
  );
};
