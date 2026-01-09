"use client";

import React from "react";
import {
  Hotel,
  Utensils,
  TrainFront,
  Users,
  Languages,
  Dog,
  CalendarClock,
  Snowflake,
  Map,
  FileText,
} from "lucide-react";
import { ServiceSpecs } from "@/data/services";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

export const ServiceInfoGrid = ({ specs }: { specs?: ServiceSpecs }) => {
  if (!specs) return null;

  /* 
     Dynamic items mapping based on new Visa/Immigration specs. 
     We check if the spec exists before adding it to the list.
  */
  const allItems = [
    {
      label: "Category",
      value: specs.category,
      icon: Map,
    },
    {
      label: "Processing Time",
      value: specs.processingTime,
      icon: CalendarClock,
    },
    {
      label: "Validity",
      value: specs.validity,
      icon: CalendarClock,
    },
    {
      label: "Doc. Support",
      value: specs.docSupport,
      icon: FileText, // Imported below or reuse existing if suitable
    },
    {
      label: "Consultation",
      value: specs.consultation,
      icon: Users,
    },
    {
      label: "Language",
      value: specs.language,
      icon: Languages,
    },
    {
      label: "Group Size",
      value: specs.groupSize,
      icon: Users,
    },
    // Keep legacy items check just in case, or remove if cleaned up
    {
      label: "Accommodation",
      value: specs.accommodation,
      icon: Hotel,
    },
    {
      label: "Meals",
      value: specs.meals,
      icon: Utensils,
    },
    {
      label: "Transportation",
      value: specs.transportation,
      icon: TrainFront,
    },
    {
      label: "Season",
      value: specs.season,
      icon: Snowflake,
    },
  ];

  // Filter out undefined values so we don't show empty boxes or default text
  const items = allItems.filter((item) => item.value);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className="bg-transparent rounded-3xl py-8 mb-12"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-gray-400">
              <item.icon className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-gray-500 text-xs font-medium mb-1">
                {item.label}
              </p>
              <p className="text-gray-900 font-bold text-sm">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
