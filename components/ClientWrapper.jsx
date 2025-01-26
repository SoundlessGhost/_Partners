"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/sign-in" || pathname === "/sign-up" ? null : <Header />}
      {children}
      {pathname === "/sign-in" || pathname === "/sign-up" ? null : <Footer />}
    </>
  );
}
