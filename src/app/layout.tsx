import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Dashboard",
  description: "Sales Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
