import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Chatbot from "../components/Chatbot";

export const metadata: Metadata = {
  title: "ANVIROCX | Email & Live Chat Customer Support",
  description:
    "Founder-led email support, live chat, and ticket management for growing e-commerce businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
        <Chatbot /></body>
    </html>
  );
}
