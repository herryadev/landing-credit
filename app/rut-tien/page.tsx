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

export const metadata: Metadata = {
  title: "Rút Tiền Thẻ Tín Dụng Hà Nội | Phí Thấp 1.2% - Uy Tín 24/7",
  description: "Dịch vụ rút tiền mặt từ thẻ tín dụng tại Hà Nội, chi phí chỉ từ 1.2%, rút 100% hạn mức, hỗ trợ tận nơi 24/7. Hỗ trợ tất cả ngân hàng: Vietcombank, Techcombank, VPBank, BIDV...",
  keywords: "rút tiền thẻ tín dụng, rút tiền thẻ tín dụng hà nội, rút tiền mastercard, rút tiền visa, phí rút tiền thẻ tín dụng, rút tiền thẻ tín dụng uy tín",
  openGraph: {
    title: "Rút Tiền Thẻ Tín Dụng Hà Nội | Phí Thấp 1.2% - Uy Tín 24/7",
    description: "Dịch vụ rút tiền mặt từ thẻ tín dụng tại Hà Nội, chi phí chỉ từ 1.2%, rút 100% hạn mức, hỗ trợ tận nơi 24/7",
    type: "website",
  },
};

export default function RutTienPage() {
  return (
    <>
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

