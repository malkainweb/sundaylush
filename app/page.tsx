"use client";
import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import FAQ from "./components/faq";
import bodyBg from "@/public/bodyBg.webp";
import Courses from "./components/Courses";
import UspAnimation from "./components/UspAnimation";
import Hero from "./components/hero";
import { useEffect, useState } from "react";

import sec1 from "@/public/hero/sec1.webp";
import sec2 from "@/public/hero/sec2.webp";
import sec3 from "@/public/hero/sec3.webp";
import sec4 from "@/public/hero/sec4.webp";
import sec5 from "@/public/hero/sec5.webp";
import flower from "@/public/hero/flower.svg";
import BeautyProcess from "./components/Process";
import StackedGallery from "./components/StackedGallery";
import MobCourses from "./components/MobCourses";
const heroImages = [sec1, sec2, sec3, sec4, sec5];

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const imagePromises = heroImages.map((img) => {
      return new Promise((resolve) => {
        const image = new window.Image();
        image.src = img.src;
        image.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / heroImages.length) * 100);
          resolve(true);
        };
      });
    });
  }, []);
  if (loadingProgress < 100) return null;

  return (
    <div className="min-h-screen w-full">
      {/* Background Image */}
      <div className="fixed top-0 left-0 h-screen w-full -z-10">
        <Image
          src={bodyBg}
          alt="background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* <Navbar />
        <Hero />*/}
        {/* <Courses /> */}
        {/* <MobCourses /> */}
        {/* <UspAnimation /> */}
        <BeautyProcess />
        {/*    <StackedGallery /> */}
        <FAQ />
        {/*   <Footer /> */}
      </div>
    </div>
  );
}
