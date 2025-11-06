"use client";
import { motion } from "framer-motion";
import { FaShieldAlt, FaTruck, FaCreditCard, FaCheckCircle, FaGift } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";
import { fadeInUp, staggerContainer } from "../../utils/animations";

export default function Benefits() {
  const { ref, isInView } = useInView();

  const benefits = [
    {
      icon: FaShieldAlt,
      title: "Tư Vấn Bảo Mật Thẻ",
      description: "Trước khi thực hiện giao dịch, nhân viên của chúng tôi sẽ tư vấn bảo mật và cách mã hóa thông tin giúp bạn tránh bị mất cắp thông tin thẻ. Chúng tôi cam kết bảo vệ thông tin khách hàng một cách tuyệt đối.",
      gradient: "from-green-600 to-green-700"
    },
    {
      icon: FaTruck,
      title: "Phục Vụ Tại Nhà",
      description: "Chúng tôi hiểu rằng không phải ai cũng có thời gian để đến trực tiếp văn phòng. Đội ngũ nhân viên của chúng tôi sẵn sàng di chuyển đến tận nơi và phục vụ bạn trong vòng 15-20 phút tại khu vực Hà Nội.",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: FaCreditCard,
      title: "Hỗ Trợ Mở Thẻ Mới",
      description: "Việc có nhiều thẻ tín dụng sẽ giúp bạn huy động vốn trong kinh doanh dễ dàng hơn. Chúng tôi hỗ trợ và tư vấn khách hàng mở thêm thẻ tín dụng tại các ngân hàng một cách nhanh chóng, thuận tiện nhất.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: FaCheckCircle,
      title: "Rút 100% Hạn Mức",
      description: "Khác với việc rút tiền tại ATM chỉ được 50% hạn mức, chúng tôi hỗ trợ bạn rút đến 100% hạn mức thẻ tín dụng. Điều này giúp bạn có thể sử dụng tối đa nguồn vốn khi cần thiết.",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            LỢI ÍCH VƯỢT TRỘI
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Những Lợi Ích Khi Rút Tiền Với Chúng Tôi
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Khi sử dụng dịch vụ rút tiền bằng thẻ tín dụng tại Hà Nội, bạn sẽ được hưởng các lợi ích sau
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${benefit.gradient} p-6`}>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-4"
                  >
                    <IconComponent className="w-8 h-8 text-gray-900" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">
                    {benefit.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-6 rounded-2xl shadow-xl">
            <FaGift className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="text-xl md:text-2xl font-bold mb-1">
                Ưu đãi đặc biệt cho khách hàng mới
              </p>
              <p className="text-orange-100">
                Giảm ngay 20% phí dịch vụ cho lần giao dịch đầu tiên
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

