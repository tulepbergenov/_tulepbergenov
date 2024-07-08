import type { Metadata, Viewport } from "next";
import "@/app/styles/index.css";
import { appTitle, cn } from "@/shared/lib";
import { interFont } from "./fonts";
import { Providers } from "@/app/providers";
import { Suspense } from "react";
import { Cursor } from "@/features/Cursor";

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
    <html
      lang="en"
      className={cn("h-full", interFont.variable)}
      suppressHydrationWarning
    >
      <body className="font-fm-inter font-normal antialiased h-full dark:bg-clr-dark rendering-speed dark:text-clr-light text-clr-dark bg-clr-light">
        <Providers>
          <main id="main">{children}</main>
          <Cursor />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
