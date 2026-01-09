"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const Faq = () => {
  const faqs: FAQItem[] = [
    {
      id: "services",
      question: "Are you immigration lawyers?",
      answer:
        "No. We provide visa guidance, documentation support, and advisory services based on publicly available information. We do not provide legal representation.",
    },
    {
      id: "customized",
      question: "Do you guarantee visa approval?",
      answer:
        "No. Visa decisions are made solely by immigration authorities. We focus on strong preparation and error-free applications.",
    },
    {
      id: "booking",
      question: "Can I start with a micro-service first?",
      answer:
        "Yes. Many clients begin with a low-cost service before upgrading.",
    },
    {
      id: "visa",
      question: "Do you work with refused cases?",
      answer: "Yes. We review refusals and advise on stronger next steps.",
    },
    {
      id: "insurance",
      question: "When does service start after payment?",
      answer:
        "Micro-services usually start same day. Packages begin within 24–48 hours.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
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
            General Questions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            We&apos;re committed to offering more than just document
            processing—we provide expert consultation and life-changing
            pathways.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className=""
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="services"
            className="w-full"
          >
            {faqs.map((faq) => (
              <motion.div key={faq.id} variants={fadeInUp} className="">
                <AccordionItem
                  value={faq.id}
                  className="border border-gray-200 rounded-lg mb-4 px-4 data-[state=open]:border-blue-400 data-[state=open]:bg-blue-50/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
