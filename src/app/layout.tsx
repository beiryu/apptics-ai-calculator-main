import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ROI Calculator",
  description: "Calculate your ROI with Apptics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#FEFEFE]">
      <body className={`${inter.variable} font-sans antialiased bg-[#FEFEFE]`}>
        {children}
      </body>
    </html>
  );
}
