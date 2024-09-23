"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <FaBars className="text-3xl text-[#eee9df] hover:text-[#ffb162]" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link href={"/"}>
                <h1>
                  Kanidtha <span className="text-[#ffb162]">&lt;/&gt;</span>
                </h1>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col items-start text-[#eee9df] gap-4 capitalize text-base xl:text-lg">
            {links.map((link, index) => {
              return (
                <SheetClose asChild key={index}>
                  <Link
                    href={link.path}
                    className={`${
                      link.path === pathname &&
                      "text-[#ffb162] border-b-2 border-[#ffb162]"
                    } capitalize font-semibold hover:text-[#ffb162] transition-all block`}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavbar;
