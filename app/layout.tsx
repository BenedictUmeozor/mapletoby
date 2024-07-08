import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Banner from "@/components/banner/Banner";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CartProvider from "@/providers/cart-provider/CartProvider";
import Cart from "@/components/cart/Cart";
import BillingProvider from "@/providers/billing-provider/BillingProvider";

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
        <BillingProvider>
          <CartProvider>
            <Banner />
            <Header />
            <Cart />
            {children}
            <Footer />
          </CartProvider>
        </BillingProvider>
      </body>
    </html>
  );
}
