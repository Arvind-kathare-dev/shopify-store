// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ShopifyStore – High Converting Mobile App",
  description:
    "Turn your Shopify store into a high-converting mobile app with built-in CRO.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-gray-900 antialiased selection:bg-secondary/20 selection:text-secondary">
        
        <div className="min-h-screen flex flex-col">
          <Navbar />
          
          <main className="flex-1 w-full">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}