"use client";
import Image from "next/image";
import imgOne from "@/public/courses/img_one.webp";
import imgTwo from "@/public/courses/img_two.webp";
import imgThree from "@/public/courses/img_three.webp";
import imgFour from "@/public/courses/img_four.webp";
import imgFive from "@/public/courses/img_five.webp";
import { StaticImageData } from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HelveticaNeue, playfairDisplay } from "../util/font";

export interface CourseItem {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}

export const coursesData: CourseItem[] = [
  {
    id: 1,
    image: imgOne,
    title: "Browse our courses",
    description:
      "Explore our full range of lash courses designed for every skill level. From foundational basics to advanced techniques, you'll find the perfect course to match your beauty goals.",
  },
  {
    id: 2,
    image: imgTwo,
    title: "Select your course",
    description:
      "Click Enroll Now on the course you like most. Each course is carefully crafted to guide you step by step on exactly what to learn.",
  },
  {
    id: 3,
    image: imgThree,
    title: "Make payment",
    description:
      "Complete your secure payment and get instant access to your course materials.",
  },
  {
    id: 4,
    image: imgFour,
    title: "Start Learning",
    description:
      "Begin your lash journey with comprehensive video lessons and expert guidance.",
  },
  {
    id: 5,
    image: imgFive,
    title: "Begin your lash journey",
    description:
      "Start building your skills and confidence with professional techniques.",
  },
];

export default function BeautyProcess() {
  const containerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate current step based on scroll progress
  const currentStep = useTransform(
    scrollYProgress,
    [0.2, 1],
    [1, coursesData.length]
  );

  // Calculate progress for the circle (0 to 100%)
  const circleProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Use percentage-based transform that accounts for the container width
  // This will scroll the last card fully into view
  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["10%", "-80%"] // Adjust this percentage based on your needs
  );

  return (
    <div
      ref={containerRef}
      className=" overflow-clip mx-auto md:w-800 max-w-full h-[400vh] w-full"
    >
      <div className="h-screen flex flex-col sticky top-0 left-0 w-full">
        {/* Top Section with Title and Progress Circle */}
        <div className="h-[45%]  flex items-center justify-center">
          <div
            className={` text-[#2F1605] text-center ${playfairDisplay.className}`}
          >
            <h2 className="text-5xl md:text-7xl mb-2">Our simplified</h2>
            <div className="flex items-center  justify-center gap-6">
              {/* Animated Circle with Number */}
              <motion.div className="relative w-20 h-20  p-1 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="absolute inset-0  w-full h-full -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="#E5E5E5"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  {/* Progress Circle */}
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="#2C1810"
                    strokeWidth="2.5"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 35}
                    style={{
                      strokeDashoffset: useTransform(
                        circleProgress,
                        [0, 100],
                        [2 * Math.PI * 35, 0]
                      ),
                    }}
                    strokeLinecap="round"
                  />
                </svg>
                {/* Step Number */}
                <p className=" w-full h-full bg-white rounded-full   flex justify-center items-center">
                  <motion.span
                    className={`text-2xl leading-[10%]   translate-y-1   rounded-full font-light text-[#2C1810] ${HelveticaNeue.className}`}
                  >
                    {useTransform(currentStep, (value) => Math.ceil(value))}
                  </motion.span>
                </p>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-serif">
                Beauty process
              </h2>
            </div>
          </div>
        </div>

        {/* Bottom Section with Scrolling Cards */}
        <div className="mx-auto w-fit  overflow-hidden h-[55%]  px-4 py-12">
          <motion.div
            ref={cardsRef}
            className="flex  w-fit gap-[16rem] flex-nowrap"
            style={{
              x: xTransform,
            }}
          >
            {coursesData.map((course) => (
              <div
                key={course.id}
                className="  rounded-lg shrink-0  items-center gap-5 flex  overflow-hidden"
              >
                <div className="relative  rounded-[24px] w-[16rem] aspect-square overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={`  ${HelveticaNeue.className}`}>
                  <h3 className="text-5xl whitespace-nowrap leading-[105%] capitalize text-[#2F1605] font-normal mb-3">
                    {course.title}
                  </h3>
                  <p
                    className={`text-[#2F1605]/50   w-[20rem]   font-light text-xl leading-[110%]`}
                  >
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
