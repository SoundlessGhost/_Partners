import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-full md:w-[290px] flex flex-col bg-slate-100 shadow-sm overflow-y-auto">
      <div>
        <Link
          href={"/"}
          className="flex items-center justify-center p-6 mb-1.5"
        >
          <img
            className="rounded-full h-10 w-10 object-cover"
            src="/wedding.png"
            alt="Logo"
          />
          <p>Alliance</p>
        </Link>

        <nav className="flex flex-col text-center space-y-10">
          <Link
            className="hover:text-slate-500 border p-2 rounded-s-lg "
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-slate-500 border p-2 rounded-s-lg "
            href="/profile"
          >
            Profile
          </Link>
          <Link
            className="hover:text-slate-500 border p-2 rounded-s-lg "
            href="/faq"
          >
            Faq
          </Link>
          <Link
            className="hover:text-slate-500 border p-2 rounded-s-lg "
            href="/about"
          >
            About us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
