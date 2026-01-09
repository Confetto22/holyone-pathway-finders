"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeInUp, viewportOptions } from "@/lib/animation-variants";

// Import Swiper styles
import "swiper/css";

const partners = [
  { name: "Borcelle", color: "text-blue-500" },
  { name: "GoTrip", color: "text-blue-600" },
  { name: "travel", color: "text-sky-400" },
  { name: "G-Fly", color: "text-blue-400" },
  { name: "TRAVERSE", color: "text-blue-700" },
  { name: "TripZon", color: "text-indigo-600" },
  { name: "Borcelle", color: "text-blue-500" },
];

const TrustedCompanies = () => {
  return (
    <section className="py-20 bg-white">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="text-center mb-12"
      >
        <h3 className="text-gray-500 font-bold text-lg tracking-wide">
          Those Company You Can Easily Trust!
        </h3>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="w-full"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          speed={3000} // Adjust speed for smoothness
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // This enables the pause on hover
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="trusted-companies-swiper"
        >
          {partners.map((partner, idx) => (
            <SwiperSlide
              key={idx}
              className="!flex items-center justify-center"
            >
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">LOG</span>
                </div>
                <span className={`text-2xl font-black ${partner.color}`}>
                  {partner.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Custom CSS to ensure smooth continuous scroll with Swiper */}
      <style jsx global>{`
        .trusted-companies-swiper .swiper-wrapper {
          transition-timing-function: linear;
        }
      `}</style>
    </section>
  );
};

export default TrustedCompanies;
