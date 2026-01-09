"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";
import { mainServices } from "@/data/services";
import { ExternalLink, Check } from "lucide-react";
import Link from "next/link";

const Packages = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
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
            Visa Support Packages
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Choose the level of support that fits your needs.
          </motion.p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 max-w-[400px] md:max-w-full mx-auto md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {mainServices.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeInUp}
              className={`relative bg-white rounded-xl border flex flex-col last-of-type:md:col-span-2 last-of-type:lg:col-span-1 last-of-type:md:place-self-center  ${
                pkg.popular
                  ? "border-primary shadow-lg ring-1 ring-primary"
                  : "border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="bg-red-600 absolute -top-4 left-0 right-0 mx-auto w-max px-4 text-xs font-semibold text-white text-center rounded-full py-2 uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="py-8 px-4 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.title}
                </h3>
                <p className="text-gray-500 mb-6 text-sm">{pkg.description}</p>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary">
                    {pkg.priceRange || `$${pkg.price}`}
                  </div>
                  {pkg.oldPrice && (
                    <div className="text-sm text-gray-400 line-through">
                      ${pkg.oldPrice}
                    </div>
                  )}
                </div>

                <div className="grow">
                  <p className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wider">
                    Includes:
                  </p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600 text-sm"
                      >
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/services/${pkg.id}`}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {pkg.ctaLabel}
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
