"use client";
import { IoCheckmarkCircle, IoFlash, IoLockClosed, IoCall, IoChatbubbles } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useInView } from "../hooks/useInView";

export default function Services() {
  const { ref, isInView } = useInView();
  const services = [
    {
      icon: IoCheckmarkCircle,
      title: "DỊCH VỤ MINH BẠCH",
      description: "Mọi phí đều được quy định rõ ràng. Cạnh tranh từ 1.2%",
      details: "Đội ngũ nhân viên là niềm tự hào của chúng tôi. Khách hàng luôn được quan tâm, chăm sóc hỗ trợ khách hàng hiểu hơn về dịch vụ…"
    },
    {
      icon: IoFlash,
      title: "HỖ TRỢ NHANH CHÓNG",
      description: "Tiếp nhận thông tin báo giá, di chuyển 15 – 20 Phút",
      details: "Uy tín và là giá trị được đề cao hàng đầu khiến khách hàng tin tưởng và luôn đồng hành quay lại sử dụng các dịch vụ của chúng tôi."
    },
    {
      icon: IoLockClosed,
      title: "CAM KẾT & BẢO MẬT",
      description: "Với phương châm hoạt động 'Hỗ trợ tận nơi Uy tín rõ ràng'",
      details: "Kinh nghiệm trên 5 năm trong lĩnh vực giúp chúng tôi mang tới khách hàng dịch vụ tốt. Gia tăng dịch vụ cho khách hàng"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
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
            DỊCH VỤ CỦA CHÚNG TÔI
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            KHÁCH HÀNG NHẬN ĐƯỢC GÌ
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Giải pháp cho doanh nghiệp trong thời đại 4.0
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-orange-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mb-6"
                >
                  <IconComponent className="w-16 h-16" style={{ color: '#5fc53f' }} />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-center" style={{ color: '#5fc53f' }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 font-semibold mb-4 text-center">
                  {service.description}
                </p>
                <p className="text-gray-600 leading-relaxed text-left">
                  {service.details}
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <motion.a
                    href="tel:0869802574"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold"
                  >
                    <IoCall className="w-5 h-5" />
                    086 980 2574
                  </motion.a>
                  <motion.a
                    href="https://zalo.me/0869802574"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: '#4ab82c' }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-semibold"
                    style={{ backgroundColor: '#5fc53f' }}
                  >
                    <IoChatbubbles className="w-5 h-5" />
                    Chat Zalo
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

