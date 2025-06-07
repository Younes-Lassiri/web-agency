// app/layout.tsx or app/layout.js

import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@calcom/atoms/globals.min.css";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Small Business Website Experts | Tifawin Devs | $0 Down – Full Website + Backend for $175/Month',
  description: 'We create high-performance websites to grow your business.',
  openGraph: {
    title: 'Small Business Website Experts | Tifawin Devs | $0 Down – Full Website + Backend for $175/Month',
    description: 'Professional web design and development services.',
    url: 'https://web-agency-weld-five.vercel.app/',
    siteName: 'Web Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Agency',
    description: 'Professional web design and development services.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Web Agency",
              url: "https://yourdomain.com",
              logo: "https://yourdomain.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+212-6-12345678",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
