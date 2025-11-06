"use client";

import { useState } from "react";
import { IoSend, IoCheckmarkCircle, IoCloseCircle, IoCall, IoChatbubbles, IoLocation } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useInView } from "../hooks/useInView";

export default function ContactForm() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "rut-the",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call later)
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "rut-the",
        message: ""
      });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="font-semibold text-sm uppercase tracking-wide mb-3"
              style={{ color: '#5fc53f' }}
            >
              LIÊN HỆ
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              GỬI THÔNG TIN LIÊN HỆ
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600"
            >
              Điền thông tin bên dưới, chúng tôi sẽ liên hệ với bạn ngay
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10,11}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email (tùy chọn)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Nhập email của bạn"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  Loại dịch vụ <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="rut-the">Rút thẻ tín dụng</option>
                  <option value="dao-han">Đáo hạn thẻ</option>
                  <option value="tu-van">Tư vấn chung</option>
                  <option value="khac">Dịch vụ khác</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Ghi chú (tùy chọn)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Nhập nội dung cần tư vấn..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 text-white shadow-lg ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : ""
                }`}
                style={!isSubmitting ? { backgroundColor: '#5fc53f' } : {}}
              >
                <IoSend className="w-6 h-6" />
                {isSubmitting ? "Đang gửi..." : "GỬI THÔNG TIN"}
              </motion.button>

              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    <IoCheckmarkCircle className="w-6 h-6" />
                    Gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    <IoCloseCircle className="w-6 h-6" />
                    Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline: 086 980 2574
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Alternative Contact Methods */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {[
              { icon: IoCall, title: "Hotline", content: "086 980 2574", href: "tel:0869802574", color: 'rgba(249, 115, 22, 0.8)' },
              { icon: IoChatbubbles, title: "Zalo", content: "Chat ngay", href: "https://zalo.me/0869802574", color: 'rgba(95, 197, 63, 0.8)' },
              { icon: IoLocation, title: "Địa chỉ", content: "Mỹ Đình, Hà Nội", href: null, color: 'rgba(249, 115, 22, 0.8)' }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-white p-6 rounded-xl text-center"
                  style={{ backgroundColor: item.color }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-3"
                  >
                    <IconComponent className="w-10 h-10" />
                  </motion.div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? "_blank" : undefined}
                      rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-lg hover:underline"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-lg">{item.content}</p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

