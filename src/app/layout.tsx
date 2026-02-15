import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Udimi Review 2026: The Only Place I Trust for Buying Solo Ads",
  description: "Stop burning budget on bot traffic. See my real results and get a $5 discount on your first Udimi order. Verified vendor list inside.",
  openGraph: {
    title: "Udimi Review 2026: The Only Place I Trust for Buying Solo Ads",
    description: "Stop burning budget on bot traffic. See my real results and get a $5 discount on your first Udimi order.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
