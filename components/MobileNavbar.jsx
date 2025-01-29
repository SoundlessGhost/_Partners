"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";

const MobileNavbar = () => {
  const pathname = usePathname(); 

  const [open, setOpen] = useState(false);

  // Close sidebar when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden hover:opacity-70 transition">
        <Menu className="mr-3" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>
        <Sidebar setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
