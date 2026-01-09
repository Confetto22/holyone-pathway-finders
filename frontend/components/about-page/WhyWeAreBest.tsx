"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

const WhyWeAreBest = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-20">
          {/* Text Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="w-full xl:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Trusted Visa Consultants
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Welcome to Holyone Pathway Partners – Your Partner in Global
              Mobility!{" "}
              <span className="inline-block w-3 h-3 bg-blue-400 rounded-full ml-1 align-middle"></span>
            </h3>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Holyone Pathway Partners specializes in study visas, work
                permits, and permanent residency guidance. We provide
                personalized consultation to ensure your application meets all
                immigration requirements.
              </p>
              <p>
                We believe that borders shouldn't be barriers. With our expert
                guidance and attention to detail, we transform the complex
                process of relocation into a clear, manageable pathway to your
                future.
              </p>
            </div>

            <div className="pt-6">
              <div className="flex flex-col gap-2">
                {/* Signature simulation using a cursive-like SVG or font fallback if available. 
                    For now, using a stylish SVG path for the signature look */}
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  width="120"
                  height="60"
                  viewBox="0 0 150 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-800"
                >
                  <path
                    d="M10 50 C 20 40, 40 30, 30 50 S 10 70, 40 60 S 80 20, 70 40 S 50 70, 80 60 S 120 40, 110 50 S 90 70, 130 60"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </motion.svg>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    Robert Harringson
                  </h4>
                  <p className="text-gray-500 text-sm tracking-wide">
                    Founder at Holyone
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="w-full xl:w-1/2 relative min-h-[500px] flex items-center justify-center"
          >
            {/* Background blob/shape could be added here for more depth */}

            {/* Top Right - Travel Montage */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, zIndex: 40 }}
              className="absolute top-0 right-0 w-[60%] h-[55%] z-20 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80"
                alt="Travel adventures collage"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Middle Left - Skier */}
            <motion.div
              variants={fadeInLeft}
              whileHover={{ scale: 1.05, zIndex: 40 }}
              className="absolute top-[20%] left-0 w-[55%] h-[50%] z-10 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800"
                alt="Skiing adventure"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Bottom Right - Paddle Boarding */}
            <motion.div
              variants={fadeInRight}
              whileHover={{ scale: 1.05, zIndex: 40 }}
              className="absolute bottom-0 right-[10%] w-[50%] h-[40%] z-30 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1675789652806-667851270b20?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FuYWRhJTIwc2Nob29sfGVufDB8fDB8fHww"
                alt="Water sports"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreBest;
