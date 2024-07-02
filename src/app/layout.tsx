import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discover and Showcase Your NFT Bookshelf Collection",
  description:
    "Explore the ultimate platform for NFT book lovers! Discover, organize, and showcase your exclusive NFT bookshelf collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-neutral-950">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
