const baseTitle = "Daulet Tulepbergenov";

export const appTitle = (title?: string): string => {
  return title && typeof title === "string" && title.trim().length > 0
    ? `${title} | ${baseTitle}`
    : baseTitle;
};
