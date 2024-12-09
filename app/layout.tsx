import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
 import Footer from "@/components/footer"




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

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "MORBAZAR get you more and more item",
  description: "Shop more more and more",
=======
  title: "DesiBazar/ get you a desi item",
  description: "Shop pakistani item from pakistan",
>>>>>>> b0a706bf94f8b379d1c966deface8725009ad27a
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
        
        {children}
        <Footer/>
      </body>

    </html>
  );
}
