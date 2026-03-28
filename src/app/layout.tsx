import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yusuf Can | Software Engineer Portfolio",
  description: "Animated software engineer portfolio built with Next.js 16.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
