// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

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
      <body className="bg-white text-gray-900 antialiased">
        
        {/* APP WRAPPER */}
        <div className="min-h-screen flex flex-col">

          {/* NAVBAR */}
          {/* <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center">
              <Navbar />
            </div>
          </header> */}

          {/* MAIN */}
          <main className="flex-1 w-full">
            {/* <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6"> */}
              {children}
            {/* </div> */}
          </main>

          {/* FOOTER */}
          {/* <footer className="w-full border-t border-gray-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
              <Footer />
            </div>
          </footer> */}

        </div>

      </body>
    </html>
  );
}