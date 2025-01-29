"use client";

import Link from "next/link";

const Sidebar = ({ setOpen }) => {
  return (
    <div className="h-full md:w-[290px] flex flex-col bg-slate-100 shadow-sm overflow-y-auto">
      <div>
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center justify-center p-6 mb-1.5"
        >
          <img
            className="rounded-full h-10 w-10 object-cover"
            src="/wedding.png"
            alt="Logo"
          />
          <p className="text-3xl font-bold">Alliance</p>
        </Link>

        <nav className="flex flex-col font-bold italic text-center space-y-10">
          <Link
            className="hover:text-slate-500 rounded-s-lg"
            href="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            className="hover:text-slate-500 rounded-s-lg"
            href="/profile"
            onClick={() => setOpen(false)}
          >
            Profile
          </Link>
          <Link
            className="hover:text-slate-500 rounded-s-lg"
            href="/faq"
            onClick={() => setOpen(false)}
          >
            Faq
          </Link>
          <Link
            className="hover:text-slate-500 rounded-s-lg"
            href="/about"
            onClick={() => setOpen(false)}
          >
            About us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
