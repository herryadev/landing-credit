import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

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

const siteUrl = "https://daothehanoi.xyz";
const siteName = "Dịch Vụ Đáo Rút Thẻ Tín Dụng Uy Tín";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dịch Vụ Đáo Rút Thẻ Tín Dụng Uy Tín - Chi Phí Từ 1.8% | Hà Nội",
    template: "%s | Đáo Rút Thẻ Tín Dụng Hà Nội",
  },
  description: "Dịch vụ đáo hạn, rút tiền thẻ tín dụng uy tín, an toàn tại Hà Nội. Chi phí cạnh tranh chỉ từ 1.8%. Hỗ trợ tận nơi 24/7. Hỗ trợ tất cả ngân hàng: Vietcombank, Techcombank, VPBank, BIDV, MB Bank... Hotline: 0354064124",
  keywords: [
    "đáo thẻ tín dụng",
    "rút thẻ tín dụng",
    "đáo hạn thẻ tín dụng",
    "rút tiền thẻ tín dụng",
    "đáo hạn thẻ visa",
    "rút tiền thẻ mastercard",
    "đáo thẻ tín dụng Hà Nội",
    "rút tiền thẻ tín dụng Hà Nội",
    "phí đáo hạn thẻ tín dụng",
    "dịch vụ đáo thẻ uy tín",
    "Mỹ Đình",
    "Cầu Giấy",
    "Đống Đa"
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: siteName,
    title: "Dịch Vụ Đáo Rút Thẻ Tín Dụng Uy Tín - Chi Phí Từ 1.8% | Hà Nội",
    description: "Dịch vụ đáo hạn, rút tiền thẻ tín dụng uy tín, an toàn tại Hà Nội. Chi phí cạnh tranh chỉ từ 1.8%. Hỗ trợ tận nơi 24/7. Hotline: 0354064124",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Dịch Vụ Đáo Rút Thẻ Tín Dụng Uy Tín Hà Nội",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Dịch Vụ Đáo Rút Thẻ Tín Dụng Uy Tín - Chi Phí Từ 1.8% | Hà Nội",
    description: "Dịch vụ đáo hạn, rút tiền thẻ tín dụng uy tín, an toàn tại Hà Nội. Chi phí cạnh tranh chỉ từ 1.8%. Hỗ trợ tận nơi 24/7",
    images: ["/images/banner.png"],
  },
  
  // Verification (add your tokens when available)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  // Alternate languages (if you have English version in future)
  alternates: {
    canonical: siteUrl,
  },
  
  // Additional metadata
  category: "Financial Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        {/* Preconnect to external resources for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Business Contact Information */}
        <meta name="contact" content="0354064124" />
        <meta name="geo.region" content="VN-HN" />
        <meta name="geo.placename" content="Hà Nội" />
      </head>
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
