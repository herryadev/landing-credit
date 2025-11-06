"use client";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaChartLine, FaCreditCard } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";
import { fadeInUp, staggerContainer } from "../../utils/animations";

export default function WhyNeedDaoHan() {
  const { ref, isInView } = useInView();

  const reasons = [
    {
      icon: FaExclamationTriangle,
      title: "Tránh lãi suất phạt cao",
      description: "Nếu thanh toán chậm trên 10 ngày, ngân hàng sẽ tính lãi phạt 33%/năm. Chi phí đáo hạn chỉ từ 1.3% giúp bạn tiết kiệm đáng kể.",
      color: "#ef4444"
    },
    {
      icon: FaChartLine,
      title: "Tránh điểm tín dụng xấu",
      description: "Thanh toán chậm trên 3 tháng sẽ bị đưa vào danh sách nợ xấu, ảnh hưởng đến khả năng vay vốn sau này. Đáo hạn giúp bạn duy trì điểm tín dụng tốt.",
      color: "#5fc53f"
    },
    {
      icon: FaCreditCard,
      title: "Tiếp tục sử dụng thẻ",
      description: "Đáo hạn giúp bạn thanh toán nợ đúng hạn, gia hạn thẻ và tiếp tục sử dụng các tiện ích của thẻ tín dụng mà không bị gián đoạn.",
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
            TẠI SAO CẦN ĐÁO HẠN
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Tại Sao Bạn Cần Đáo Hạn Thẻ Tín Dụng?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Không thanh toán nợ thẻ tín dụng đúng hạn sẽ gây ra nhiều hậu quả nghiêm trọng
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

        {/* Warning box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <FaExclamationTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-2">
                Hậu quả khi không thanh toán đúng hạn
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>10 ngày đầu:</strong> Ngân hàng nhắc nhở nộp tiền</li>
                <li><strong>Từ 10 ngày - 3 tháng:</strong> Bị tính lãi phạt 33%/năm</li>
                <li><strong>Trên 3 tháng:</strong> Bị đưa vào danh sách nợ xấu, khó vay vốn sau này</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-white p-8 rounded-2xl shadow-xl"
          style={{ background: 'linear-gradient(135deg, #4a9b2e 0%, #5fc53f 100%)' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Sắp đến hạn thanh toán?
              </h3>
              <p className="text-green-50">
                Chúng tôi hỗ trợ đáo hạn nhanh chóng, chi phí thấp, giúp bạn tránh lãi phạt và giữ điểm tín dụng tốt
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

