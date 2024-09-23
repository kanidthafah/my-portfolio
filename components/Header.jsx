"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <header className={`py-8 xl:py-12 drop-shadow-sm`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#eee9df]">
            Kanidtha <span className="text-[#ffb162]">&lt;/&gt;</span>
          </h1>
        </Link>
        {/* desktop navbar */}
        <div className="hidden lg:flex items-center text-[#eee9df]">
          <Navbar />
        </div>
        {/* mobile navbar */}
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
