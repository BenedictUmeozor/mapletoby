import type { Metadata, Viewport } from "next";
import { Inter, Kantumruy_Pro, Nunito_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });
const kantumruy = Kantumruy_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mapletoby",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#EBEEF6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>{children}</body>
    </html>
  );
}
