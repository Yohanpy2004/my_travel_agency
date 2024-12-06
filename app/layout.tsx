"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar';
import './globals.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/*
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showNavbar = !pathname.startsWith('/super-admin');

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {showNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
