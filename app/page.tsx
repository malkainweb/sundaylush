import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import FAQ from "./components/faq";
import bodyBg from "@/public/bodyBg.webp";
import Courses from "./components/Courses";
import UspAnimation from "./components/UspAnimation";
import Hero from "./components/hero";

export default function Home() {
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
        <Navbar />
        <Hero />
        <Courses />
        <UspAnimation />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
