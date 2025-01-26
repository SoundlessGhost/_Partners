import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog"; // Import DialogTitle

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden hover:opacity-70 transition">
        <Menu className="mr-3"/>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        {/* Add a DialogTitle */}
        <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
