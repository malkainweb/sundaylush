import React from "react";
import { HelveticaNeue, playfairDisplay } from "../util/font";

const courses = [
  {
    title: ["Entry level", "course"],
    duration: "4Weeks - 8Weeks",
    description:
      "Whether you're learning for yourself or looking to build a beauty business, our step-by-step training makes mastery simple, fun, and achievable.",
  },
  {
    title: ["Advanced", "course"],
    duration: "4Weeks - 8Weeks",
    description:
      "Whether you're learning for yourself or looking to build a beauty business, our step-by-step training makes mastery simple, fun, and achievable.",
  },
  {
    title: ["Eye lash extension", "products"],
    duration: "4Weeks - 8Weeks",
    description:
      "Whether you're learning for yourself or looking to build a beauty business, our step-by-step training makes mastery simple, fun, and achievable.",
  },
];

export default function Courses() {
  return (
    <div className="w-full bg-linear-to-b to-10%  to-white">
      <section className="md:w-full md:max-w-[98%] rounded-b-3xl mx-auto bg-[#F2E8DE] pb-20 px-14">
        <div className="md:w-500 max-w-full mx-auto">
          {/* Header */}
          <div className="text-center pt-39 mb-16">
            <h2
              className={`${playfairDisplay.className} text-5xl md:text-6xl lg:text-7xl font-light text-[#422611] mb-8 tracking-[140%]`}
            >
              CLASSIC LASH <br /> CERTIFICATION COURSE
            </h2>

            <p
              className={`${HelveticaNeue.className} text-sm md:text-base text-[#422611] leading-[120%] w-110 mx-auto`}
            >
              Whether you're learning for yourself or looking to build a beauty
              business, our step-by-step training makes mastery simple, fun, and
              achievable.
            </p>
          </div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-[30px] drop-shadow-2xl px-8 pt-10 pb-5 flex flex-col justify-between gap-52 min-h-[400px] hover:bg-white/90 transition-all duration-300"
              >
                {/* Card Content */}
                <div className="  border-b border-b-black/10">
                  <h4
                    className={`${playfairDisplay.className} w-70 text-2xl md:text-3xl font-extralight text-[#000000] mb-5`}
                  >
                    {course.title[0]}
                    <br />
                    {course.title[1]}
                  </h4>
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
                    className={`${playfairDisplay.className} w-[92%] mx-auto py-3 mt-4 bg-[#EEE7D7] text-[#2C2C2C] text-sm font-normal cursor-pointer rounded-[20px] hover:bg-[#DDD8CB] transition-all duration-200`}
                  >
                    Get Started
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
