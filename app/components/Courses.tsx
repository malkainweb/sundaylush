import React from "react";
import { HelveticaNeue, playfairDisplay } from "../util/font";

// Import gallery images
import img1 from "@/public/courseStep/img1.webp";
import img2 from "@/public/courseStep/img2.webp";
import img3 from "@/public/courseStep/img3.webp";
import Image from "next/image";

const courses = [
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
export default function Courses() {
  return (
    <div id="courses" className="w-full  bg-linear-to-b to-10%  to-white">
      <section className="w-full  md:max-w-[98%] md:rounded-b-3xl mx-auto bg-[#F2E8DE] px-[3%] pb-20 md:px-14">
        <div className="md:w-500 w-full  max-w-full mx-auto">
          {/* Header */}
          <div className="text-center w-full pt-20 md:pt-39 mb-10 md:mb-16">
            <h2
              className={`${playfairDisplay.className} text-4xl md:text-6xl lg:text-7xl font-medium md:font-light text-[#422611] md:mb-8 mb-5  -tracking-wide`}
            >
              Lash Certification <br className="md:hidden" /> Courses
            </h2>

            <p
              className={`${HelveticaNeue.className} md:font-medium  font-light text-base text-[#422611] leading-[120%]  w-60 max-w-full md:w-90 mx-auto`}
            >
              Our step-by-step lessons make lash mastery simple, fun, and
              achievable.
            </p>
          </div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2  w-full lg:grid-cols-3 gap-4 mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm md:rounded-[30px] rounded-2xl md:drop-shadow-2xl md:px-8 px-4 pt-7 md:pt-10 pb-5 flex flex-col justify-between   gap-5 min-h-[400px] hover:bg-white/90 transition-all duration-300"
              >
                {/* Card Content */}
                <div className="">
                  <div className="  mb-5 border-b border-b-black/10">
                    <h4
                      className={`${playfairDisplay.className} text-2xl leading-[100%] md:text-3xl md:font-extralight font-light text-[#000000] mb-5`}
                    >
                      {course.title[0]}
                      <br />
                      {course.title[1]}
                    </h4>
                  </div>{" "}
                  <div className="w-full shadow-md  rounded-2xl md:rounded-[10px] overflow-hidden aspect-[1/0.6]">
                    <Image
                      src={course.image}
                      alt={course.title.join(" ")}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <p
                    className={`${playfairDisplay.className} bg-[#E9F1E2] w-fit p-2 rounded-full text-sm font-light text-[#1A2F05] mb-3`}
                  >
                    Course duration:{" "}
                    <span className="font-normal">{course.duration}</span>
                  </p>
                  <p
                    className={`${HelveticaNeue.className} text-[#422611] text-sm leading-[120%]`}
                  >
                    {course.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    className={`${playfairDisplay.className} md:w-[92%] w-[96%] mx-auto py-3.5 md:py-3 mt-4 bg-[#EEE7D7] text-[#2C2C2C] text-sm font-normal cursor-pointer rounded-[15px] md:rounded-[20px] hover:bg-[#DDD8CB] transition-all duration-200`}
                  >
                    Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
