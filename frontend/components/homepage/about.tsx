"use client";

import Image from "next/image";
import {
  Shield,
  Users,
  Award,
  Calendar,
  Play,
  Backpack,
  Sparkles,
  ThumbsUp,
  PersonStanding,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";
import Link from "next/link";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Processing",
      bgColor: "bg-secondary/5",
      iconColor: "text-secondary",
    },
    {
      icon: Award, // Replacing Users with Award for a "certified" feel or keep Users for "Expert Team"
      title: "Eligibility Check",
      bgColor: "bg-primary/5",
      iconColor: "text-secondary",
    },
    {
      icon: Users,
      title: "Expert Consultation",
      bgColor: "bg-primary/5",
      iconColor: "text-secondary",
    },
    {
      icon: Calendar,
      title: "Timely Approvals",
      bgColor: "bg-secondary/5",
      iconColor: "text-secondary",
    },
  ];

  const statistics = [
    {
      value: "98",
      label: "Visa Approval Rate",
      icon: ThumbsUp,
      suffix: "%",
    },
    {
      value: "5",
      label: "Years Experience",
      icon: Backpack,
      suffix: "+",
    },
    {
      value: "50",
      label: "Countries Served",
      icon: Globe,
      suffix: "+",
    },
    {
      value: "10",
      label: "Expert Consultants",
      icon: PersonStanding,
      suffix: "+",
    },
  ];

  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {/* About Us Tag */}
            <div className="mb-6">
              <div className="relative inline-block">
                <svg
                  width="140"
                  height="50"
                  viewBox="0 0 140 50"
                  className="absolute inset-0 -translate-x-2 -translate-y-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 25 Q30 8, 60 25 T120 25 Q130 25, 130 25"
                    stroke="#bfd1ff"
                    strokeWidth="3"
                    fill="#bfd1ff"
                    fillOpacity="0.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 25 Q30 42, 60 25 T120 25 Q130 25, 130 25"
                    stroke="#bfd1ff"
                    strokeWidth="3"
                    fill="#bfd1ff"
                    fillOpacity="0.2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="relative px-6 py-2">
                  <span className="text-primary text-lg font-handwriting italic font-semibold">
                    About Us
                  </span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Professional Visa & Relocation Partner
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Securing a visa can be complex, but we make it simple. Our team of
              specialists provides expert guidance for study, work, and
              relocation pathways. From eligibility checks to final document
              submission, we ensure a professional, streamlined experience.
            </p>

            {/* Feature Boxes */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`${feature.bgColor} rounded-lg p-4 flex items-center gap-3`}
                  >
                    <div className={`${feature.iconColor}`}>
                      <IconComponent size={24} />
                    </div>
                    <span className="text-gray-800 font-medium text-sm">
                      {feature.title}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md w-full capitalize text-center"
              >
                More About us
              </Link>
              {/* <button className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full border-2 border-gray-300 group-hover:border-secondary flex items-center justify-center transition-colors">
                  <Play
                    size={20}
                    className="text-gray-700 group-hover:text-secondary ml-1 transition-colors"
                    fill="currentColor"
                  />
                </div>
                <span className="font-medium">How It Works</span>
              </button> */}
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative"
          >
            {/* Decorative Brushstroke Shapes */}
            <div className="absolute -top-8 -left-8 -z-10">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 100 Q50 50, 100 100 T180 100"
                  stroke="#bfd1ff"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.3"
                />
                <path
                  d="M20 100 Q50 150, 100 100 T180 100"
                  stroke="#bfd1ff"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              </svg>
            </div>
            <div className="absolute -bottom-8 -right-8 -z-10">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 100 Q50 50, 100 100 T180 100"
                  stroke="#bfd1ff"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.3"
                />
                <path
                  d="M20 100 Q50 150, 100 100 T180 100"
                  stroke="#bfd1ff"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              </svg>
            </div>

            {/* Airplane Icon */}
            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-4 right-4 opacity-20"
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 16V14L15 9V7C15 6.45 14.55 6 14 6H10C9.45 6 9 6.45 9 7V9L3 14V16L9 15V19L7 21V23L12 22L17 23V21L15 19V15L21 16Z"
                  stroke="#1a43d3e6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[500px] md:h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                  alt="Travelers exploring"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />

                {/* Experience Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white rounded-full p-8 md:p-10 shadow-xl flex flex-col items-center justify-center text-center w-32 h-32 md:w-40 md:h-40 border-4 border-white"
                >
                  <div className="text-4xl font-bold mb-1">05</div>
                  <div className="text-sm font-medium opacity-90">
                    Years of experience
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="flex items-center gap-1 relative border-r border-gray-200 last-of-type:border-r-0"
              >
                <span className="mb-4 text-primary">
                  <stat.icon size={26} />
                </span>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
