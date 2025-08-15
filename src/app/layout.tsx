import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "../services/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// found it at: https://www.youtube.com/watch?v=0DswSaYFiRA
export const metadata: Metadata = {
  title: "Eplayment Exam",
  description: "Eplayment Exam Todo List by Kendall Rey Mozo",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  openGraph: {
    type: "website",
    // This is just a sample project, don't worry about env variables
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    title: "Eplayment Exam",
    description: "Eplayment Exam Todo List by Kendall Rey Mozo",
    siteName: "TodoList",
    images: [{ url: "https://example.com/og.png" }]
  }
};

export default function RootLayout({
  header,
  children,
}: Readonly<{
  header: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <Providers>
          {header}
          {children}
        </Providers>
      </body>
    </html>
  );
}
