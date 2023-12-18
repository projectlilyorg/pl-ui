import { Inter } from "next/font/google";
import "./globals.css";
import Content from "@/components/Content/Content";
import Link from "next/link";

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
        <nav>
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
