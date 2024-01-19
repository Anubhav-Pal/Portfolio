import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Anubhav Pal",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <Navbar />
        <div className="px-10">
        {children}
        </div>
      </body>
    </html>
  );
}
