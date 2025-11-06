"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";
import { fadeInUp, staggerContainer } from "../../utils/animations";

export default function DaoHanFAQ() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Đáo hạn thẻ tín dụng là gì?",
      answer: "Đáo hạn thẻ tín dụng là dịch vụ hỗ trợ chủ thẻ trả nợ tín dụng với ngân hàng trong trường hợp bạn không có đủ khả năng thanh toán khi đã đến hạn. Chúng tôi sẽ ứng cho bạn một khoản tiền để thanh toán nợ, giúp bạn tiếp tục gia hạn thẻ và tránh bị điểm tín dụng xấu. Sau đó, bạn sẽ hoàn lại phần tiền đã được ứng kèm theo phí dịch vụ từ 1.3%."
    },
    {
      question: "Quy trình đáo hạn thẻ tín dụng như thế nào?",
      answer: "Quy trình đáo hạn rất đơn giản:\n\n1. Khách hàng liên hệ và mang thẻ tín dụng đến địa chỉ hoặc chúng tôi đến tận nơi\n2. Nhân viên kiểm tra số tiền cần thanh toán\n3. Chúng tôi thanh toán dư nợ thẻ tín dụng cho khách hàng\n4. Thực hiện cà thẻ tín dụng qua máy POS\n5. Hoàn thành giao dịch, khách hàng thanh toán phí dịch vụ\n\nToàn bộ quá trình chỉ mất 15-20 phút."
    },
    {
      question: "Chi phí đáo hạn thẻ tín dụng là bao nhiêu?",
      answer: "Chi phí đáo hạn từ 1.3% tùy thuộc vào:\n\n• Số tiền cần đáo hạn (số tiền càng lớn, phí càng thấp)\n• Thời gian đáo hạn (đáo sớm sẽ rẻ hơn)\n• Loại thẻ tín dụng\n• Ngân hàng phát hành thẻ\n\nMột số ngân hàng cho phép đáo hạn tại chỗ sẽ có chi phí thấp hơn. Chi phí này rẻ hơn rất nhiều so với lãi phạt 33%/năm của ngân hàng."
    },
    {
      question: "Đáo hạn thẻ tín dụng có an toàn không?",
      answer: "Hoàn toàn an toàn! Chúng tôi cam kết:\n\n• Bảo mật thông tin thẻ tuyệt đối\n• Không lưu trữ hay chia sẻ thông tin cho bên thứ ba\n• Tư vấn cách mã hóa và bảo vệ thông tin thẻ\n• Giao dịch qua máy POS chính hãng, được ngân hàng cấp phép\n• Nhân viên chuyên nghiệp, quy trình rõ ràng\n• Hỗ trợ 24/7, phục vụ tận nơi tại Hà Nội"
    },
    {
      question: "Mất bao lâu để hoàn thành đáo hạn?",
      answer: "Thời gian đáo hạn rất nhanh:\n\n• Tại văn phòng: 10-15 phút\n• Tại nhà/văn phòng khách hàng: 15-20 phút (bao gồm thời gian di chuyển trong nội thành Hà Nội)\n\nChúng tôi hỗ trợ 24/7 kể cả ngày lễ, Tết để bạn có thể đáo hạn bất cứ lúc nào cần thiết."
    },
    {
      question: "Tôi cần chuẩn bị gì khi đáo hạn?",
      answer: "Bạn chỉ cần chuẩn bị:\n\n• Thẻ tín dụng cần đáo hạn\n• CMND/CCCD (để xác thực thông tin)\n• Kiểm tra tin nhắn sao kê từ ngân hàng để biết số tiền cần thanh toán\n• Tiền mặt để thanh toán phí dịch vụ (hoặc chuyển khoản)\n\nKhông cần giấy tờ phức tạp, quy trình đơn giản và nhanh chóng."
    },
    {
      question: "Đáo hạn thẻ tín dụng có hợp pháp không?",
      answer: "Đáo hạn thẻ tín dụng là hoạt động hoàn toàn hợp pháp. Đây là dịch vụ tài chính được nhiều người sử dụng để giải quyết tình trạng thiếu hụt tiền mặt tạm thời. Chúng tôi thực hiện giao dịch qua máy POS chính thức của ngân hàng, đảm bảo tính minh bạch và hợp pháp."
    },
    {
      question: "Ngân hàng nào được hỗ trợ đáo hạn?",
      answer: "Chúng tôi hỗ trợ đáo hạn tất cả các loại thẻ tín dụng của các ngân hàng tại Việt Nam:\n\n• Vietcombank, Techcombank, VPBank, BIDV, ACB\n• Sacombank, MB Bank, VIB, TPBank, HDBank\n• Agribank, OCB, SeABank, VP Bank, SHB\n• Thẻ Visa, Mastercard, JCB\n• Và nhiều ngân hàng khác\n\nLiên hệ với chúng tôi để được tư vấn cụ thể cho thẻ của bạn."
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
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wide mb-3"
            style={{ color: '#5fc53f' }}
          >
            <FaQuestionCircle />
            <span>CÂU HỎI THƯỜNG GẶP</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Câu Hỏi Về Đáo Hạn Thẻ Tín Dụng
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Giải đáp các thắc mắc thường gặp về dịch vụ đáo hạn thẻ tín dụng
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
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
                <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Vẫn còn thắc mắc?</p>
          <motion.a
            href="tel:0354064124"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-shadow"
          >
            <FaQuestionCircle className="w-5 h-5" />
            Liên hệ tư vấn ngay
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

