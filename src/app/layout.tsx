import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "sans-serif"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  preload: false,
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Apptics - All-in-One CRM Tool",
  description:
    "Turn One-Time Shopify Customers Into Recurring Revenue Goldmines. Apptics is an all in one platform that handles subscription management, payment optimization, and customer retention with smart analytics and seamless checkouts.",
  applicationName: "Apptics - All-in-One CRM Tool",
  keywords: [
    "roi calculator",
    "subscription",
    "saas",
    "revenue",
    "apptics",
    "ai",
    "calculator",
    "crm",
    "shopify",
    "shopify crm",
    "shopify subscription",
    "shopify subscription management",
    "shopify subscription platform",
    "shopify subscription revenue",
    "shopify subscription revenue growth",
    "shopify subscription revenue growth platform",
    "shopify subscription revenue growth platform",
  ],

  openGraph: {
    title: "Apptics - All-in-One CRM Tool",
    description:
      "Turn One-Time Shopify Customers Into Recurring Revenue Goldmines. Apptics is an all in one platform that handles subscription management, payment optimization, and customer retention with smart analytics and seamless checkouts.",
    type: "website",
    url: "https://apptics-ai-calculator-main.vercel.app",
    siteName: "Apptics - All-in-One CRM Tool",
    images: [
      {
        url: "https://apptics-ai-calculator-main.vercel.app/og.webp",
        width: 1200,
        height: 630,
        alt: "Apptics - All-in-One CRM Tool",
      },
    ],
    locale: "en_US",
  },
};

// Viewport optimization with FID improvement
export const viewport: Viewport = {
  themeColor: "#FEFEFE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} bg-[#FEFEFE]`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" href="/assets/hero/Layer_1.svg" as="image" type="image/svg+xml" />
        <link
          rel="preload"
          href="https://apptics-ai-calculator-main.vercel.app/og.webp"
          as="image"
        />
      </head>
      <body className="font-sans antialiased bg-[#FEFEFE]">
        {children}

        {/* Web Vitals measurement */}
        <Script
          id="web-vitals"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function sendToAnalytics(metric) {
                const body = JSON.stringify(metric);
                const url = 'https://example.com/analytics';
                
                // Use \`navigator.sendBeacon()\` if available, falling back to \`fetch()\`
                if (navigator.sendBeacon) {
                  navigator.sendBeacon(url, body);
                } else {
                  fetch(url, { body, method: 'POST', keepalive: true });
                }
              }
              
              try {
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    // Load web-vitals dynamically
                    import('web-vitals').then(({ onCLS, onFID, onLCP, onINP, onTTFB }) => {
                      onCLS(sendToAnalytics);
                      onFID(sendToAnalytics);
                      onLCP(sendToAnalytics);
                      onINP(sendToAnalytics);
                      onTTFB(sendToAnalytics);
                    });
                  }, 3000); // Delay loading of non-critical scripts
                });
              } catch (e) {
                console.error('Failed to load web-vitals', e);
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
