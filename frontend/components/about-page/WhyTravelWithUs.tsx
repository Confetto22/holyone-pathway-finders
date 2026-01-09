"use client";

import React from "react";
import { Luggage, Tag, Headset, Medal } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

const features = [
  {
    icon: <Luggage className="w-8 h-8 text-blue-600" />,
    title: "Transparent, realistic guidance (no fake guarantees)",
    bgColor: "bg-blue-50",
  },
  {
    icon: <Tag className="w-8 h-8 text-blue-600" />,
    title: "Fast turnaround on micro-services",
    bgColor: "bg-blue-100",
  },
  {
    icon: <Headset className="w-8 h-8 text-blue-600" />,
    title: "Affordable entry options",
    bgColor: "bg-blue-50",
  },
  {
    icon: <Medal className="w-8 h-8 text-blue-600" />,
    title: "Real relocation experience",
    bgColor: "bg-blue-100",
  },
  {
    icon: <Medal className="w-8 h-8 text-blue-600" />,
    title: "Clear communication & professionalism",
    bgColor: "bg-blue-100",
  },
  {
    icon: <Medal className="w-8 h-8 text-blue-600" />,
    title: "Global client support",
    bgColor: "bg-blue-100",
  },
];

const WhyTravelWithUs = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg">
            We specialize in providing expert visa guidance and clear relocation
            pathways for students, workers, and families.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className={`${feature.bgColor} rounded-[2rem] p-8 min-h-[250px] flex flex-col justify-center items-start transition-all duration-300 shadow-sm hover:shadow-xl`}
            >
              <div className="mb-6">
                {/* Icon wrapper/decoration could go here */}
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTravelWithUs;
