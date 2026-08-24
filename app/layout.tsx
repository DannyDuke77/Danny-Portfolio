import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import CVModal from "./components/modals/CVModal";
import ImagesModal from "./components/modals/ImagesModal";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GITAU DANIEL NGIGE | Full Stack Developer",
  description: "Portfolio showcasing the projects and skills of Gitau Daniel Ngige, a proficient Full Stack Developer specializing in modern web technologies.",
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        <div className="flex min-h-screen">
          <Navbar />

          {/* Main content */}
          <main className="flex-1 md:mt-0">
            {children}

            <CVModal />
            <ImagesModal />
            
          </main>
        </div>
      </body>
    </html>
  );
}