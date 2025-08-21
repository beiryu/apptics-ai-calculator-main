import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Optimize font loading with display swap and preload
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

// Improved metadata for SEO and performance
export const metadata: Metadata = {
  title: "ROI Calculator",
  description: "Calculate your ROI with Apptics - Increase your subscription revenue",
  applicationName: "Apptics ROI Calculator",
  keywords: ["roi calculator", "subscription", "saas", "revenue", "apptics"],
  metadataBase: new URL("https://www.apptics.ai"),
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
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/hero/Layer_1.svg" as="image" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
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
