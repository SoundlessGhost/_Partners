"use client";

import Link from "next/link";
import HeaderRoutes from "./HeaderRoutes";
import MobileNav from "@/components/MobileNavbar";

import { useState, useEffect } from "react";
import { useAuth, UserButton } from "@clerk/nextjs";

const Header = () => {
  const { userId } = useAuth();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 680) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 flex items-center font-bold justify-between py-4 px-10 transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex lg:ml-0">
        <MobileNav />

        <Link className="text-4xl flex relative" href="/">
          <img
            className="rounded-full h-10 w-10 object-cover"
            src="/wedding.png"
            alt="Logo"
          />
          Alliance
        </Link>
      </div>

      <div>
        <HeaderRoutes />
      </div>

      <div className="">
        {!userId && <Link href={"/sign-in"}>Login</Link>}
        <UserButton className="h-16 w-16" />
      </div>
    </div>
  );
};

export default Header;
