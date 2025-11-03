"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MainUsp from "@/public/browse/mainusp.webp";
import Usp1 from "@/public/browse/usp_one.webp";
import Usp2 from "@/public/browse/usp_two.webp";
import Usp3 from "@/public/browse/usp_three.webp";
import sticks from "@/public/browse/sticks.webp";
import Image from "next/image";
import { playfairDisplay } from "../util/font";
import { useDeviceType } from "../util/useDeviceType";

const UspAnimation = () => {
  const containerRef = useRef(null);
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  const uspImages = [Usp1, Usp2, MainUsp, Usp3, Usp1, Usp2];

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform the Y position from 0 to calc(-25vh - 20px) as scroll goes from 0 to 0.2
  const containerY = useTransform(
    scrollYProgress,
    [0, 0.4],
    [-12, -window.innerHeight * 0.75 - 40] // 0 to -75vh - 40px
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.4, 0.401],
    [0, 1] // 0 to -25vh - 20px
  );

  const width = useTransform(
    scrollYProgress,
    [0.41, 0.8],
    [isTablet ? 640 : "50%", isTablet ? window.innerWidth : "100%"] // 0 to -25vh - 20px
  );
  const height = useTransform(
    scrollYProgress,
    [0.41, 0.8],
    ["50vh", "100vh"] // 0 to -25vh - 20px
  );
  const borderradius = useTransform(
    scrollYProgress,
    [0.56, 0.8],
    [24, 0] // 0 to -25vh - 20px
  );
  const bottom = useTransform(
    scrollYProgress,
    [0.8, 0.9],
    [-340, 40] // 0 to -25vh - 20px
  );
  const bottomwidth = useTransform(
    scrollYProgress,
    [0.84, 0.95],
    ["30%", "60%"] // 0 to -25vh - 20px
  );
  const bottomtranslate = useTransform(
    scrollYProgress,
    [0.84, 0.95],
    ["100%", "0%"] // 0 to -25vh - 20px
  );
  const bottomOpaciy = useTransform(
    scrollYProgress,
    [0.84, 0.95],
    [0, 1] // 0 to -25vh - 20px
  );

  return (
    <div ref={containerRef} className=" bg-white   w-full h-[360vh]">
      <div className=" w-full overflow-clip sticky top-0 left-0 ">
        <motion.div
          style={{ bottom }}
          className="absolute w-120 justify-between  overflow-hidden flex right-10 bottom-10 borer2 z-100000 bg-white rounded-[30px] p-2 "
        >
          <motion.div style={{ width: bottomwidth }} className="w-[50%]">
            <div className=" h-72 rounded-[20px] shrink-0 overflow-hidden w-full">
              <Image
                src={sticks}
                alt={`USP Sticks`}
                className="w-full h-full object-cover "
              />
            </div>
          </motion.div>{" "}
          <motion.div
            style={{ translateX: bottomtranslate, opacity: bottomOpaciy }}
            className={`flex justify-between shrink-0 w-[48%] p-3  flex-col ${playfairDisplay.className}`}
          >
            <div className="flex flex-col">
              <h2 className=" text-black/50 uppercase">What sets up apart</h2>
              <p className="text-sm mt-3 text-[#2F1605] leading-[120%]">
                {" "}
                At Sunday Lash Co, we{"'"}re raising the standard for lash
                education by putting real support, clarity, and growth at the
                center of everything we do.
              </p>
            </div>
            {/* CTA Button */}
            <button
              onClick={() => {
                document.getElementById("courses")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`${playfairDisplay.className} w-full  py-3  bg-[#EEE7D7] text-[#2C2C2C] text-sm font-medium cursor-pointer rounded-[20px] hover:bg-[#DDD8CB] transition-all duration-200`}
            >
              Browse course{" "}
            </button>
          </motion.div>
        </motion.div>
        <div className="flex absolute top-0  justify-center z-100 left-0 h-full w-full ">
          <div className="w-full "></div>
          <motion.div
            style={{ width }}
            className=" flex-col   relative justify-center items-center flex gap-5  z-100 shrink-0   md:w-160 lg:w-[50%]"
          >
            <div className="h-full w-full  "></div>
            <motion.div
              style={{ height, borderRadius: borderradius, opacity }}
              className=" h-[50vh] relative w-full overflow-hidden
                rounded-3xl shrink-0  "
            >
              <Image
                src={MainUsp}
                alt={`USP Image Main`}
                className="w-screen h-screen object-cover "
              />
            </motion.div>
            <div className="h-full  w-full  "></div>
          </motion.div>
          <div className="w-full  "></div>
        </div>

        <motion.div
          style={{ y: containerY }}
          className="gap-5 h-screen z-1000 items-center flex flex-col"
        >
          {uspImages.map((e, index) => {
            return (
              <div
                key={index}
                className=" min-h-[50vh] rounded-3xl md:w-160 lg:w-[50%] w-full overflow-hidden"
              >
                <Image
                  src={e}
                  alt={`USP Image ${index + 1}`}
                  className={`${
                    e == MainUsp ? "w-screen h-screen" : "w-full h-full"
                  } object-cover rounded-3xl`}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default UspAnimation;
