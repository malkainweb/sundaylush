import React, { useEffect, useState } from "react";
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
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 200) {
        // Scrolling up or near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down and past 200px
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <nav
      className={`w-240 shadow-md left-[50%] translate-x-[-50%] max-w-[90%] mx-auto fixed transition-all duration-1000 rounded-[18px] z-1000 bg-[#EEE7D7] p-1.5 ${
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
