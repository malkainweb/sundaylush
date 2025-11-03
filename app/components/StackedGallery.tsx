"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

// Import gallery images
import img1 from "@/public/gallery/img1.webp";
import img2 from "@/public/gallery/img2.webp";
import img3 from "@/public/gallery/img3.webp";
import img4 from "@/public/gallery/img4.webp";
import img5 from "@/public/gallery/img5.webp";
import img6 from "@/public/gallery/img6.webp";
import img7 from "@/public/gallery/img7.webp";
import img8 from "@/public/gallery/img8.webp";
import { playfairDisplay } from "../util/font";

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

// Define different widths for variety
const getWidthByIndex = (index: number) => {
  const widths = [
    "md:w-[30rem]",
    "md:w-[36rem]",
    "md:w-[28rem]",
    "md:w-[23rem]",
    "md:w-[32rem]",
    "md:w-[38rem]",
    "md:w-[30rem]",
    "md:w-[30rem]",
  ];
  return widths[index % widths.length];
};

// Define different translateY values for variety
const getTranslateYByIndex = (index: number) => {
  const translateYValues = [
    "md:translate-y-[43%]",
    "md:translate-y-[-50%]",
    "md:translate-y-[56%]",
    "md:translate-y-[-50%]",
    "md:translate-y-[43%]",
    "md:translate-y-[-57%]",
    "md:translate-y-[57%]",
    "md:translate-y-[-32%]",
  ];
  return translateYValues[index % translateYValues.length];
};

// Define different margin left and right values for variety
const getMarginsByIndex = (index: number) => {
  const margins = [
    "",
    "",
    "md:ml-[-5%] md:mr-[-3.3%]",
    "",
    "",
    " ",
    "md:ml-[-5%] md:mr-5",
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
      className="md:text-[clamp(4rem,12vw,10rem)] text-[12vw] drop-shadow-black/30 drop-shadow-md font-serif md:text-[#D1BDAE]/60 text-[#D1BDAE] whitespace-nowrap"
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xMove = useTransform(scrollYProgress, [0, 1], ["25%", "-70%"]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle navigation for mobile
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;
      const scrollPosition =
        (scrollWidth - clientWidth) * (index / (galleryImages.length - 1));
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  // Track scroll position and update current slide
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;

      // Calculate which slide is currently in view
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
      const slideIndex = Math.round(
        scrollPercentage * (galleryImages.length - 1)
      );

      setCurrentSlide(slideIndex);
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePrev = () => {
    const newIndex =
      currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1;
    handleSlideChange(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentSlide === galleryImages.length - 1 ? 0 : currentSlide + 1;
    handleSlideChange(newIndex);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full md:w-800 max-w-full mx-auto bg-linear-to-b  via-[#F2EEE5] from-[#F2EEE5] md:bg-[#F2EEE5] md:h-[300vh]"
    >
      {/* Sticky Container */}
      <div className="md:sticky top-0 md:flex-row flex-col md:h-screen flex items-center md:overflow-hidden">
        {/* Background Text */}
        <div
          className={`md:absolute md:inset-0 md:pb-0 pb-5 flex items-center justify-center pointer-events-none ${playfairDisplay.className}`}
        >
          <AnimatedText text="OUR GALLERY" />
        </div>

        {/* Scrolling Images Container */}
        <motion.div
          className="flex items-center snap-mandatory snap-x overflow-x-auto scrollbar-hide  md:overflow-x-visible w-full gap-6 md:pb-0 pb-4 pt-4 md:gap-20 md:h-screen md:w-fit px-10"
          style={{
            x: isMobile ? 0 : xMove,
          }}
          ref={scrollContainerRef}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative ${getWidthByIndex(
                index
              )} md:h-120 aspect-[1/1.1] ${
                index === currentSlide ? "scale-110" : ""
              } snap-center md:max-h-[47%] origin-center w-[75vw] transition duration-500 shadow-md shrink-0 ${getTranslateYByIndex(
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

      <div className="flex  w-full justify-center py-10 items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-[#FF6B4A] hover:bg-[#FF5233] transition-colors flex items-center justify-center shadow-lg group"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-1">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`rounded-full transition-all ${
                index === currentSlide
                  ? "w-3 h-3 bg-[#FF583B]"
                  : "w-2 h-2 bg-[#FF6B4A]/30 hover:bg-[#FF6B4A]/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-[#FF6B4A] hover:bg-[#FF5233] transition-colors flex items-center justify-center shadow-lg group"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
