"use client";

import { useState } from "react";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInDown, staggerContainer } from "../utils/animations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/">
              <img src="/images/logo-light.png" alt="Logo" className="w-full h-10" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-8 font-bold"
          >
            {[
              { href: "/", label: "Trang chủ" },
              { href: "/rut-tien", label: "Rút tiền" },
              { href: "/dao-han", label: "Đáo Hạn" },
              { href: "/kien-thuc", label: "Kiến thức" },
              { href: "#contact", label: "Liên hệ" },
            ].map((item, index) => (
              <motion.div key={index}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-[#5fc53f] transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Hotline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden md:flex items-center"
          >
            <motion.a
              href="tel:0354064124"
              whileHover={{ scale: 1.05, backgroundColor: "#4ab82c" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="text-white px-6 py-3 rounded-full font-semibold items-center gap-2 lg:flex hidden"
              style={{ backgroundColor: "#5fc53f" }}
            >
              <IoCall className="w-5 h-5" />
              035 406 4124
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="pb-4 space-y-2"
              >
                {[
                  { href: "/", label: "Trang chủ" },
                  { href: "/rut-tien", label: "Rút tiền" },
                  { href: "/dao-han", label: "Đáo Hạn" },
                  { href: "/kien-thuc", label: "Kiến thức" },
                  { href: "#contact", label: "Liên hệ" },
                ].map((item, index) => (
                  <motion.div key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-gray-700 font-500"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  href="tel:0354064124"
                  variants={menuItemVariants}
                  whileTap={{ scale: 0.95 }}
                  className="py-2 font-semibold flex items-center gap-2"
                  style={{ color: "#5fc53f" }}
                >
                  <IoCall className="w-5 h-5" />
                  035 406 4124
                </motion.a>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

