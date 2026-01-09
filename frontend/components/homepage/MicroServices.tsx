"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";
import { microServices } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const MicroServices = () => {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="container mx-auto max-w-7xl">
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
            Quick Services
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Specific solutions designed for your immediate needs.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {microServices.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-green-50 rounded-lg">{service.icon}</div>
                <div className="font-bold text-lg text-primary">
                  ${service.price}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 grow">
                {service.description}
              </p>

              <Link
                href={`/services/${service.id}`}
                className="w-full py-2.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-semibold text-sm flex items-center justify-center gap-2"
              >
                Pay Now
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MicroServices;
