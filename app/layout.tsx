import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Banner from "@/components/banner/Banner";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

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
      <body className={nunito_sans.className + " text-shade-120"}>
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
