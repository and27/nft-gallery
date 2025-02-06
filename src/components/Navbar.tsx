"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "../data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen, isMobile]);

  return (
    <>
      <header className="relative">
        <nav
          className={`flex flex-col md:flex-row justify-center md:justify-between px-16 items-center bg-neutral-950/80 md:bg-neutral-950/10 backdrop-blur-lg backdrop-filter absolute fixed w-full z-20 
            ${isOpen && isMobile ? "top-0 left-0 h-screen" : ""}`}
        >
          <Link
            href="/"
            className="text-white font-bold text-2xl absolute top-4 left-4 md:static z-50 md:inset-auto"
          >
            NFT
          </Link>
          <ul
            className={`flex flex-col md:flex-row py-5 gap-8 text-white ${
              isMobile && !isOpen ? "hidden" : ""
            } `}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`${
                  activeLink === item.name ? "border-b-2 border-white" : ""
                } hover:border-b border-white transition-all`}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
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
