import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Anubhav Pal",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <div className="flex flex-col gap-10 mx-10 sm:mx-20 md:mx-30 lg:mx-40 xl:mx-60 my-10">
          <div>
            <Navbar />
            <HeroSection />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
