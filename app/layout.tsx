import type { Metadata, Viewport } from "next";
import "@/app/styles/index.css";
import { appTitle, cn } from "@/shared/lib";
import { interFont } from "./fonts";

export const metadata: Metadata = {
  title: appTitle(),
  description: "Frontend Developer",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: "#000000",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={cn(interFont.variable)}>
      <body className="font-app-fm-inter font-normal text-sm">
        <main id="main">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
