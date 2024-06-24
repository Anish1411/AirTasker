import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import { useGlobalPageData } from "@/utils/globalSectionComponents";

const inter = Inter({ subsets: ["latin"] });

export const metadata = () => {};

export default async function RootLayout({ children }) {
  const sections = await useGlobalPageData();  
  if (sections.length === 0) return false;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar details={sections[0]} />
        {children}
        <Footer details={sections[1]} />
      </body>
    </html>
  );
}
