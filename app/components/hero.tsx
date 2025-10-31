"use client";

import sec1 from "@/public/hero/sec1.webp";
import sec2 from "@/public/hero/sec2.webp";
import sec3 from "@/public/hero/sec3.webp";
import sec4 from "@/public/hero/sec4.webp";
import sec5 from "@/public/hero/sec5.webp";
import flower from "@/public/hero/flower.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HelveticaNeue, playfairDisplay } from "../util/font";
const heroImages = [sec1, sec2, sec3, sec4, sec5];

const Hero = () => {
  const [startAnime, setstartAnime] = useState(false);
  const [secondStartAnime, setsecondStartAnime] = useState(false);

  useEffect(() => {
    // document.body.style.overflow = "hidden";
    setstartAnime(true);

    setTimeout(() => {
      setsecondStartAnime(true);
      // setTimeout(() => {
      //   document.body.style.overflow = "auto";
      // }, 1000);
    }, 1200);

    // return () => {
    //   document.body.style.overflow = "auto";
    // };
  }, []);

  return (
    <>
      <div className="w-full flex flex-col relative ">
        <div className=" h-screen  sticky top-0 left-0 overflow-clip gap-10 w-full grid  grid-cols-5 px-10 ">
          <div
            style={{
              opacity: secondStartAnime ? 1 : 0.5,
              transition: "opacity 1.3s ease-in-out",
            }}
            className="bg-linear-to-b pointer-events-none  to-[#A8603A] absolute h-[75%] left-0 w-full bottom-0 z-100"
          ></div>

          <div
            style={{
              opacity: secondStartAnime ? 1 : 0.5,
              transition: "opacity 1.3s ease-in-out",
            }}
            className="bg-linear-to-t   pointer-events-none  to-[#A8603A] absolute h-[75%] left-0 w-full top-0 z-100"
          ></div>
          {/* Add this new section right after the hero images grid and before the mission/vision section */}

          {heroImages.map((img, index) => (
            <div key={index} className="w-full overflow-x-clip flex relative">
              <Image
                src={img}
                alt={`Hero Image ${index + 1}`}
                width={0}
                height={0}
                priority // Add this
                sizes="100vw"
                className={` w-full  h-auto  transition-all  duration-[1.1s]
                ${
                  !startAnime
                    ? `scale-[1.8] ${
                        index % 2 === 0
                          ? "translate-y-[-60%]"
                          : "-translate-y-full"
                      }`
                    : ""
                }        ${
                  secondStartAnime
                    ? index % 2 === 0
                      ? "translate-y-[8%]"
                      : "translate-y-[-8%]"
                    : ""
                }

      `}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center  items-center h-screen  mt-[-100vh]  mb-[-30vh]  z-10000 ">
          <div className="flex  flex-col items-center gap-5 max-w-4xl px-8">
            {/* Header */}
            <div className="overflow-hidden  ">
              <h1
                className={`${
                  playfairDisplay.className
                } text-5xl md:text-6xl capitalize lg:text-7xl font-light text-[#F2E8DE] text-center leading-[120%] transition-all duration-[1.3s] ${
                  !secondStartAnime ? "translate-y-[200px]" : "translate-y-0"
                }`}
              >
                This is Lash Education;
                <br />
                The Sunday Way
              </h1>
            </div>

            {/* Caption */}
            <div className="overflow-hidden  ">
              <p
                className={`${
                  playfairDisplay.className
                } text-base md:text-lg text-[#F2E8DE] text-center  font-light leading-[120%] w-100 transition-all duration-[1.3s] ${
                  !secondStartAnime ? "-translate-y-[200px]" : "translate-y-0"
                }`}
              >
                At Sunday Lash Co, we're raising the standard for lash
                education—by putting real support, clarity, and growth at the
                center of everything we do.
              </p>
            </div>

            {/* Button */}

            <div className=" overflow-hidden">
              <button
                className={`${
                  HelveticaNeue.className
                } px-12 py-4 bg-[#FF583B] cursor-pointer text-[white] text-base font-normal rounded-[14px] hover:bg-[#ff9c8b] transition-all duration-[1.3s] pointer-events-auto ${
                  !secondStartAnime ? "-translate-y-[200px]" : "translate-y-0"
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <section className="bg-white translate-y-80   md:w-full md:max-w-[98%] mx-auto min-h-[20vh] w-full z-100  rounded-t-[40px] px-8 md:px-16 pb-32 pt-24">
          <div className="max-w-7xl  mx-auto">
            {/* Header */}
            <div className="mb-20">
              <h2
                className={`${playfairDisplay.className} text-4xl md:text-5xl font-extralight text-[#422611] leading-[110%] w-230 max-w-full `}
              >
                At Sunday Lash Company, we{"'"}re raising the standard for lash
                education by putting real support, clarity, and excellence at
                the center of everything we do.
              </h2>
            </div>

            {/* Mission and Vision Container */}
            <div className="flex flex-col md:flex-row   items-stretch">
              {/* Left Side - Icon and Label */}
              <div className="flex flex-col border-t   rounded-tr-2xl  justify-center  items-center  gap-4 md:w-1/4">
                <Image
                  src={flower}
                  alt="Flower Icon"
                  className="w-[50%] h-auto "
                />
              </div>

              {/* Center - Divider */}
              {/* <div className="hidden md:block  w-px bg-[#D1C4B8] self-stretch"></div> */}

              {/* Right Side - Mission and Vision */}
              <div className="flex-1 flex  border-t border-l pl-10 relative rounded-tl-2xl pt-6 flex-col md:flex-row gap-12">
                <div className="flex-1">
                  <h3
                    className={`${playfairDisplay.className} text-lg uppercase text-[#422611] mb-4  font-medium`}
                  >
                    OUR MISSION
                  </h3>
                  <p
                    className={`${HelveticaNeue.className} text-base leading-[130%] text-[#422611] `}
                  >
                    To provide calm, confidence-building lash education that
                    empowers artists to grow with clarity, creativity and
                    integrity. We're on a mission to set a new pace to the lash
                    industry, one where slow, steady learning is celebrated, and
                    support doesn't end after certification
                  </p>
                </div>

                {/* Our Vision */}
                <div className="flex-1">
                  <h3
                    className={`${playfairDisplay.className} text-lg uppercase text-[#422611] mb-4  font-medium`}
                  >
                    OUR VISION
                  </h3>
                  <p
                    className={`${HelveticaNeue.className} text-base leading-[130%] text-[#422611] `}
                  >
                    We envision an industry led by empowered lash professionals,
                    where artistry is nurtured, not rushed, and growth is always
                    guided with purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-80"></div>
    </>
  );
};

export default Hero;
