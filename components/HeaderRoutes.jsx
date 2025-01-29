import React from "react";
import Link from "next/link";

const HeaderRoutes = () => {
  return (
    <nav className="hidden lg:block space-x-16 relative  overflow-hidden pr-20">
      <Link className="hover:text-slate-700" href="/">
        Home
      </Link>
      <Link className="hover:text-slate-700" href="/profile">
        Profile
      </Link>
      <Link className="hover:text-slate-700" href="/faq">
        Faq
      </Link>
      <Link className="hover:text-slate-700" href="/about">
        About us
      </Link>
      {/* <Link className="hover:text-slate-700" href="/dashboard/edit">
        Dashboard
      </Link> */}
    </nav>
  );
};

export default HeaderRoutes;
