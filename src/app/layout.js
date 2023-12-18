import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

// metadata for the website
export const metadata = {
  title: "Project Lily",
  description: "Never Settle Persue Virtue",
};

// Navigation bar from the website
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
