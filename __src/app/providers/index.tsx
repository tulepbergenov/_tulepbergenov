import { Layout } from "@/shared/types";
import { Lenis } from "./Lenis";
import { WrapBalancer } from "./WrapBalancer";
import { Theme } from "./Theme";

export const Providers = ({ children }: Layout) => {
  return (
    <Theme>
      <Lenis>
        <WrapBalancer>{children}</WrapBalancer>
      </Lenis>
    </Theme>
  );
};
