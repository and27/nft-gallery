"use client";

import Link from "next/link";
import { useState } from "react";

type NavType = {
  name: string;
  link: string;
};

const navItems: NavType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Gallery",
    link: "#gallery",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="relative">
        <nav
          className={`flex flex-col md:flex-row justify-between items-center py-4 px-8 bg-neutral-950/70 md:bg-neutral-950/10 backdrop-blur-lg backdrop-filter fixed w-full z-20
          ${isMobile ? (isOpen ? "top-0 left-0 h-screen" : "hidden") : ""}
            `}
        >
          <Link href="#" className="text-white font-bold text-2xl">
            NFT
          </Link>
          <ul className="flex flex-col md:flex-row py-5 gap-8 text-white">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`${
                  activeLink === item.name ? "border-b-2 border-white" : ""
                } hover:border-b border-white transition-all`}
                onClick={() => setActiveLink(item.name)}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black"
            onClick={openMenu}
          >
            Contact us
          </Link>
        </nav>
        <button
          className="md:hidden absolute top-4 right-4 z-50"
          aria-label="Open Menu"
          title="Open Menu"
          onClick={openMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </header>
    </>
  );
};

export default Navbar;
