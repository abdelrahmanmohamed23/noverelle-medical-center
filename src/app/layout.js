import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "Noverelle Medical Center | Comprehensive Healthcare & Medical Services",
    template: "%s | Noverelle Medical Center",
  },
  description:
    "Noverelle Medical Center offers top-tier healthcare services, specialist consultations, and advanced medical care available 24/7.",
  keywords: [
    "Noverelle Medical Center",
    "hospital",
    "healthcare",
    "book doctor appointment",
    "medical specialists",
    "emergency care",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col scrollbar-gutter-stable">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
