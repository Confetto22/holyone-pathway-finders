"use client";

import React from "react";
import { Award, Percent, Wallet, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

const features = [
  {
    icon: <Award className="w-8 h-8 text-blue-900" />,
    title: "Local Guidance",
    description: "Travel agencies have experienced professionals guidance.",
    bgColor: "bg-blue-200",
  },
  {
    icon: <Percent className="w-8 h-8 text-blue-900" />,
    title: "Deals & Discounts",
    description:
      "Agencies have special discounts on flights, hotels, & packages.",
    bgColor: "bg-blue-300",
  },
  {
    icon: <Wallet className="w-8 h-8 text-blue-900" />,
    title: "Saves Money",
    description:
      "Avoids hidden fees & tourist traps, Multi-destination & budget-friendly options.",
    bgColor: "bg-blue-200",
  },
];

const BestService = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="bg-blue-50/50 rounded-[3rem] p-8 md:p-16 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          >
            We’re Providing Best Service Ever!
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="flex flex-col items-start text-left md:items-center md:text-left lg:flex-row lg:items-start lg:text-left gap-4"
              >
                <div
                  className={`flex-shrink-0 w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center p-3`}
                >
                  <div className="w-full h-full border-2 border-black rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#1A85FF] hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg shadow-lg shadow-blue-200"
              >
                Flat 30% Discounts All Packages
                <span className="font-bold">Check Offer</span>
                <ArrowUpRight className="w-5 h-5 ml-1" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BestService;
