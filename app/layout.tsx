import type { Metadata } from "next";
import Figtree from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const fontSans = Figtree({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const fontMono = Figtree({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
