"use client";
import React, { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  mainServices,
  microServices,
  digitalServices,
  ServiceCategory,
  MainServiceItem,
  MicroServiceItem,
  DigitalServiceItem,
} from "@/data/services";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

// --- Main Cards Components ---
const MainServiceCard = ({ item }: { item: MainServiceItem }) => (
  <Link href={`/services/${item.id}`} className="block h-full">
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer flex flex-col h-full group">
      <div className="w-16 h-16 rounded-2xl bg-gray-100 bg-primary/20 flex items-center justify-center mb-6 transition-colors">
        {React.cloneElement(
          item.icon as React.ReactElement<{ className?: string }>,
          {
            className: "w-8 h-8 text-gray-500 text-primary transition-colors",
          }
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed grow">
        {item.description}
      </p>
      {/* <ul className="space-y-3 mb-8">
        {item.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 text-sm text-gray-600 font-medium"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-primary transition-colors" />
            {feature}
          </li>
        ))}
      </ul> */}
      <div className="mt-auto font-bold flex items-center gap-2 text-primary transition-colors">
        View Details <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </Link>
);

const MicroServiceCard = ({ item }: { item: MicroServiceItem }) => (
  <Link href={`/services/${item.id}`} className="block">
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary transition-all cursor-pointer h-full group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary transition-colors">
          {React.cloneElement(
            item.icon as React.ReactElement<{ className?: string }>,
            {
              className:
                "w-6 h-6 text-primary group-hover:text-white transition-colors",
            }
          )}
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        {item.description}
      </p>
    </div>
  </Link>
);

const DigitalServiceCard = ({ item }: { item: DigitalServiceItem }) => (
  <Link href={`/services/${item.id}`} className="block">
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-primary px-2 transition-all cursor-pointer flex flex-col md:flex-row group h-full">
      <div className="md:w-1/3 relative h-48 md:h-auto shrink-0 overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={400}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
            PDF Guide
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{item.description}</p>

        <div className="bg-primary/5 border border-primary/10 rounded-lg p-3">
          <p className="text-xs text-primary font-bold flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            {item.benefit}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

const ServicesContainer = () => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("main");

  const tabs = [
    { id: "main", label: "Main Services" },
    { id: "micro", label: "Micro Services" },
    { id: "digital", label: "Digital Services" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50/50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header & Tabs */}
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
            Tailored Services For You
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg"
          >
            {activeTab === "micro" &&
              "Best for first-timers, students, and anyone who wants clarity before spending big."}
            {activeTab === "digital" &&
              "Created from real visa experience and updated for 2026 requirements."}
            {activeTab === "main" &&
              "We guide you through the right pathway, documentation, and preparation — step by step."}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-white p-1.5 md:rounded-full shadow-sm  border border-gray-200 relative max-w-2xl mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ServiceCategory)}
                className={`relative px-6 py-3 rounded-full text-sm font-bold cursor-pointer transition-colors z-10 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Full Width Grid Layout */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "main" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mainServices.map((item) => (
                    <MainServiceCard key={item.id} item={item} />
                  ))}
                </div>
              )}

              {activeTab === "micro" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {microServices.map((item) => (
                    <MicroServiceCard key={item.id} item={item} />
                  ))}
                </div>
              )}

              {activeTab === "digital" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {digitalServices.map((item) => (
                    <DigitalServiceCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesContainer;
