"use client";
import SearchBar from "./search-bar";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInBounce,
  viewportOptions,
} from "@/lib/animation-variants";
import { Phone, Sparkle } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const buttons = [
    {
      text: "Book Consultation",
      href: "/contact",
      styling: "bg-primary text-white hover:bg-white hover:text-primary",
    },
    {
      text: "Explore Services",
      href: "/services",
      styling: "bg-white text-primary hover:bg-primary hover:text-white",
    },
  ];
  return (
    <section className="relative bg-[url('https://triprex.egenslab.com/wp-content/uploads/2024/02/home2-banner-img1.webp')] bg-cover bg-center min-h-screen">
      <div className="cover min-h-screen  relative pt-16 pb-8">
        <div className="max-w-4xl mx-auto ">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className=" mx-auto px-4 min-h-screen flex flex-col items-center justify-center gap-12 relative z-10"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-white font-bold  text-3xl md:text-5xl text-center leading-tight"
            >
              Study, Work & Relocate Abroad — With Professional Visa &
              Consultation Guidance.
            </motion.h1>
            <motion.h2 className=" text-center text-white/70">
              We provide expert support for Study Visas, Work Visas, Relocation
              Guidance, Consultations & Documentation Support. Your trusted
              pathway to Canada, Europe & New Zealand.
            </motion.h2>
            <div className="flex md:flex-row flex-col items-center gap-5">
              {buttons.map((button) => (
                <Link
                  key={button.text}
                  href={button.href}
                  className={` px-3 py-3 rounded-md transition ease-in duration-200 ${button.styling}`}
                >
                  {button.text}
                </Link>
              ))}
            </div>
            <p className="text-white/70 text-center">
              Trusted by clients across Africa, Europe & North America.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
