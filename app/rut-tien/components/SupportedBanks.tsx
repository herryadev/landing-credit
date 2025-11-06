"use client";
import { motion } from "framer-motion";
import { FaUniversity, FaCheckCircle, FaCreditCard } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import { useInView } from "../../hooks/useInView";
import { fadeInUp, staggerContainer } from "../../utils/animations";

export default function SupportedBanks() {
  const { ref, isInView } = useInView();

  const banks = [
    "Vietcombank",
    "Techcombank", 
    "VPBank",
    "BIDV",
    "Sacombank",
    "Vietinbank",
    "ACB",
    "TPBank",
    "MB Bank",
    "VIB",
    "HDBank",
    "SHB",
    "MSB",
    "OCB",
    "VietCapital Bank",
    "ABBank",
    "SeABank",
    "Nam A Bank",
    "HSBC",
    "Shinhan Bank",
    "Public Bank"
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="font-semibold text-sm uppercase tracking-wide mb-3"
            style={{ color: "#5fc53f" }}
          >
            ĐỐI TÁC NGÂN HÀNG
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Hỗ Trợ Tất Cả Các Ngân Hàng
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Chúng tôi chuyên cung cấp dịch vụ rút tiền mặt từ thẻ tín dụng của
            tất cả các ngân hàng tại Việt Nam
          </motion.p>
        </motion.div>

        {/* Banks grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
        >
          {banks.map((bank, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <FaCheckCircle
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "#5fc53f" }}
              />
              <span className="text-gray-800 font-medium">{bank}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Info cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <motion.div
            variants={fadeInUp}
            className="text-white p-8 rounded-2xl text-center bg-gradient-to-br from-green-600 to-green-700"
          >
            <FaUniversity className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">24+</h3>
            <p className="text-green-50">Ngân hàng hỗ trợ</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl text-center"
          >
            <FaCreditCard className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">100%</h3>
            <p className="text-orange-100">Hạn mức có thể rút</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl text-center"
          >
            <IoFlash className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">15-20</h3>
            <p className="text-green-50">Phút hoàn tất giao dịch</p>
          </motion.div>
        </motion.div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center bg-green-50 border-l-4 p-6 rounded-lg"
          style={{ borderColor: "#5fc53f" }}
        >
          <p className="text-gray-700">
            <strong style={{ color: "#4a9b2e" }}>Lưu ý:</strong> Nếu ngân hàng
            của bạn không có trong danh sách, vui lòng liên hệ hotline{" "}
            <a
              href="tel:0354064124"
              className="font-bold hover:underline"
              style={{ color: "#5fc53f" }}
            >
              035 406 4124
            </a>{" "}
            để được tư vấn cụ thể
          </p>
        </motion.div>
      </div>
    </section>
  );
}

