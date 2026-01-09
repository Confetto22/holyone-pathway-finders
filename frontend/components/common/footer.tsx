"use client";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  Smartphone,
  MapPin,
  ArrowUp,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";
import { FaWhatsapp } from "react-icons/fa";
import { digitalServices } from "@/data/services";

const Footer = () => {
  const contactInfo = [
    {
      icon: (
        <div className="bg-white rounded-full p-0.5">
          <div className="bg-primary rounded-full p-2">
            <FaWhatsapp className="w-7 h-7 text-white fill-current" />
          </div>
        </div>
      ), // WhatsApp proxy
      title: "WhatsApp",
      subtitle: "+1 548 325 8804",
    },
    {
      icon: (
        <div className="bg-white rounded-full p-0.5">
          <div className="bg-secondary rounded-full p-2">
            <Mail className="w-7 h-7 text-white" />
          </div>
        </div>
      ),
      title: "Mail Us",
      subtitle: "holyonepathwaypartners@gmail.com",
    },
    {
      icon: (
        <div className="bg-white rounded-full p-0.5">
          <div className="bg-secondary rounded-full p-2">
            <Phone className="w-7 h-7 text-white" />
          </div>
        </div>
      ),
      title: "Call Us",
      subtitle: "+1 548 325 8804",
    },
  ];

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" }, // "X" icon often represented by Twitter in libraries or custom SVG
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const destinations = [
    { label: "Canada", href: "#" },
    { label: "Europe", href: "#" },
    { label: "New Zealand", href: "#" },
    { label: "USA", href: "#" },
  ];

  const popularSearches = [
    { label: "Adventure", href: "#" },
    { label: "Hiking & Hiking", href: "#" },
    { label: "Holiday Packages", href: "#" },
    { label: "Flights And Hotels", href: "#" },
    { label: "Honeymoon Trip", href: "#" },
  ];

  const resources = [
    { label: "About Holyone", href: "#" },
    { label: "Health & Safety Measure", href: "#" },
    { label: "Visa Processing", href: "#" },
    { label: "Customize Tour", href: "#" },
    {
      label: "Privacy & Policy",
      href: "/privacy-policy",
    },
    { label: "Sitemap", href: "#" },
  ];

  return (
    <footer className="bg-[#020617] pb-12 text-white relative font-sans">
      {/* Top Contact Bar */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-4"
              >
                <div className="shrink-0">
                  {/* Render the icon directly if it's a component or node */}
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-16 pb-8 relative">
        {/* Subtle World Map Background Overlay could go here -> absolute inset-0 bg-map-pattern opacity-10 */}

        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 md:grid-cols-6 gap-12 lg:gap-8"
          >
            {/* Column 1: Brand & Contact */}
            <motion.div variants={fadeInUp} className="space-y-6 md:col-span-4">
              <div className="flex items-center gap-3">
                {/* Logo Icon Proxy */}
                <div className="relative">
                  <div className="text-primary">
                    <Globe className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary rounded-full w-4 h-4 border-2 border-[#020617]"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold leading-none tracking-tight">
                    Holyone
                  </h2>
                  <p className="text-xs text-gray-400 tracking-wider">
                    Pathway Partners
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2 text-sm">
                  Holyone Pathway Partners
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Holyone Pathway Partners provides visa guidance, document
                  support, and relocation advisory services based on publicly
                  available information. We are not a law firm and do not
                  provide legal representation.
                </p>
              </div>

              {/* Social Icons */}
              {/* <div className="flex gap-3">
                {socialIcons.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      className="w-8 h-8 rounded-full bg-[#1f1f1f] flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-colors"
                    >
                      <social.icon className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div> */}

              {/* Google Play Button */}
            </motion.div>

            {/* Column 4: Resources */}
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
              <menu className=" text-sm text-gray-400 flex-wrap  gap-2 flex">
                {digitalServices.slice(0, 5).map((item) => (
                  <Link
                    key={item.title}
                    href={`/services/${item.id}`}
                    className="hover:text-white  break-all transition-all"
                  >
                    {item.title},
                  </Link>
                ))}
              </menu>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll to Top Button (Fixed/Floating) */}
        {/* <div className="absolute bottom-8 right-8">
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors shadow-lg shadow-blue-900/20"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div> */}
      </div>
      <hr className="border-none bg-gray-800 h-[.1px] mb-5" />
      <p className="text-center">
        &copy; {new Date().getFullYear()} Holyone Pathway Partners. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
