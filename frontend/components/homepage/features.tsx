"use client";

import {
  FileText,
  Zap,
  Calendar,
  UserCheck,
  MessageCircle,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: any;
  iconColor: "green" | "gold";
};

const Features = () => {
  const features: Feature[] = [
    {
      id: "eligibility-check",
      title: "Visa Eligibility Check",
      description:
        "Comprehensive assessment of your profile to determine visa eligibility for your desired destination.",
      icon: UserCheck,
      iconColor: "green",
    },
    {
      id: "document-verification",
      title: "Document Verification",
      description:
        "Thorough review of all your documents to ensure they meet the specific requirements of the embassy.",
      icon: ClipboardCheck,
      iconColor: "gold",
    },
    {
      id: "application-assistance",
      title: "Application Assistance",
      description:
        "Step-by-step guidance through the entire visa application filling process to avoid errors.",
      icon: FileText,
      iconColor: "green",
    },
    {
      id: "interview-prep",
      title: "Interview Preparation",
      description:
        "Mock interviews and expert tips to help you face the consular interview with confidence.",
      icon: MessageCircle,
      iconColor: "gold",
    },
    {
      id: "fast-track",
      title: "Fast-Track Processing",
      description:
        "Expedited services for urgent travel needs to get your visa processed as quickly as possible.",
      icon: Zap,
      iconColor: "green",
    },
    {
      id: "appointment-scheduling",
      title: "Appointment Scheduling",
      description:
        "Hassle-free booking of visa appointments at your preferred time and location.",
      icon: Calendar,
      iconColor: "gold",
    },
  ];

  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-12"
        >
          {/* Who We Are Tag */}
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="relative inline-block">
              <svg
                width="160"
                height="50"
                viewBox="0 0 160 50"
                className="absolute inset-0 -translate-x-2 -translate-y-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 25 Q30 8, 60 25 T120 25 Q130 25 150 25"
                  stroke="#bfd1ff"
                  strokeWidth="3"
                  fill="#bfd1ff"
                  fillOpacity="0.2"
                  strokeLinecap="round"
                />
                <path
                  d="M10 25 Q30 42, 60 25 T120 25 Q130 25 150 25"
                  stroke="#bfd1ff"
                  strokeWidth="3"
                  fill="#bfd1ff"
                  fillOpacity="0.2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="relative px-6 py-2">
                <span className="text-primary text-lg font-handwriting italic font-semibold">
                  Our Services
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Why Choose Holyone
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            const iconColorClass =
              feature.iconColor === "green" ? "text-primary" : "text-primary";
            const hoverBgClass =
              feature.iconColor === "green"
                ? "hover:bg-primary/5"
                : "hover:bg-primary/5";

            return (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className={`bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-300 ${hoverBgClass} cursor-pointer group`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`${iconColorClass} transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-1`}
                  >
                    <IconComponent size={48} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
