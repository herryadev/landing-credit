import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DaoHanHero from "./components/DaoHanHero";
import WhyNeedDaoHan from "./components/WhyNeedDaoHan";
import DaoHanBenefits from "./components/DaoHanBenefits";
import Process from "../components/Process";
import SupportedBanks from "../rut-tien/components/SupportedBanks";
import DaoHanFAQ from "./components/DaoHanFAQ";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Đáo Hạn Thẻ Tín Dụng Hà Nội | Phí Thấp 1.3% - Uy Tín 24/7",
  description: "Dịch vụ đáo hạn thẻ tín dụng tại Hà Nội, chi phí chỉ từ 1.3%, thanh toán 100% hạn mức, tránh lãi phạt cao, hỗ trợ tận nơi 24/7. Hỗ trợ tất cả ngân hàng: Vietcombank, Techcombank, VPBank, BIDV...",
  keywords: "đáo hạn thẻ tín dụng, đáo hạn thẻ tín dụng hà nội, đáo hạn thẻ visa, đáo hạn thẻ mastercard, phí đáo hạn thẻ tín dụng, đáo hạn thẻ tín dụng uy tín",
  openGraph: {
    title: "Đáo Hạn Thẻ Tín Dụng Hà Nội | Phí Thấp 1.3% - Uy Tín 24/7",
    description: "Dịch vụ đáo hạn thẻ tín dụng tại Hà Nội, chi phí chỉ từ 1.3%, thanh toán 100% hạn mức, tránh lãi phạt cao, hỗ trợ tận nơi 24/7",
    type: "website",
  },
};

export default function DaoHanPage() {
  return (
    <>
      <Header />
      <main>
        <DaoHanHero />
        <WhyNeedDaoHan />
        <DaoHanBenefits />
        <Process />
        <SupportedBanks />
        <DaoHanFAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

