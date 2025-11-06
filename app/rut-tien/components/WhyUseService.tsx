"use client";
import { motion } from "framer-motion";
import { FaPercentage, FaCalendarCheck, FaShieldAlt } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";
import { fadeInUp, staggerContainer } from "../../utils/animations";

export default function WhyUseService() {
  const { ref, isInView } = useInView();

  const reasons = [
    {
      icon: FaPercentage,
      title: "Chi phí thấp hơn ATM",
      description: "Phí dịch vụ chỉ từ 1.8%, rẻ hơn rất nhiều so với rút tiền trực tiếp tại máy ATM",
      color: "#f97316"
    },
    {
      icon: FaCalendarCheck,
      title: "Miễn lãi suất 45 ngày",
      description: "Bạn được miễn hoàn toàn lãi suất trong 45 ngày cho tới khi có khả năng chi trả",
      color: "#5fc53f"
    },
    {
      icon: FaShieldAlt,
      title: "An toàn & Bảo mật",
      description: "Thông tin thẻ của bạn được bảo mật tuyệt đối, không lưu trữ hay chia sẻ cho bất kỳ bên thứ ba nào",
      color: "#3b82f6"
    }
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
            style={{ color: '#5fc53f' }}
          >
            TẠI SAO NÊN CHỌN CHÚNG TÔI
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Tại Sao Nên Sử Dụng Dịch Vụ?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Khi sử dụng dịch vụ rút tiền mặt qua thẻ tín dụng, bạn sẽ nhận được nhiều lợi ích vượt trội
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 px-4 lg:px-8 py-4 lg:py-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{ backgroundColor: `${reason.color}15` }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: reason.color }} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional info box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-white p-8 rounded-2xl shadow-xl"
          style={{ background: 'linear-gradient(135deg, #4a9b2e 0%, #5fc53f 100%)' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Bạn cần rút tiền gấp?
              </h3>
              <p className="text-green-50">
                Chúng tôi hỗ trợ 24/7, phục vụ tận nơi trong vòng 15-20 phút tại khu vực Hà Nội
              </p>
            </div>
            <motion.a
              href="tel:0354064124"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold whitespace-nowrap transition-colors"
            >
              Liên hệ ngay
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

