"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import PageHead from "@/components/common/page-head";
import { getServiceById } from "@/data/services";
import { PriceCard } from "@/components/services-page/ServiceSidebar";
import { ServiceInfoGrid } from "@/components/services-page/ServiceInfoGrid";
import LocationCarousel from "@/components/services-page/LocationCarousel";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

// Define PageProps correctly for Next.js 13+ App Router
interface PageProps {
  params: Promise<{ id: string }>;
}

const ServiceDetailPage = ({ params }: PageProps) => {
  // Use React.use() to unwrap the params promise in a Client Component
  const resolvedParams = use(params);
  const serviceId = resolvedParams.id;
  const service = getServiceById(serviceId);

  if (!service) {
    notFound();
  }

  const headerImage =
    service.images?.[0] ||
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200";

  return (
    <section className="">
      <PageHead
        prevPage="Services"
        prevLink="/services"
        bgImg={headerImage}
        currPage={service.title}
      />

      <div className="py-20 md:py-28 bg-white min-h-screen">
        <div className=" mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex flex-col lg:flex-row gap-12 items-start"
          >
            {/* Left Content */}
            <motion.div variants={fadeInUp} className="w-full lg:w-2/3">
              <div className="mb-12">
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-bold text-gray-900 mb-6"
                >
                  About This Service
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-gray-600 leading-relaxed text-lg mb-6"
                >
                  {service.longDescription || service.description}
                </motion.p>
                {service.richContent?.intro ? (
                  <motion.p
                    variants={fadeInUp}
                    className="text-gray-600 leading-relaxed"
                  >
                    {service.richContent.intro}
                  </motion.p>
                ) : (
                  <motion.p
                    variants={fadeInUp}
                    className="text-gray-600 leading-relaxed"
                  >
                    We provide professional visa and immigration services
                    tailored to your specific needs. Our experienced team will
                    guide you through every step of the process, ensuring you
                    have the best chance of success.
                  </motion.p>
                )}

                {service.richContent?.whyChooseThis && (
                  <motion.div variants={fadeInUp} className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Why Choose This Service?
                    </h3>
                    <ul className="space-y-3">
                      {service.richContent.whyChooseThis.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-gray-600 font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              <ServiceInfoGrid specs={service.specs} />

              <LocationCarousel images={service.images} />
            </motion.div>

            {/* Right Sidebar */}
            <motion.div
              variants={fadeInUp}
              className="w-full lg:w-1/3 md:sticky top-8"
            >
              <PriceCard service={service} serviceId={serviceId} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
