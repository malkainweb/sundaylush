"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

// Import gallery images
import img1 from "@/public/gallery/img1.webp";
import img2 from "@/public/gallery/img2.webp";
import img3 from "@/public/gallery/img3.webp";
import img4 from "@/public/gallery/img4.webp";
import img5 from "@/public/gallery/img5.webp";
import img6 from "@/public/gallery/im6.webp";
import img7 from "@/public/gallery/im7.webp";
import img8 from "@/public/gallery/im8.webp";
import { playfairDisplay } from "../util/font";

const galleryImages = [img2, img3, img4, img5, img6, img1, img7, img8];

// Define different widths for variety
const getWidthByIndex = (index: number) => {
  const widths = [
    "w-[30rem]",
    "w-[36rem]",
    "w-[28rem]",
    "w-[23rem]",
    "w-[32rem]",
    "w-[38rem]",
    "w-[30rem]",
    "w-[30rem]",
  ];
  return widths[index % widths.length];
};

// Define different translateY values for variety
const getTranslateYByIndex = (index: number) => {
  const translateYValues = [
    "translate-y-[43%]",
    "translate-y-[-50%]",
    "translate-y-[56%]",
    "translate-y-[-50%]",
    "translate-y-[43%]",
    "translate-y-[-57%]",
    "translate-y-[57%]",
    "translate-y-[-32%]",
  ];
  return translateYValues[index % translateYValues.length];
};

// Define different margin left and right values for variety
const getMarginsByIndex = (index: number) => {
  const margins = [
    "",
    "",
    "ml-[-5%] mr-[-3.3%]",
    "",
    "",
    " ",
    "ml-[-5%] mr-5",
    "",
  ];
  return margins[index % margins.length];
};

// Animated Text Component
const AnimatedText = ({ text }: { text: string }) => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false, margin: "-20%" });

  const letters = text.split("");

  return (
    <h2
      ref={textRef}
      className="text-[clamp(4rem,12vw,10rem)] drop-shadow-black/30 drop-shadow-md font-serif text-[#D1BDAE]/60 whitespace-nowrap"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05, // Stagger delay for each letter
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h2>
  );
};

export default function StackedGallery() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full md:w-800 max-w-full mx-auto bg-[#F2EEE5] h-[300vh]"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background Text */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none ${playfairDisplay.className}`}
        >
          <AnimatedText text="OUR GALLERY" />
        </div>

        {/* Scrolling Images Container */}
        <motion.div
          className="flex items-center gap-20 h-screen w-fit px-10"
          style={{
            x: useTransform(scrollYProgress, [0, 1], ["25%", "-70%"]),
          }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative ${getWidthByIndex(
                index
              )} h-120 max-h-[47%] shadow-md shrink-0 ${getTranslateYByIndex(
                index
              )} ${getMarginsByIndex(index)}`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
