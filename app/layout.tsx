import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dịch Vụ Đáo Rút Thẻ Tín Dụng Uy Tín - Chi Phí Từ 1.2% | Mỹ Đình, Hà Nội",
  description: "Dịch vụ đáo hạn, rút tiền thẻ tín dụng uy tín, an toàn tại Mỹ Đình, Hà Nội. Chi phí cạnh tranh chỉ từ 1.2%. Hỗ trợ tận nơi 24/7. Hotline: 086 980 2574",
  keywords: "đáo thẻ tín dụng, rút thẻ tín dụng, đáo hạn thẻ, rút tiền thẻ, Mỹ Đình, Hà Nội",
  authors: [{ name: "Dịch Vụ Đáo Rút Thẻ Tín Dụng" }],
  openGraph: {
    title: "Dịch Vụ Đáo Rút Thẻ Tín Dụng Uy Tín",
    description: "Chi phí từ 1.2% - Hỗ trợ tận nơi 24/7 tại Mỹ Đình, Hà Nội",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
