import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neelu Oberoi - Luxury Indian Couture",
  description: "Creating timeless elegance through contemporary Indian couture. Discover exquisite lehengas, sarees, and designer wear.",
  keywords: "Indian fashion, couture, designer wear, lehenga, saree, bridal wear, luxury fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}