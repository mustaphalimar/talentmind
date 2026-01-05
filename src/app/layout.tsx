import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/main/header";
import Sidebar from "@/components/main/sidebar";
import Providers from "@/components/providers/providers";
import Footer from "@/components/sections/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TalentMind | Pilotez votre capital humain avec intelligence",
  description: "Pilotez votre capital humain avec intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Sidebar />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
