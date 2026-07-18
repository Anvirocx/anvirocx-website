import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ANVIROCX | Customer Support Outsourcing",
  description:
    "ANVIROCX empowers businesses with exceptional customer support through live chat, email, voice, help desk, virtual assistant, and back-office solutions.",
  metadataBase: new URL("https://www.anvirocx.com"),
  openGraph: {
    title: "ANVIROCX | Customer Support Outsourcing",
    description:
      "Empowering Businesses with Exceptional Customer Support.",
    url: "https://www.anvirocx.com",
    siteName: "ANVIROCX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
