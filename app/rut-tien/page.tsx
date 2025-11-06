import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RutTienHero from "./components/RutTienHero";
import WhyUseService from "./components/WhyUseService";
import Benefits from "./components/Benefits";
import Process from "../components/Process";
import SupportedBanks from "./components/SupportedBanks";
import FAQ from "./components/FAQ";
import ContactForm from "../components/ContactForm";
import SchemaOrg from "../components/SchemaOrg";
import { rutTienServiceSchema, rutTienFAQSchema, createBreadcrumbSchema } from "../utils/schemas";

export const metadata: Metadata = {
  title: "Rút Tiền Thẻ Tín Dụng Hà Nội",
  description: "Dịch vụ rút tiền mặt từ thẻ tín dụng tại Hà Nội, chi phí chỉ từ 1.8%, rút 100% hạn mức, hỗ trợ tận nơi 24/7. Hỗ trợ tất cả ngân hàng: Vietcombank, Techcombank, VPBank, BIDV, MB Bank, ACB, Sacombank. Thủ tục đơn giản, nhận tiền trong 5 phút. Hotline: 0354064124",
  keywords: [
    "rút tiền thẻ tín dụng",
    "rút tiền thẻ tín dụng hà nội",
    "rút tiền mastercard",
    "rút tiền visa",
    "phí rút tiền thẻ tín dụng",
    "rút tiền thẻ tín dụng uy tín",
    "quẹt thẻ lấy tiền mặt",
    "rút tiền thẻ tín dụng tại nhà",
    "dịch vụ rút tiền thẻ",
  ],
  openGraph: {
    title: "Rút Tiền Thẻ Tín Dụng Hà Nội | Phí Thấp 1.8% - Uy Tín 24/7",
    description: "Dịch vụ rút tiền mặt từ thẻ tín dụng tại Hà Nội, chi phí chỉ từ 1.8%, rút 100% hạn mức, hỗ trợ tận nơi 24/7",
    type: "website",
    url: "https://daothehanoi.xyz/rut-tien",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Rút Tiền Thẻ Tín Dụng Hà Nội - Phí Thấp 1.8%",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rút Tiền Thẻ Tín Dụng Hà Nội | Phí Thấp 1.8%",
    description: "Rút 100% hạn mức, hỗ trợ tận nơi 24/7. Hotline: 0354064124",
    images: ["/images/banner.png"],
  },
  alternates: {
    canonical: "https://daothehanoi.xyz/rut-tien",
  },
};

export default function RutTienPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Trang chủ", url: "https://daothehanoi.xyz" },
    { name: "Rút Tiền Thẻ Tín Dụng", url: "https://daothehanoi.xyz/rut-tien" }
  ]);

  return (
    <>
      {/* Structured Data for SEO */}
      <SchemaOrg schema={rutTienServiceSchema} />
      <SchemaOrg schema={rutTienFAQSchema} />
      <SchemaOrg schema={breadcrumbSchema} />
      
      <Header />
      <main>
        <RutTienHero />
        <WhyUseService />
        <Benefits />
        <Process />
        <SupportedBanks />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

