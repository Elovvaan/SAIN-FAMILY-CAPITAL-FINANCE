import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAIN Family Capital Finance",
  description: "Verified Value-centered family capital infrastructure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
