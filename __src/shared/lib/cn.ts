import { twMerge } from "tailwind-merge";
import cc, { Class } from "classcat";

export const cn = (inputs: Class) => {
  return twMerge(cc(inputs));
};
