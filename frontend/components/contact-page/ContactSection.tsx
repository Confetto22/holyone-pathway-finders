"use client";

import React from "react";
import { Phone, Mail, MapPin, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href: string;
}

const contactDetails: ContactInfoProps[] = [
  {
    icon: <Phone className="w-6 h-6 text-white" />,
    title: "Business Number / WhatsApp",
    detail: "+1 548 325 8804",
    href: "tel:15483258804",
  },
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "Email Now",
    detail: "holyonepathwaypartners@gmail.com",
    href: "mailto:holyonepathwaypartners@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "Location",
    detail: "Canada (serving clients worldwide)",
    href: "#",
  },
];

const ContactInfoCard = ({ icon, title, detail, href }: ContactInfoProps) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ x: 10 }}
    className=" border border-gray-100 rounded-2xl  shadow-sm hover:shadow-md transition-shadow  "
  >
    <Link
      href={href}
      target="_blank"
      className=" flex items-start gap-4 py-5 rounded-2xl px-6"
    >
      <span className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
        {icon}
      </span>
      <div className="">
        <h4 className="text-gray-500 text-sm font-medium mb-1">{title}</h4>
        <p className="text-gray-900 font-bold text-wrap break-all">{detail}</p>
      </div>
    </Link>
  </motion.div>
);

const ContactForm = () => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Reach Us Anytime
      </h2>
      <form className="space-y-6 contact_form">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-bold text-gray-700"
          >
            Name*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Daniel Scoot"
            className="w-full px-4 py-3 rounded-lg border border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-800"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm font-bold text-gray-700"
            >
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-400 text-gray-800"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Us...."
              className="w-full px-4 py-3 rounded-lg border border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-400 text-gray-800"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-bold text-gray-700"
          >
            Write Your Message*
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="What's on your mind"
            className="w-full px-4 py-3 rounded-lg border border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-800 resize-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
        >
          Submit Now
        </motion.button>
      </form>
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Info Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {contactDetails.map((item, index) => (
              <ContactInfoCard key={index} {...item} />
            ))}
            <Link
              href={"https://wa.me/15483258804"}
              target="_blank"
              className="bg-[#41bb4e] text-white py-3 flex items-center gap-2 px-4 rounded-lg justify-center text-center hover:text-[#41bb4e] hover:bg-white hover:border hover:border-[#41bb4e] ease-in duration-200"
            >
              <FaWhatsapp className="size-9 " />
              chat on whatsapp
            </Link>
          </motion.div>

          {/* Form Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

      {/* Embedded Map */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="w-full h-[450px] bg-gray-200"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.328233267252!2d90.4232304153629!3d23.7918471925324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a2fde6d8ab%3A0x6bba32688ef7738f!2sGulshan%201%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1651817540243!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Map Location"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default ContactSection;
