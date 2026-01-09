"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  navLinks: { ref: string; refLink: string }[];
  closeMenu: () => void;
  pathname: string;
}

const menuVariants: Variants = {
  hidden: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linkVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

const MobileMenu = ({ navLinks, closeMenu, pathname }: MobileMenuProps) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      <button
        onClick={closeMenu}
        className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800"
      >
        <X className="w-6 h-6" />
      </button>

      <nav className="flex flex-col items-center gap-8 w-full">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.ref}
            custom={i}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className="w-full text-center"
          >
            <Link
              href={link.refLink}
              onClick={closeMenu}
              className={`text-3xl sm:text-4xl font-bold capitalize tracking-tight transition-colors ${
                pathname === link.refLink
                  ? "text-secondary"
                  : "text-gray-900 hover:text-secondary/70"
              }`}
            >
              {link.ref}
            </Link>
          </motion.div>
        ))}

        <motion.div
          custom={navLinks.length}
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <Link
            href="/contact"
            onClick={closeMenu}
            className="inline-block bg-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary/90 transition-transform active:scale-95 shadow-lg shadow-blue-200"
          >
            Book A Trip
          </Link>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
