"use client";
import { FaCreditCard, FaCar } from "react-icons/fa";
import { IoPeople, IoSparkles, IoCall, IoPencil } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animations";
import { useInView } from "../hooks/useInView";
import { useCounter } from "../hooks/useCounter";

interface StatItem {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

function StatCard({ stat, isInView }: { stat: StatItem; isInView: boolean }) {
  const IconComponent = stat.icon;
  const targetNumber = parseInt(stat.number.replace('+', ''));
  const count = useCounter(targetNumber, 2000, isInView);

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ scale: 1.1, y: -5 }}
      className="text-center bg-white p-6 md:p-8 rounded-2xl shadow-lg"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-4"
      >
        <IconComponent className="w-10 h-10 md:w-12 md:h-12" style={{ color: '#5fc53f' }} />
      </motion.div>
      <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#5fc53f' }}>
        {count}+
      </div>
      <div className="text-base md:text-lg text-gray-700">{stat.label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const { ref, isInView } = useInView();
  const stats = [
    {
      number: "1000+",
      label: "Số thẻ đã triển khai",
      icon: FaCreditCard
    },
    {
      number: "100+",
      label: "Hỗ trợ tận nơi",
      icon: FaCar
    },
    {
      number: "500+",
      label: "Khách hàng tin dùng",
      icon: IoPeople
    },
    {
      number: "200+",
      label: "Khách hàng gửi thẻ",
      icon: IoSparkles
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 via-amber-100 to-orange-200 text-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
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
            ĐỐI TÁC – KHÁCH HÀNG
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            ĐỒNG HÀNH CÙNG CHÚNG TÔI
          </motion.h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isInView={isInView} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center bg-white p-6 md:p-10 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Chúng tôi đã hỗ trợ đáo rút cho +10.000 khách hàng
          </h3>
          <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-700">
            Hotline hỗ trợ tư vấn 24/7, Có chi nhánh tại Mỹ Đình, Hà Nội. 
            Phí dịch vụ cam kết tốt nhất thị trường. Có hỗ trợ tận nơi theo yêu cầu của bạn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:0869802574"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg flex items-center gap-2"
            >
              <IoCall className="w-6 h-6" />
              Hotline: 086 980 2574
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: '#4ab82c' }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg flex items-center gap-2"
              style={{ backgroundColor: '#5fc53f' }}
            >
              <IoPencil className="w-6 h-6" />
              Liên hệ ngay
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

