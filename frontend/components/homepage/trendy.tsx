"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";
import Link from "next/link";
import { digitalServices } from "@/data/services";
import { ArrowRight } from "lucide-react";

// Get unique regions
const getRegions = (services: typeof digitalServices) => {
  const regions = new Set(services.map((service) => service.region || "Other"));
  return Array.from(regions);
};

const regionFlags: Record<string, string> = {
  Canada: "🇨🇦",
  Europe: "🇪🇺", // Using EU flag for broader Europe representation
  "New Zealand": "🇳🇿",
  Conferences: "🎟️",
  "Relocation / Students": "🎓",
  Other: "🌍",
};

const DigitalProducts = () => {
  const regions = getRegions(digitalServices);
  // Default to the first region if available
  const [activeTab, setActiveTab] = useState(regions[0] || "Canada");

  // Filter services based on active tab
  const filtered = digitalServices.filter(
    (service) => (service.region || "Other") === activeTab
  );

  // Limit Europe to 3 products
  const displayedServices =
    activeTab === "Europe" ? filtered.slice(0, 3) : filtered;

  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="head flex flex-col items-center mb-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4"
          >
            Essential Guides & Resources
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-center max-w-2xl"
          >
            Expertly crafted resources to help you navigate your journey with
            confidence.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveTab(region)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border flex items-center gap-2 ${
                activeTab === region
                  ? "bg-secondary text-white border-secondary shadow-lg scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-secondary hover:text-secondary"
              }`}
            >
              <span className="text-base">{regionFlags[region] || "🌍"}</span>
              {region}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {displayedServices.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl max-w-[400px] md:max-w-full mx-auto overflow-hidden transition-shadow border border-gray-200 flex flex-col group"
              >
                <Link
                  href={`/services/${product.id}`}
                  className="flex h-full flex-col"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-sm font-bold text-primary shadow-sm">
                      ${product.price}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-secondary bg-blue-50 px-2 py-0.5 rounded-full">
                        {product.region}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {product.title}
                    </h4>
                    <p className="text-xs text-gray-500 mb-3 grow">
                      {product.description}
                    </p>
                    <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-sm font-medium text-secondary">
                      <span>Get Instant Access</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md inline-flex items-center gap-2"
          >
            View Full Catalog
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalProducts;
