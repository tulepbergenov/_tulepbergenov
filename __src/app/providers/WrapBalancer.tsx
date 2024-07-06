import { Layout } from "@/shared/types";
import { Provider } from "react-wrap-balancer";

export const WrapBalancer = ({ children }: Layout) => {
  return <Provider>{children}</Provider>;
};
