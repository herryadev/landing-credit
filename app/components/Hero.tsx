"use client";
import { IoCall, IoChatbubbles, IoCheckmark } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 text-gray-900 pt-30 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-white/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-8 shadow-lg text-center max-w-full"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1.1, 1.1, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <FaGift className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </motion.div>
            <span className="leading-tight">
              Hỗ trợ thẻ khi khách hàng dùng hàng tháng lên tới 20% trong dịp
              cuối năm 2025
            </span>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-4 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mt-0 mt-6 leading-tight text-gray-800"
            >
              BẠN ĐANG TÌM KIẾM
            </motion.h1>
            <motion.h2
              variants={fadeInUp}
              className="text-xl md:text-3xl lg:text-4xl font-bold md:mb-0 mb-8 text-orange-600"
            >
              DỊCH VỤ ĐÁO RÚT THẺ TÍN DỤNG
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl mb-10 leading-relaxed text-gray-700"
            >
              Bạn đang tìm kiếm đơn vị{" "}
              <span className="font-bold text-gray-900">
                uy tín, chuyên nghiệp
              </span>
              . Với kinh nghiệm lâu năm trong lĩnh vực{" "}
              <span className="font-bold text-gray-900">Đáo Rút tín dụng</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row items-center md:items-start gap-4"
            >
              <motion.a
                href="tel:0354064124"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <IoCall className="w-6 h-6" />
                035 406 4124
              </motion.a>
              <motion.a
                href="https://zalo.me/0354064124"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "#4ab82c" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full text-lg font-bold shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
                style={{ backgroundColor: "#5fc53f", color: "white" }}
              >
                <IoChatbubbles className="w-6 h-6" />
                <span className="hidden md:block">Chat</span>
                <span className="block md:hidden">Zalo</span>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-700 font-bold"
            >
              {["Uy tín hàng đầu", "Chi phí từ 1.8%", "Hỗ trợ 24/7"].map(
                (text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <IoCheckmark
                      className="w-6 h-6"
                      style={{ color: "#5fc53f" }}
                    />
                    <span>{text}</span>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-first md:order-last"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full aspect-square md:aspect-auto"
            >
              <Image
                src="/images/section-1.png"
                alt="Dịch vụ đáo rút thẻ tín dụng uy tín tại Hà Nội - Chi phí thấp, hỗ trợ 24/7"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2Y5ZmFmYiIvPjwvc3ZnPg=="
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
            fill="#ffffff"
            opacity="0.8"
          />
        </svg>
      </div>
    </section>
  );
}
