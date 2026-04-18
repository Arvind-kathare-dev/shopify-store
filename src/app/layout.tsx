// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";




const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional but scalable
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
    <html
      lang="en"
      className={inter.className}
    >
      <body className="font-sans bg-white text-gray-900 antialiased">

         <div className="min-h-screen flex flex-col">

      {/* NAVBAR */}
      <header className="sticky left-0 top-0 z-50 h-20 ">
        <Navbar />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full ">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-6">
          {children}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-auto">
        <Footer />
      </footer>

    </div>

      </body>
    </html>

   
  );
}