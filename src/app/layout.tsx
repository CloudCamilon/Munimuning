import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/assets/globals.css";

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
        {children}
        {/* put Footer here */}
      </body>
    </html>
  );
}
