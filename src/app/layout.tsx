import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/assets/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const QuickSandFont = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "MuniMuning Studios",
  description: "MuniMuning Studios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${QuickSandFont.className} antialiased`}>
        <Header /> {/**  To apply the component to all screens */}
        {children}
        <Footer /> {/** To apply the component to all screens */}
      </body>
    </html>
  );
}
