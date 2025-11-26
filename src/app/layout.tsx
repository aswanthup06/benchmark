import type { Metadata } from "next";
import "./globals.css";
import Head from "@/components/Head";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Benchmark Holidays",
  description: "Benchmark Holidays",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Head />
        {children}
        <Footer />
      </body>
    </html>
  );
}
