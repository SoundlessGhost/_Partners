import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="py-16 lg:px-0 md:px-0 px-10 hey rounded-t-lg mt-20">
      <div className="lg:flex md:flex block justify-evenly font">
        <div className="lg:w-[500px] md:w-[500px]">
          <h1 className="text-5xl mb-10">Alliance</h1>
          <p className="text-[10px]">
            Join Alliance today and explore the beauty of relationships as you
            navigate through a space that celebrates the simplicity and warmth
            of genuine connections.
          </p>

          <p className="border-0 border-t border-gray-500 w-6"></p>
          <div className="flex space-x-1 my-4">
            <Input placeholder="Email" />
            <Button variant="outline">Subscribe</Button>
          </div>
        </div>

        <div className="mt-4">
          <div className="">
            <div className="flex flex-col space-y-3">
              <h1 className="">Explore</h1>
              <Link href="/" className="text-gray-500 hover:text-black">
                Home
              </Link>
              <Link href="/profile" className="text-gray-500 hover:text-black">
                Biodata
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-black">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-black">
                Contact Us
              </Link>
              <p className="border-0 border-t border-blue-500 w-6"></p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-4 bg-gray-300" />
      <div className="lg:flex justify-between items-center mx-6">
        <p className="text-[14px] mb-3">
          © Copyright 2020 Alliance Ltd. All rights reserved.
        </p>
        <div className="flex space-x-3">
          <Link href="/">
            <img
              className="w-8 rounded-full border-gray-400 cursor-pointer border p-2"
              src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
              alt="Facebook Icon"
            />
          </Link>
          <Link href="/">
            <img
              className="w-8 rounded-full border-gray-400 cursor-pointer border p-2"
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
              alt="Twitter Icon"
            />
          </Link>
          <Link href="/">
            <img
              className="w-8 rounded-full border-gray-400 cursor-pointer border p-2"
              src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
              alt="Instagram Icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
