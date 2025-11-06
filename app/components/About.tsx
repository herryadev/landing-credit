"use client";
import { FaBuilding, FaCar, FaMoneyBillWave } from "react-icons/fa";
import { IoCall, IoChatbubbles, IoTime } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useInView } from "../hooks/useInView";

export default function About() {
  const { ref, isInView } = useInView();
  const features = [
    {
      icon: FaBuilding,
      title: "Hệ thống tại Mỹ Đình",
      description: "Địa điểm thuận tiện, dễ dàng tiếp cận"
    },
    {
      icon: FaCar,
      title: "Hỗ trợ tận nơi theo yêu cầu",
      description: "Di chuyển nhanh chóng 15-20 phút"
    },
    {
      icon: FaMoneyBillWave,
      title: "Chi phí rẻ nhất chỉ từ 1.2%",
      description: "Cam kết giá tốt nhất thị trường"
    },
    {
      icon: IoTime,
      title: "Phục vụ 24/7 kể cả ngày lễ",
      description: "Hỗ trợ cả Thứ 7, Chủ Nhật & ngày lễ"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="font-semibold text-sm uppercase tracking-wide mb-3"
            style={{ color: '#5fc53f' }}
          >
            VỀ CHÚNG TÔI
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            NHỮNG ƯU ĐIỂM MANG ĐẾN CHO BẠN
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Uy tín là giá trị đề cao hàng đầu khiến khách hàng tin tưởng và luôn đồng hành 
            quay lại sử dụng các dịch vụ của chúng tôi.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mb-4"
                >
                  <IconComponent className="w-16 h-16" style={{ color: '#5fc53f' }} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center glass-blue-solid text-white p-6 md:p-10 rounded-2xl shadow-xl"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Liên hệ ngay để được tư vấn chi tiết
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:0354064124"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2"
            >
              <IoCall className="w-6 h-6" />
              035 406 4124
            </motion.a>
            <motion.a
              href="https://zalo.me/0354064124"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2"
              style={{ color: '#5fc53f' }}
            >
              <IoChatbubbles className="w-6 h-6" />
              Chat Zalo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

