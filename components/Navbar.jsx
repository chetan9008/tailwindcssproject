"use client";
import Image from "next/image";
import logo from "@/public/logo.png";
import { navItems } from "@/constants/index";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const toggleFunction = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <nav className="sticky backdrop-blur-lg border-neutral-700/80 top-0 z-50 py-3">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <Image
              src={logo}
              className="mr-2"
              alt="logo"
              width={30}
              height={30}
            />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="lg:flex hidden ml-14 space-x-12">
            {navItems.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <Link href="#" className="py-3 px-2 border rounded-md">
              Sign In
            </Link>
            <Link
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-2 rounded-md"
            >
              Create and account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleFunction}>
              {toggleButton ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {toggleButton && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((link, index) => (
                <li key={index} className="py-4">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link href="#" className="py-3 px-2 border rounded-md">
                Sign In
              </Link>
              <Link
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-2 rounded-md"
              >
                Create and account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
