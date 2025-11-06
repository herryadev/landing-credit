"use client";
import { motion } from "framer-motion";
import { IoCall, IoChatbubbles } from "react-icons/io5";
import { FaCreditCard, FaCheckCircle } from "react-icons/fa";

export default function RutTienHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 text-gray-900" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
          >
            <FaCreditCard className="w-5 h-5 " />
            <span className=" font-semibold">Dịch Vụ Uy Tín #1 Tại Hà Nội</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-6 leading-tight"
          >
            Rút Tiền Thẻ Tín Dụng <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Tại Hà Nội
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-900 mb-8 max-w-3xl mx-auto"
          >
            Dịch vụ rút tiền mặt từ thẻ tín dụng nhanh chóng, an toàn, 
            chi phí thấp chỉ từ <span className="font-bold text-orange-400">1.2%</span>
          </motion.p>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
          >
            {[
              "Hỗ trợ 24/7",
              "Phục vụ tận nơi",
              "Rút 100% hạn mức",
              "Bảo mật tuyệt đối"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-orange-500/10 text-gray-900 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaCheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-900 font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="tel:0354064124"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <IoCall className="w-6 h-6" />
              Gọi ngay: 035 406 4124
            </motion.a>
            <motion.a
              href="https://zalo.me/0354064124"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3 shadow-xl hover:shadow-2xl transition-shadow"
              style={{ color: '#5fc53f' }}
            >
              <IoChatbubbles className="w-6 h-6" />
              Chat Zalo
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-green-600 text-sm mb-4">Hỗ trợ tất cả các ngân hàng</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-900 text-sm">
              <span>Vietcombank</span>
              <span>•</span>
              <span>Techcombank</span>
              <span>•</span>
              <span>VPBank</span>
              <span>•</span>
              <span>BIDV</span>
              <span>•</span>
              <span>ACB</span>
              <span>•</span>
              <span>Và nhiều hơn nữa...</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

