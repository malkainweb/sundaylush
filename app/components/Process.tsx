"use client";
import Image from "next/image";
import imgOne from "@/public/courses/img_one.webp";
import imgTwo from "@/public/courses/img_two.webp";
import imgThree from "@/public/courses/img_three.webp";
import imgFour from "@/public/courses/img_four.webp";
import imgFive from "@/public/courses/img_five.webp";
import { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
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
      "Click “Enroll Now” and choose the course best fitted for you.",
  },
  {
    id: 3,
    image: imgThree,
    title: "Make payment",
    description:
      "Complete your secure payment and get scheduled for your course.",
  },
  {
    id: 4,
    image: imgFour,
    title: "Start Learning",
    description:
      "Our customer care representative will get you scheduled for you live in- person course.",
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

  const [isMobile, setIsMobile] = useState(false);

  // Detect if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
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
  const width = useTransform(
    scrollYProgress,
    [0, 1],
    ["10%", "100%"] // Adjust this percentage based on your needs
  );

  return (
    <div
      ref={containerRef}
      className=" overflow-clip bg-linear-to-b to-[#F2EEE5] mx-auto md:w-800 max-w-full md:h-[400vh] w-full"
    >
      <div className="md:h-screen flex flex-col md:sticky top-0 left-0 w-full">
        {/* Top Section with Title and Progress Circle */}
        <div className="md:h-[45%]   flex items-center justify-center">
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
        <div className="mx-auto w-full  relative overflow-hidden md:h-[55%]  px-4 ">
          <motion.div className="h-[3px]  w-full bg-[#1A2F05]/33 absolute top-5 left-0 ">
            <motion.div
              style={{ width }}
              className="h-full rounded-xs bg-[#1A2F05] "
            />
          </motion.div>
          <motion.div
            ref={cardsRef}
            className="flex  h-full md:flex-row flex-col  w-fit gap-64 flex-nowrap"
            style={{
              x: isMobile ? 0 : xTransform, // Apply transform only on desktop
            }}
          >
            {coursesData.map((course) => (
              <div
                key={course.id}
                className="  rounded-lg relative border2  md:shrink-0  items-center gap-5 flex  "
              >
                <div className="w-10 h-10 absolute border-black top-0 border-2 left-0 bg-white rounded-full"></div>
                <div className="relative  border2  shrink-0 w-[30%] md:rounded-3xl md:w-[16rem] aspect-square overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={` w-full  ${HelveticaNeue.className}`}>
                  <h3 className="md:text-5xl md:whitespace-nowrap leading-[105%] capitalize text-[#2F1605] font-normal mb-3">
                    {course.title}
                  </h3>
                  <p
                    className={`text-[#2F1605]/70   w-[20rem]   font-light text-xl leading-[110%]`}
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
