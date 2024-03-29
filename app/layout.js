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
      <body className="">
        <div className="md:px-10">
        <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}
