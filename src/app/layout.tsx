import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abir Roy — Software Engineer & AI Developer",
  description: "Portfolio of Abir Roy — Software Engineer and Developer Advocate focused on scalable applications, AI-powered workflows, APIs, automation systems, and developer tooling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
