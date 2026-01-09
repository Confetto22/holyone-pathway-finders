"use client";

import React from "react";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animation-variants";
import Link from "next/link"; // Assuming we link to a booking page or contact

const ConsultationSection = () => {
  return (
    <section className="py-12 bg-blue-50/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-blue-100 relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 Rounded-bl-full -z-0 opacity-50" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <div className="bg-blue-100 p-2.5 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Book a Consultation
                </h2>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  15-Minute Consultation —{" "}
                  <span className="text-primary">$25</span>
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Ask questions, understand your best pathway, and avoid common
                  mistakes before applying.
                </p>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-green-800 font-medium">
                  If the consultation isn&apos;t useful, we&apos;ll guide you on
                  the next best step at no extra cost.
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0">
              <Link
                href="/contact" // Update this link to the actual booking page if different
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-200 w-full md:w-auto"
              >
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationSection;
