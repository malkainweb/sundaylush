import React, { useEffect, useState, useRef } from "react";
import { HelveticaNeue, playfairDisplay } from "../util/font";
import logo from "@/public/nav/logo.svg";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isScrollingDown = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const scrollingUp = currentScrollY < lastScrollY.current;

      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = null;
      }

      // If scrolling up, always show immediately
      if (scrollingUp && currentScrollY > 0) {
        setIsVisible(true);
        isScrollingDown.current = false;
      }
      // If scrolling down, hide immediately
      else if (scrollingDown && currentScrollY > 200) {
        setIsVisible(false);
        isScrollingDown.current = true;

        // Set timeout to show again after 2 seconds of no scrolling
        scrollTimeout.current = setTimeout(() => {
          // Only show if we were scrolling down (not if user scrolled up)
          if (isScrollingDown.current) {
            setIsVisible(true);
          }
        }, 100);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <nav
      className={`w-240 shadow-md left-[50%] translate-x-[-50%] max-w-[90%] mx-auto fixed transition-all duration-500 rounded-[18px] z-1000 bg-[#EEE7D7] p-1.5 ${
        isVisible ? "top-5" : "-top-24"
      }`}
    >
      <div className="w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image src={logo} alt="logo" className="w-24 h-auto" />

        {/* Navigation Links */}
        <div
          className={`flex absolute left-[50%] translate-x-[-50%]  items-center gap-8 ${playfairDisplay.className}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className=" hover:underline underline-offset-4 text-[#502004] capitalize text-base font-normal hover:text-[#4A4A4A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className={`${HelveticaNeue.className} px-6 py-3 bg-[#FF583B] text-white text-base font-normal rounded-[14.25px] hover:bg-[#FF5536] transition-all hover:shadow-lg`}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
