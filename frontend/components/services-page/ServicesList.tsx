"use client";

import React from "react";
import { Clock, MapPin, Plane, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

interface ServiceItem {
  id: number;
  image: string;
  duration: string;
  location: string;
  title: string;
  route: string[];
  price: number;
  oldPrice: number;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&auto=format&fit=crop&q=60",
    duration: "1 WEEK",
    location: "EGYPT",
    title: "Discover Serenity, Exploration, And Enlightenment.",
    route: ["SAINT MARTIN", "KHAGRACHORI", "COX'S BAZAR", "BANDAR BAN"],
    price: 340,
    oldPrice: 450,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&auto=format&fit=crop&q=60",
    duration: "3 DAYS / 4 NIGHT",
    location: "INDONESIA",
    title: "Embracing City Lights, Landm, And Iconic Culture.",
    route: ["BANDAR BAN", "COX'S BAZAR", "SAINT MARTIN", "SEA BEACH"],
    price: 240,
    oldPrice: 380,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&auto=format&fit=crop&q=60",
    duration: "10 DAYS / 11 NIGHT",
    location: "NEW YORK",
    title: "Immersive Cultural Expirees, Local Cuisine.",
    route: ["SAJEK VALLY", "SEA BEACH", "BANDAR BAN", "COX'S BAZAR"],
    price: 500,
    oldPrice: 580,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=60",
    duration: "5 DAYS / 6 NIGHT",
    location: "PARIS",
    title: "Experience The City of Lights and Love.",
    route: ["EIFFEL TOWER", "LOUVRE", "MONTMARTRE", "SEINE"],
    price: 420,
    oldPrice: 550,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop&q=60",
    duration: "2 WEEKS",
    location: "VENICE",
    title: "Romantic Getaway in the Floating City.",
    route: ["GRAND CANAL", "RIALTO BRIDGE", "ST. MARK'S", "BURANO"],
    price: 650,
    oldPrice: 800,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=60",
    duration: "4 DAYS / 3 NIGHT",
    location: "TOKYO",
    title: "Modern Marvels Meets Traditional Charm.",
    route: ["SHINJUKU", "SHIBUYA", "ASAKUSA", "AKIHABARA"],
    price: 550,
    oldPrice: 700,
  },
];

const ServiceCard = ({ item }: { item: ServiceItem }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-black text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider">
            {item.duration}
          </span>
          <span className="bg-white text-gray-800 text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider flex items-center gap-1 w-fit">
            <MapPin className="w-3 h-3 text-primary" />
            {item.location}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors">
          {item.title}
        </h3>

        {/* Route */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 uppercase font-medium mb-6">
          {item.route.map((stop, index) => (
            <React.Fragment key={index}>
              <span>{stop}</span>
              {index < item.route.length - 1 && (
                <ArrowRight className="w-3 h-3 text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-gray-100 flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500 font-medium mb-0.5">
              Starting From:
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">
                ${item.price}
              </span>
              <span className="text-sm text-gray-400 line-through font-medium">
                ${item.oldPrice}
              </span>
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">
              Taxes incl/pers
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2.5 px-5 rounded-lg transition-colors flex items-center gap-2"
          >
            Book A Trip
            <Plane className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesList = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
