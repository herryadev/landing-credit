"use client";

import { IoCall, IoMail, IoLocation, IoArrowForward, IoChatbubbles, IoArrowUp } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useInView } from "../hooks/useInView";

export default function Footer() {
  const { ref, isInView } = useInView();
  const branches = [
    "Mỹ Đình, Nam Từ Liêm, Hà Nội",
    "Số 89/150 P. Tân Khai, Hai Bà Trưng, Hà Nội",
    "Số 12/164 P. Hồng Mai, Hai Bà Trưng, Hà Nội",
    "Số 52/233 Đ. Chiến Thắng, Thanh Trì, Hà Nội",
    "Số 99 Yên Lãng, Thịnh Quang, Đống Đa, Hà Nội"
  ];

  const quickLinks = [
    { name: "Về chúng tôi", href: "#about" },
    { name: "Rút tiền", href: "#services" },
    { name: "Đáo hạn", href: "#services" },
    { name: "Quy trình", href: "#process" },
    { name: "Ưu điểm", href: "#about" },
    { name: "Liên hệ", href: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#5fc53f' }}>
              BẢO MẬT – UY TÍN
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dịch vụ đáo rút thẻ tín dụng uy tín, chuyên nghiệp. 
              Cam kết bảo mật thông tin tuyệt đối. 
              Phí dịch vụ cạnh tranh nhất thị trường.
            </p>
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <IoCall className="w-5 h-5 mt-1" style={{ color: '#5fc53f' }} />
                <div>
                  <p className="font-semibold">Hotline</p>
                  <a href="tel:0869802574" className="text-gray-300 hover:text-[#5fc53f] transition">
                    086 980 2574
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <IoMail className="w-5 h-5 mt-1" style={{ color: '#5fc53f' }} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:contact@daorutthedaotindung.com" className="text-gray-300 hover:text-[#5fc53f] transition">
                    contact@daorutthedaotindung.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <IoLocation className="w-5 h-5 mt-1" style={{ color: '#5fc53f' }} />
                <div>
                  <p className="font-semibold">Địa chỉ chính</p>
                  <p className="text-gray-300">Mỹ Đình, Hà Nội</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4">LIÊN KẾT NHANH</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#5fc53f] transition flex items-center gap-2"
                  >
                    <IoArrowForward className="w-4 h-4" style={{ color: '#5fc53f' }} />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Branches */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4">CHI NHÁNH HỖ TRỢ HÀ NỘI</h3>
            <ul className="space-y-3">
              {branches.map((branch, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2"
                >
                  <IoLocation className="w-4 h-4 mt-1" style={{ color: '#5fc53f' }} />
                  <span className="text-gray-300 text-sm">{branch}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
          className="glass-blue-solid p-8 rounded-2xl mb-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            Hotline hỗ trợ 24/7
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:0869802574"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2"
            >
              <IoCall className="w-5 h-5" />
              086 980 2574
            </motion.a>
            <motion.a
              href="https://zalo.me/0869802574"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white px-8 py-3 rounded-full font-bold flex items-center gap-2"
              style={{ color: '#5fc53f' }}
            >
              <IoChatbubbles className="w-5 h-5" />
              Chat Zalo
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            Copyright 2025 © <span className="font-semibold" style={{ color: '#5fc53f' }}>Dịch Vụ Đáo Rút Thẻ Tín Dụng</span> | 
            Hotline: <a href="tel:0869802574" className="hover:underline font-bold" style={{ color: '#5fc53f' }}>086 980 2574</a>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Thiết kế & Phát triển bởi <span className="text-gray-400">Lynx Solutions</span>
          </p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <motion.a
          href="tel:0869802574"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="bg-orange-500 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
          title="Gọi ngay"
        >
          <IoCall className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://zalo.me/0869802574"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, backgroundColor: '#4ab82c' }}
          whileTap={{ scale: 0.9 }}
          className="text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
          style={{ backgroundColor: '#5fc53f' }}
          title="Chat Zalo"
        >
          <IoChatbubbles className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white shadow-2xl text-black w-14 h-14 rounded-full flex items-center justify-center"
          title="Lên đầu trang"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <IoArrowUp className="w-6 h-6" />
        </motion.a>
      </div>
    </footer>
  );
}

