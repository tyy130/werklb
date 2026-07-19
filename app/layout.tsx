import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WERK Long Beach | Queer Nightclub",
  description:
    "Three levels of music, movement, performance, and queer nightlife at WERK Long Beach.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
