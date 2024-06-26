import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "@/style/main.scss";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SidebarWithContentSeparator from "@/components/Sidebar";
import UpNavbar from "@/components/UpNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid-cols-3`}>
       <div>
       
        <SidebarWithContentSeparator/>
       </div>

        <div className="col-span-4 upnav">
        <UpNavbar/>
          {children}
          </div>
      </body>
    </html>
  );
}
