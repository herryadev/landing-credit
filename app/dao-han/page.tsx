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
import SchemaOrg from "../components/SchemaOrg";
import { daoHanServiceSchema, daoHanFAQSchema, createBreadcrumbSchema } from "../utils/schemas";

export const metadata: Metadata = {
  title: "Đáo Hạn Thẻ Tín Dụng Hà Nội",
  description: "Dịch vụ đáo hạn thẻ tín dụng tại Hà Nội, chi phí chỉ từ 1.3%, thanh toán 100% hạn mức, tránh lãi phạt cao, hỗ trợ tận nơi 24/7. Hỗ trợ tất cả ngân hàng: Vietcombank, Techcombank, VPBank, BIDV, MB Bank, ACB. Giữ nguyên điểm tín dụng, không ảnh hưởng lịch sử. Hotline: 0354064124",
  keywords: [
    "đáo hạn thẻ tín dụng",
    "đáo hạn thẻ tín dụng hà nội",
    "đáo hạn thẻ visa",
    "đáo hạn thẻ mastercard",
    "phí đáo hạn thẻ tín dụng",
    "đáo hạn thẻ tín dụng uy tín",
    "thanh toán thẻ tín dụng",
    "đáo thẻ tại nhà",
  ],
  openGraph: {
    title: "Đáo Hạn Thẻ Tín Dụng Hà Nội | Phí Thấp 1.3% - Uy Tín 24/7",
    description: "Dịch vụ đáo hạn thẻ tín dụng tại Hà Nội, chi phí chỉ từ 1.3%, thanh toán 100% hạn mức, tránh lãi phạt cao, hỗ trợ tận nơi 24/7",
    type: "website",
    url: "https://daothehanoi.xyz/dao-han",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Đáo Hạn Thẻ Tín Dụng Hà Nội - Phí Thấp 1.3%",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đáo Hạn Thẻ Tín Dụng Hà Nội | Phí Thấp 1.3%",
    description: "Thanh toán 100% hạn mức, tránh lãi phạt cao. Hotline: 0354064124",
    images: ["/images/banner.png"],
  },
  alternates: {
    canonical: "https://daothehanoi.xyz/dao-han",
  },
};

export default function DaoHanPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Trang chủ", url: "https://daothehanoi.xyz" },
    { name: "Đáo Hạn Thẻ Tín Dụng", url: "https://daothehanoi.xyz/dao-han" }
  ]);

  return (
    <>
      {/* Structured Data for SEO */}
      <SchemaOrg schema={daoHanServiceSchema} />
      <SchemaOrg schema={daoHanFAQSchema} />
      <SchemaOrg schema={breadcrumbSchema} />
      
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

