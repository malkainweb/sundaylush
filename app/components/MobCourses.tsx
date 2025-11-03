"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import uspBg from "@/../public/home/uspAnimation/uspbg.png";
import uspBGRed from "@/../public/home/uspAnimation/uspBGRed.png";
import img1 from "@/public/courseStep/img1.webp";
import img2 from "@/public/courseStep/img2.webp";
import img3 from "@/public/courseStep/img3.webp";

import Image from "next/image";

import { gsap } from "gsap";

import Link from "next/link";
import { HelveticaNeue, playfairDisplay } from "../util/font";

const MobCourses = () => {
  const sectionRef = useRef(null);

  const items = [
    {
      image: img1,
      title: ["Classic Lash  ", "Extension"],
      duration: "3 Days",
      description:
        "A foundational course for beginners or rebuilding artists. Covers theory, safety, mapping, classic application, and hands-on model work. ",
    },
    {
      image: img2,
      title: ["Volume and Mega  ", "Volume Certificaton"],
      duration: "2 Days",
      description:
        "Advanced training for certified lashed artist. Focuses on fan creation, density control, mega styling, retention, and lash health. ",
    },
    {
      image: img3,
      title: ["Hybrid and Specialty ", "Styling Workshop"],
      duration: "1 Day",
      description:
        "For intermediate to advanced artists. Topic include, wispy sets, hybrid blending, textured styling, client customization.",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const width = globalThis.innerWidth;
  useEffect(() => {
    setcalwidth(width);
  }, [width]);

  const [calwidth, setcalwidth] = useState(0);
  const [yvalue, setyvalue] = useState(1);
  const [scale_y2value, setscale_y2value] = useState(0);
  const [height, setheight] = useState(1);

  const y = useTransform(scrollYProgress, [0, 1], [1, items.length + 0.3]);
  const scale_y = useTransform(scrollYProgress, [0, 1], [10, 1]);
  const parent_height = useTransform(scrollYProgress, [0, 1], [1, 10]);

  useMotionValueEvent(y, "change", (latest) => {
    setyvalue(latest);
  });
  useMotionValueEvent(scale_y, "change", (latest) => {
    setscale_y2value(latest);
  });
  useMotionValueEvent(parent_height, "change", (latest) => {
    setheight(latest);
  });

  const dynamicArray_scaling = Array(items.length)
    .fill("")
    .map((_, index) => index);

  const calculateScale = (index: number, data_array: any[], yvalue: number) => {
    const minScale = Math.min(...data_array) / 2 + scale_y2value / 10;
    const maxScale = 1;
    const scaleFactor = (yvalue - (index + 1)) / (calwidth < 765 ? 9 : 8);
    const scale = maxScale - (maxScale - minScale) * scaleFactor;
    return scale;
  };

  const itemRefs = useRef<any>([]);

  useEffect(() => {
    itemRefs.current.forEach((ref: any, index: any) => {
      gsap.to(ref, {
        opacity:
          index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
            ? 1
            : index + 1 - yvalue <= 0
            ? 1
            : 0,
        transform:
          index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
            ? `translateY(${
                (index + 2 - yvalue) * 100 -
                (calwidth < 765 ? 140 : 150) * (-index + yvalue)
              }%) translateX(-50%)`
            : index + 1 - yvalue <= 0
            ? `translateY(${
                -(calwidth < 765 ? 45 : 50) -
                (yvalue - (index + 1)) * (calwidth < 765 ? 12 / 1.7 : 1 / 1)
              }%) translateX(-50%) scale(${calculateScale(
                index,
                dynamicArray_scaling,
                yvalue
              )})`
            : `translateY(${yvalue + 1 + index * 100}%) translateX(-50%)`,
        duration: 0.4,
      });
    });
  }, [yvalue]);

  const [uspModalOpen, setUspModalOpen] = useState(false);

  return (
    <>
      <div className="text-center pt-39">
        <h2
          className={`${playfairDisplay.className} text-4xl  font-medium text-[#422611] mb-6  -tracking-wide`}
        >
          Lash Certification Courses
        </h2>

        <p
          className={`${HelveticaNeue.className} font-light text-lg text-[#422611] leading-[110%] w-60 mx-auto`}
        >
          Our step-by-step lessons make lash mastery simple, fun, and
          achievable.
        </p>
      </div>
      <section
        className="w-full md:hidden mt-[-10vh] mx-auto flex items-end md:w-800 md:max-w-full md:mt-22 relative"
        style={{ height: `${items.length * (calwidth < 765 ? 100 : 90)}vh` }}
        ref={sectionRef}
        aria-label="Product benefits showcase"
      >
        <div className="flex justify-center items-center sticky bottom-0 h-screen w-full">
          {items.map((course: any, index: any) => {
            return (
              <article
                key={index}
                // style={{ backgroundColor: index == 1 ? "#F94141" : "#FFE7A2" }}
                ref={(el: any) => (itemRefs.current[index] = el)}
                className={` absolute top-[50%]  shadow-md translate-x-[-50%] justify-center md:max-h-[95vh] w-[95%] h-[85vh] left-[50%] flex-col-reverse  gap-6 flex rounded-[30px] overflow-clip `}
              >
                <div className="bg-white/90 h-full backdrop-blur-xl rounded-[30px] drop-shadow-2xl px-5 pt-10 pb-5 flex flex-col justify-between  gap-5 min-h-[400px] hover:bg-white/90 transition-all duration-300">
                  {/* Card Content */}
                  <div className="">
                    <div className="  border-b border-b-black/10">
                      <h4
                        className={`${playfairDisplay.className} text-3xl font-extralight text-[#000000] leading-[100%] mb-5`}
                      >
                        {course.title[0]}
                        <br />
                        {course.title[1]}
                      </h4>
                    </div>{" "}
                  </div>
                  <div className="w-full  flex-1   rounded-[20px] overflow-hidden ">
                    <Image
                      src={course.image}
                      alt={course.title.join(" ")}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p
                      className={`${playfairDisplay.className} bg-[#E9F1E2] w-fit p-2 rounded-full text-sm font-light text-[#1A2F05] mb-3`}
                    >
                      Course duration:{" "}
                      <span className="font-normal">{course.duration}</span>
                    </p>
                    <p
                      className={`${HelveticaNeue.className} text-[#422611] text-base leading-[110%]`}
                    >
                      {course.description}
                    </p>

                    {/* CTA Button */}
                    <button
                      className={`${playfairDisplay.className} w-[95%] mx-auto py-3.5 mt-4 bg-[#EEE7D7] text-[#2C2C2C] text-base font-normal cursor-pointer rounded-[15px] hover:bg-[#DDD8CB] transition-all duration-200`}
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MobCourses;
