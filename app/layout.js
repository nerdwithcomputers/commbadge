import { Geist, Geist_Mono } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const heavyData = localfont({
  src: "./HeavyDataNerdFont-Regular.ttf",
  variable: "--font-heavyData",
  subsets: ["latin"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hack Club COMMBADGE",
  description: "A basic site built in next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${heavyData.variable}`}>
      <body>{children}</body>
    </html>
  );
}
