import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
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
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased bg-[#FEFEFE]`}
      >
        {children}
      </body>
    </html>
  );
}
