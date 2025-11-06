// Structured Data Schemas for SEO

const siteUrl = "https://daothehanoi.xyz";
const businessName = "Dịch Vụ Đáo Rút Thẻ Tín Dụng Uy Tín";
const businessPhone = "0354064124";
const businessEmail = "contact@daothehanoi.xyz";

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": businessName,
  "image": `${siteUrl}/images/banner.png`,
  "url": siteUrl,
  "telephone": businessPhone,
  "email": businessEmail,
  "priceRange": "1.3% - 1.8%",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mỹ Đình, Cầu Giấy",
    "addressLocality": "Hà Nội",
    "addressRegion": "Hà Nội",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.0285",
    "longitude": "105.8542"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": {
    "@type": "City",
    "name": "Hà Nội"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": businessName,
  "url": siteUrl,
  "logo": `${siteUrl}/images/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": businessPhone,
    "contactType": "customer service",
    "areaServed": "VN",
    "availableLanguage": "vi"
  },
  "sameAs": [
    // Add social media URLs when available
    // "https://www.facebook.com/yourpage",
    // "https://zalo.me/yourpage"
  ]
};

// WebSite Schema with SearchAction
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": businessName,
  "url": siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// Service Schema for Rút Tiền
export const rutTienServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Rút Tiền Thẻ Tín Dụng",
  "provider": {
    "@type": "FinancialService",
    "name": businessName,
    "telephone": businessPhone
  },
  "areaServed": {
    "@type": "City",
    "name": "Hà Nội"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dịch vụ rút tiền thẻ tín dụng",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rút Tiền Thẻ Tín Dụng",
          "description": "Rút 100% hạn mức thẻ tín dụng với phí chỉ từ 1.8%"
        }
      }
    ]
  }
};

// Service Schema for Đáo Hạn
export const daoHanServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Đáo Hạn Thẻ Tín Dụng",
  "provider": {
    "@type": "FinancialService",
    "name": businessName,
    "telephone": businessPhone
  },
  "areaServed": {
    "@type": "City",
    "name": "Hà Nội"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dịch vụ đáo hạn thẻ tín dụng",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Đáo Hạn Thẻ Tín Dụng",
          "description": "Thanh toán thẻ tín dụng đến hạn với phí chỉ từ 1.3%"
        }
      }
    ]
  }
};

// FAQ Schema for Rút Tiền
export const rutTienFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Rút tiền thẻ tín dụng là gì?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rút tiền thẻ tín dụng là dịch vụ giúp bạn chuyển đổi hạn mức tín dụng trong thẻ thành tiền mặt ngay lập tức với phí thấp chỉ từ 1.8%."
      }
    },
    {
      "@type": "Question",
      "name": "Phí rút tiền thẻ tín dụng là bao nhiêu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Phí rút tiền thẻ tín dụng của chúng tôi chỉ từ 1.8%, thấp hơn nhiều so với phí rút tại ATM (4%) và không bị tính lãi suất ngay."
      }
    },
    {
      "@type": "Question",
      "name": "Rút tiền thẻ tín dụng có an toàn không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hoàn toàn an toàn. Chúng tôi cam kết bảo mật 100% thông tin khách hàng và sử dụng thiết bị POS chính hãng được ngân hàng cấp phép."
      }
    },
    {
      "@type": "Question",
      "name": "Mất bao lâu để nhận được tiền?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bạn sẽ nhận được tiền mặt ngay sau 5-10 phút khi hoàn tất thủ tục. Chúng tôi hỗ trợ 24/7 kể cả ngày lễ."
      }
    },
    {
      "@type": "Question",
      "name": "Hỗ trợ những ngân hàng nào?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chúng tôi hỗ trợ tất cả các ngân hàng tại Việt Nam: Vietcombank, Techcombank, VPBank, BIDV, MB Bank, ACB, Sacombank, VIB, TPBank..."
      }
    }
  ]
};

// FAQ Schema for Đáo Hạn
export const daoHanFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Đáo hạn thẻ tín dụng là gì?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Đáo hạn thẻ tín dụng là dịch vụ thanh toán số dư thẻ tín dụng đến hạn giúp bạn tránh lãi suất phạt cao và giữ điểm tín dụng tốt với ngân hàng."
      }
    },
    {
      "@type": "Question",
      "name": "Phí đáo hạn thẻ tín dụng là bao nhiêu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Phí đáo hạn thẻ tín dụng của chúng tôi chỉ từ 1.3%, giúp bạn tiết kiệm đáng kể so với lãi suất phạt của ngân hàng (18-25%/năm)."
      }
    },
    {
      "@type": "Question",
      "name": "Đáo hạn thẻ có ảnh hưởng đến điểm tín dụng không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Không ảnh hưởng. Đáo hạn thẻ giúp bạn thanh toán đúng hạn, giữ nguyên điểm tín dụng và lịch sử tốt với ngân hàng."
      }
    },
    {
      "@type": "Question",
      "name": "Thủ tục đáo hạn thẻ như thế nào?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thủ tục rất đơn giản: Liên hệ hotline 0354064124, cung cấp thông tin thẻ, chúng tôi đến tận nơi thanh toán giúp bạn. Toàn bộ quá trình chỉ mất 10-15 phút."
      }
    }
  ]
};

// BreadcrumbList Schema
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

