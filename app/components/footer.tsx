import React from "react";
// Using React Icons - install with: npm install react-icons
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTelephone, BsEnvelope, BsGeoAlt } from "react-icons/bs";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { HelveticaNeue, playfairDisplay } from "../util/font";
import footerBg from "@/public/footer/footerBg.webp";
import footerlogo from "@/public/footer/footerlogo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative  w-full bg-[#FF583B] text-white overflow-hidden">
      {/* <Image
        src={footerBg}
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover  brightness-60 pointer-events-none"
      /> */}
      {/* Background overlay effect */}
      <div className="absolute inset-0 bg-linear-to-br from-white/20 to-90% via-transparent to-transparent pointer-events-none" />

      {/* Decorative light beam effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative  w-full z-10 md:w-800 max-w-full mx-auto pt-10 pb-16">
        {/* Logo Section */}
        <div className="text-center w-full  md:mb-0 mb-6 px-[8%] ">
          <Image
            src={footerlogo}
            alt="Footer Logo"
            className="mx-auto w-full  "
          />
        </div>
        <div className="border-b border-white/50  md:block hidden mb-10 "></div>

        {/* Content Grid */}
        <div className="flex  md:flex-row  flex-col justify-between items-center px-[3.2%] md:pt-14  gap-16 w-full mx-auto">
          {/* Left Column - Reach Out */}
          <div className={`${playfairDisplay.className} order-2 md:order-1 `}>
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide">
              REACH OUT TO US
            </h2>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 text-[#FDFBEE] transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>

            {/* Contact Information */}
            <div className={`space-y-3`}>
              <a
                href="mailto:sundaylashcompany@gmail.com"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              >
                <BsEnvelope className="w-5 h-5 shrink-0" />
                <span className="text-base">sundaylashcompany@gmail.com</span>
              </a>

              <a
                href="tel:+12225657236"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              >
                <BsTelephone className="w-5 h-5 shrink-0" />
                <span className="text-base">(222) 567 7236</span>
              </a>

              <a
                href="https://maps.google.com/?q=280+Route+35+South,+Suite+200,+Red+Bank,+NJ+07701"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              >
                <BsGeoAlt className="w-5 h-5 shrink-0" />
                <span className="text-base">
                  280 Route 35 South, Suite 200, Red Bank, NJ, 07701
                </span>
              </a>
            </div>

            {/* Copyright */}
            <div className="flex gap-3 flex-col   mt-12 ">
              <p
                className={`${HelveticaNeue.className}  text-white w-[20rem] font-light max-w-full leading-[110%]`}
              >
                Copyright Sunday Lash Co. 2025. All rights reserved{" "}
              </p>
              <a
                href="https://www.malkain.com"
                className={`hover:text-white underline underline-offset-4 capitalize font-light text-sm text-white/70 ${HelveticaNeue.className}`}
              >
                Designed and developed by malkain
              </a>
            </div>
          </div>

          {/* Right Column - Schedule Meeting */}
          {/* <div className=""> */}
          <div
            className={`${playfairDisplay.className}  order-1 bg-[#FBB824]/50 backdrop-blur-md rounded-[30px] p-7 w-full  md:w-110 md:max-w-[60%] flex flex-col md:gap-6 gap-5 text-[#FDFBEE]`}
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              SCHEDULE A<br />
              MEETING
            </h2>

            <p
              className={`${HelveticaNeue.className} md:text-base text-sm leading-[130%] `}
            >
              Ready to take the next step? Whether you're curious about our
              courses, need guidance on which program is right for you, or want
              to explore how our skills can fit into your beauty journey—we're
              here to help.
            </p>

            <button
              className={`${playfairDisplay.className} w-full  px-12 py-4 bg-[#FFF7E7]  text-[#502004] rounded-full text-base font-medium hover:bg-white transition-all hover:shadow-lg`}
            >
              Book an appointment
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
}
