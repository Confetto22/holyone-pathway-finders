"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInDown } from "@/lib/animation-variants";
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./mobile-menu";
import PaymentDrawer from "./payment-drawer";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      ref: "Home",
      refLink: "/",
    },
    {
      ref: "About",
      refLink: "/about",
    },
    {
      ref: "Services",
      refLink: "/services",
    },
    {
      ref: "Contact",
      refLink: "/contact",
    },
  ];

  const pathname = usePathname();
  return (
    <>
      <motion.header
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        className={` header py-2 top-0 left-0 w-full right-0 z-50  ${
          pathname.includes("/checkout") ? "bg-primary/60" : "bg-transparent "
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl px-6 xl:px-1 py-3 mx-auto">
          {/* Logo */}
          <Link href={"/"} className="flex items-center gap-2">
            <h3 className="text-black text-xl font-semibold"> H.P.F</h3>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.ref}
                href={navLink.refLink}
                className={`hover:text-secondary transition-colors capitalize ${
                  pathname === navLink.refLink
                    ? "text-secondary"
                    : "text-black/80"
                }`}
              >
                {navLink.ref}
              </Link>
            ))}
          </nav>

          {/* Desktop User Actions */}
          <div className="hidden md:flex md:flex-row-reverse items-center gap-4">
            <button className="hidden  md:flex items-center justify-center rounded-full  lg:hidden hover:opacity-70">
              <PaymentDrawer />
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
              <Link
                href="/contact"
                className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary/90 transition-colors font-medium"
              >
                Book Consultation
              </Link>
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex gap-3 items-center">
            <PaymentDrawer />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-primary/70 p-1 cursor-pointer hover:opacity-70"
              aria-label="Open Menu"
            >
              <Menu className="size-7" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            navLinks={navLinks}
            closeMenu={() => setIsMobileMenuOpen(false)}
            pathname={pathname}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
