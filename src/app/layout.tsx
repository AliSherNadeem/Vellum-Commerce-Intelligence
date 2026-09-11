import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vellum Commerce Intelligence",
  description: "A clearer way to run modern commerce.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
