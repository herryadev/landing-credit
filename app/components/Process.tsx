"use client";
import { IoCall, IoPencil, IoChatbubbles } from "react-icons/io5";
import { FaCar, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useInView } from "../hooks/useInView";

export default function Process() {
  const { ref, isInView } = useInView();
  const steps = [
    {
      number: "1",
      title: "Liên hệ tư vấn",
      description: "Gọi điện hoặc nhắn tin Zalo để được tư vấn chi tiết về dịch vụ",
      icon: IoCall
    },
    {
      number: "2",
      title: "Cung cấp thông tin",
      description: "Cung cấp thông tin thẻ và số tiền cần đáo/rút",
      icon: IoPencil
    },
    {
      number: "3",
      title: "Xác nhận & di chuyển",
      description: "Xác nhận thông tin và nhân viên di chuyển đến địa điểm (15-20 phút)",
      icon: FaCar
    },
    {
      number: "4",
      title: "Thực hiện giao dịch",
      description: "Tiến hành đáo/rút thẻ và nhận tiền mặt ngay",
      icon: FaMoneyBillWave
    }
  ];

  return (
    <section id="process" className="py-20 bg-white relative overflow-hidden" ref={ref}>
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
            QUY TRÌNH LÀM VIỆC
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            QUY TRÌNH ĐÁO RÚT THẺ ĐơN GIẢN
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Chỉ với 4 bước đơn giản, bạn có thể hoàn tất giao dịch nhanh chóng và an toàn
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-gradient-to-br from-orange-50 to-white p-8 px-6 min-h-[300px] rounded-2xl shadow-lg text-center border-2 border-orange-200"
                  >
                    {/* Step Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                      className="absolute -top-4 -right-4 glass-badge text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                    >
                      {step.number}
                    </motion.div>
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="flex justify-center mb-4"
                    >
                      <IconComponent className="w-12 h-12 md:w-16 md:h-16" style={{ color: '#5fc53f' }} />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Arrow between steps (hidden on mobile, shown on desktop) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-3xl z-10"
                      style={{ color: '#5fc53f' }}
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center glass-blue-solid text-white p-6 md:p-10 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              Sẵn sàng bắt đầu? Liên hệ ngay với chúng tôi!
            </h3>
            <p className="text-base md:text-lg mb-6">
              Đội ngũ chuyên viên sẵn sàng hỗ trợ bạn 24/7
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:0869802574"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg flex items-center gap-2"
              >
                <IoCall className="w-6 h-6" />
                086 980 2574
              </motion.a>
              <motion.a
                href="https://zalo.me/0869802574"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white px-8 py-4 rounded-full text-lg font-bold shadow-lg flex items-center gap-2"
                style={{ color: '#5fc53f' }}
              >
                <IoChatbubbles className="w-6 h-6" />
                Chat Zalo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

