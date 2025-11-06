"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { IoCall, IoChatbubbles } from "react-icons/io5";
import { useInView } from "../../hooks/useInView";
import { fadeInUp, staggerContainer } from "../../utils/animations";

export default function FAQ() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Phí dịch vụ rút tiền thẻ tín dụng là bao nhiêu?",
      answer: "Phí dịch vụ của chúng tôi chỉ từ 1.2% - thấp nhất thị trường. Chi phí cụ thể phụ thuộc vào số tiền rút và loại thẻ. Bạn có thể liên hệ hotline 035 406 4124 để được tư vấn chi tiết về mức phí phù hợp."
    },
    {
      question: "Có thể rút tối đa bao nhiêu tiền từ thẻ tín dụng?",
      answer: "Bạn có thể rút đến 100% hạn mức thẻ tín dụng của mình. Đây là ưu điểm vượt trội so với rút tiền tại ATM chỉ được 50% hạn mức. Điều này giúp bạn tối đa hóa nguồn vốn khi cần thiết."
    },
    {
      question: "Mất bao lâu để hoàn tất giao dịch rút tiền?",
      answer: "Thời gian giao dịch rất nhanh chóng, chỉ mất 15-20 phút. Nếu bạn chọn dịch vụ tận nơi, nhân viên sẽ có mặt trong vòng 15-20 phút kể từ khi liên hệ tại khu vực Hà Nội."
    },
    {
      question: "Thông tin thẻ của tôi có được bảo mật không?",
      answer: "Chúng tôi cam kết bảo mật thông tin khách hàng tuyệt đối. Mọi thông tin thẻ tín dụng sẽ không được lưu trữ hay chia sẻ cho bất kỳ bên thứ ba nào. Trước giao dịch, chúng tôi cũng tư vấn cách bảo mật thẻ để bạn yên tâm."
    },
    {
      question: "Các ngân hàng nào được hỗ trợ?",
      answer: "Chúng tôi hỗ trợ rút tiền từ thẻ tín dụng của tất cả các ngân hàng tại Việt Nam bao gồm: Vietcombank, Techcombank, VPBank, BIDV, ACB, Vietinbank, TPBank, MB Bank, và nhiều ngân hàng khác."
    },
    {
      question: "Có cần phải đến văn phòng không?",
      answer: "Không nhất thiết. Chúng tôi có dịch vụ phục vụ tận nơi 24/7 tại khu vực Hà Nội. Bạn chỉ cần gọi điện đến hotline 035 406 4124, nhân viên sẽ đến tận nơi để hỗ trợ bạn trong vòng 15-20 phút."
    },
    {
      question: "Có được miễn lãi suất không?",
      answer: "Có. Khi rút tiền qua dịch vụ của chúng tôi, bạn được miễn hoàn toàn lãi suất trong 45 ngày. Sau 45 ngày, lãi suất sẽ được tính theo quy định của ngân hàng phát hành thẻ."
    },
    {
      question: "Có hỗ trợ khách hàng mở thẻ tín dụng mới không?",
      answer: "Có. Chúng tôi hỗ trợ tư vấn và mở thẻ tín dụng mới tại các ngân hàng. Việc có nhiều thẻ tín dụng sẽ giúp bạn có thêm nguồn vốn linh hoạt cho nhu cầu kinh doanh hoặc cá nhân."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            CÂU HỎI THƯỜNG GẶP
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Giải Đáp Thắc Mắc
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Tất cả thông tin bạn cần biết về dịch vụ rút tiền thẻ tín dụng
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <FaQuestionCircle 
                      className="w-6 h-6 flex-shrink-0" 
                      style={{ color: openIndex === index ? '#5fc53f' : '#9ca3af' }}
                    />
                    <h3 className="text-lg font-bold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pl-16">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="text-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto" style={{ background: 'linear-gradient(135deg, #4a9b2e 0%, #5fc53f 100%)' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Vẫn còn thắc mắc?
            </h3>
            <p className="text-green-50 mb-6">
              Đội ngũ tư vấn viên chuyên nghiệp của chúng tôi sẵn sàng giải đáp mọi thắc mắc của bạn 24/7
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:0354064124"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors flex items-center gap-2"
              >
                <IoCall className="w-5 h-5" />
                Gọi ngay: 035 406 4124
              </motion.a>
              <motion.a
                href="https://zalo.me/0354064124"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-colors flex items-center gap-2"
                style={{ color: '#5fc53f' }}
              >
                <IoChatbubbles className="w-5 h-5" />
                Chat Zalo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

