import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Chatbot from "../components/Chatbot";

export const metadata: Metadata = {
  title: "ANVIROCX | Business Solutions Agency",
  description:
    "Premium customer support, virtual assistants, development, creative services, automation and managed remote teams.",
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
