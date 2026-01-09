"use client";

import Image from "next/image";
import { Star, Play } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  title: string;
  review: string;
  hasVideo?: boolean;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "James Bonde",
      role: "Visa Client",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      rating: 5,
      title: "Average Experience",
      review:
        "Holyone Pathway Partners helped me understand my visa options clearly and avoid costly mistakes.",
    },
    {
      id: "2",
      name: "James Bonde",
      role: "Visa Client",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      rating: 5,
      title: "Average Experience",
      review:
        "Professional, honest, and very responsive. I felt guided, not pressured.",
    },
    {
      id: "3",
      name: "James Bonde",
      role: "Visa Client",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      rating: 5,
      title: "Average Experience",
      review:
        "Their documentation support and consultation saved me time and stress.",
    },
  ];

  return (
    <section className="bg-[#f0f8ff] py-16 px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.svg
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 10L60 40L90 50L60 60L50 90L40 60L10 50L40 40L50 10Z"
            stroke="#1a43d3e6"
            strokeWidth="2"
          />
        </motion.svg>
        <motion.svg
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20"
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 40L30 20L50 30L70 10L90 30L110 20L110 50L90 60L70 50L50 70L30 50L10 60L10 40Z"
            stroke="#1a43d3e6"
            strokeWidth="2"
          />
        </motion.svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Hear It from Our Clients
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-700 text-lg max-w-3xl mx-auto"
          >
            We go beyond just applications—we open doors to new beginnings!
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* User Profile */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-secondary fill-secondary"
                  />
                ))}
              </div>

              {/* Review Content */}
              {/* <h5 className="font-bold text-gray-900 mb-2">
                {testimonial.title}
              </h5> */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.review}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Rating Section */}
        {/* <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
           <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" fill="#1a43d3" />
                  <path
                    d="M12 2L14.5 8.5L21 9L15.5 13L17 20L12 16.5L7 20L8.5 13L3 9L9.5 8.5L12 2Z"
                    fill="white"
                  />
                </svg>
                <div>
                  <div className="font-bold text-gray-900">Tripadvisor</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-primary" />
                ))}
              </div>
            </div>

\            <div className="hidden md:block w-px h-16 bg-gray-300" />

\            <div className="text-6xl font-bold text-gray-900">4.5</div>

            <div className="hidden md:block w-px h-16 bg-gray-300" />

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"
                    fill="#1a43d3"
                  />
                </svg>
                <div>
                  <div className="font-bold text-primary">Trustpilot</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-secondary fill-secondary"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
