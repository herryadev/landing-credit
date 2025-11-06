# Hướng dẫn sử dụng SVG Icons

## 📦 Setup đã hoàn tất

Project đã được config sẵn để import SVG files như React components sử dụng `@svgr/webpack`.

## 📁 Cấu trúc thư mục

```
app/
├── assets/
│   └── svg/
│       ├── contact/      # Icons liên hệ (phone, mail, chat, etc.)
│       ├── business/     # Icons kinh doanh (cash, card, coin, etc.)
│       ├── transport/    # Icons phương tiện (car, bike, plane, etc.)
│       ├── system/       # Icons hệ thống (check, close, settings, etc.)
│       ├── user/         # Icons người dùng
│       ├── map/          # Icons bản đồ
│       └── ...           # và nhiều categories khác
```

## 🚀 Cách sử dụng

### 1. Import SVG như React Component

```tsx
import PhoneFill from "@svg/contact/phone_fill.svg";
import ChatLine from "@svg/contact/chat_1_line.svg";
import CarFill from "@svg/transport/car_fill.svg";
import CheckCircle from "@svg/system/check_circle_fill.svg";
```

### 2. Sử dụng trong Component

```tsx
export default function MyComponent() {
  return (
    <div>
      {/* Basic usage */}
      <PhoneFill className="w-6 h-6" />
      
      {/* With custom color */}
      <PhoneFill className="w-6 h-6 text-blue-600" />
      
      {/* With inline style */}
      <ChatLine style={{ width: 24, height: 24, color: '#3b82f6' }} />
      
      {/* With fill prop */}
      <CarFill fill="currentColor" className="w-8 h-8" />
    </div>
  );
}
```

### 3. Sử dụng với props

SVG components hỗ trợ tất cả props của `<svg>` element:

```tsx
<PhoneFill 
  className="w-6 h-6 text-blue-600"  // ✅ className hoạt động
  fill="currentColor"                 // ✅ Override fill color
  stroke="none"                       // ✅ Thêm stroke
  width={24}                          // ✅ Override width
  height={24}                         // ✅ Override height
  aria-label="Phone icon"             // ✅ Accessibility
  role="img"                          // ✅ ARIA role
  title="Call us"                     // ✅ Title prop
/>
```

**Lưu ý về className:**
- ✅ `className` được pass trực tiếp xuống `<svg>` element
- ✅ Tailwind classes hoạt động: `w-6 h-6 text-blue-600`
- ✅ Custom classes hoạt động: `my-custom-icon`
- ✅ Có thể combine nhiều classes: `className="w-8 h-8 text-red-500 hover:text-red-700"`

## 📋 Icons có sẵn

### Contact Icons (`@svg/contact/`)
- `phone_fill.svg`, `phone_line.svg` - Icon điện thoại
- `phone_call_fill.svg`, `phone_call_line.svg` - Icon cuộc gọi
- `chat_1_fill.svg`, `chat_1_line.svg` - Icon chat
- `mail_fill.svg`, `mail_line.svg` - Icon email
- `message_1_fill.svg` - Icon tin nhắn
- ...và nhiều variants khác

### Business Icons (`@svg/business/`)
- `cash_fill.svg`, `cash_line.svg` - Icon tiền mặt
- `bank_card_fill.svg`, `bank_card_line.svg` - Icon thẻ ngân hàng
- `coin_fill.svg` - Icon đồng xu
- `wallet_fill.svg` - Icon ví
- `shopping_cart_1_fill.svg` - Icon giỏ hàng
- `gift_fill.svg` - Icon quà tặng
- ...và nhiều icons khác

### Transport Icons (`@svg/transport/`)
- `car_fill.svg`, `car_line.svg` - Icon xe hơi
- `bike_fill.svg` - Icon xe đạp
- `bus_fill.svg` - Icon xe bus
- `airplane_fill.svg` - Icon máy bay
- `rocket_fill.svg` - Icon tên lửa
- ...và nhiều icons khác

### System Icons (`@svg/system/`)
- `check_circle_fill.svg`, `check_circle_line.svg` - Icon check
- `close_circle_fill.svg` - Icon đóng
- `alert_fill.svg` - Icon cảnh báo
- `information_fill.svg` - Icon thông tin
- `settings_1_fill.svg` - Icon cài đặt
- `shield_fill.svg` - Icon bảo vệ
- `time_fill.svg` - Icon thời gian
- `loading_fill.svg` - Icon loading
- ...và nhiều icons khác

## 💡 Tips

### 1. Fill vs Line Icons
- **Fill icons** (`*_fill.svg`): Icons đặc, phù hợp cho UI nổi bật
- **Line icons** (`*_line.svg`): Icons outline, phù hợp cho UI tinh tế

### 2. Customize màu sắc
```tsx
{/* Dùng Tailwind classes */}
<PhoneFill className="text-blue-600" />

{/* Dùng fill prop */}
<PhoneFill fill="#3b82f6" />

{/* Dùng currentColor để kế thừa màu từ parent */}
<div className="text-red-500">
  <PhoneFill fill="currentColor" />
</div>
```

### 3. Responsive sizing
```tsx
{/* Mobile: 20px, Desktop: 24px */}
<PhoneFill className="w-5 h-5 md:w-6 md:h-6" />

{/* Responsive với rem */}
<PhoneFill className="w-6 h-6 lg:w-8 lg:h-8" />
```

## 🔧 Technical Details

### Config Files

**`next.config.ts`**
```typescript
webpack(config) {
  // Config để convert SVG thành React components
  // Sử dụng @svgr/webpack loader
}
```

**`tsconfig.json`**
```json
{
  "compilerOptions": {
    "paths": {
      "@svg/*": ["./app/assets/svg/*"]
    }
  }
}
```

**`svg.d.ts`**
```typescript
declare module "*.svg" {
  import * as React from "react";
  const SVGComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default SVGComponent;
}
```

## 🏃‍♂️ Build & Development

### Development mode
```bash
pnpm dev              # Dùng webpack (đã config sẵn)
pnpm run dev:turbo    # Dùng Turbopack (SVG sẽ không hoạt động)
```

### Build mode
```bash
pnpm build            # Production build với webpack
pnpm run build:turbo  # Build với Turbopack (không khuyến nghị)
pnpm start            # Start production server
```

### ⚠️ LƯU Ý QUAN TRỌNG

**Vấn đề với Turbopack:**
- Next.js 16 mặc định dùng **Turbopack** khi chạy `next dev`
- **@svgr/webpack chỉ hoạt động với webpack**, không hoạt động với Turbopack
- Nếu chạy dev mode với Turbopack, bạn sẽ gặp lỗi:
  ```
  Element type is invalid: expected a string... but got: object
  ```

**Giải pháp:**
- Đã config `pnpm dev` để tự động dùng flag `--webpack`
- Luôn chạy `pnpm dev` (không chạy `next dev` trực tiếp)
- Build production luôn dùng webpack

**Tại sao không dùng Turbopack?**
- Turbopack chưa hỗ trợ @svgr/webpack loader
- Cần đợi Turbopack có native SVG component support hoặc dùng workaround khác

## ✅ Ví dụ thực tế

### Button với icon
```tsx
<button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
  <PhoneFill className="w-5 h-5" />
  <span>Gọi ngay</span>
</button>
```

### Icon với animation
```tsx
<div className="animate-pulse">
  <PhoneFill className="w-6 h-6 text-blue-600" />
</div>
```

### Icon trong list
```tsx
<ul className="space-y-2">
  <li className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5 text-green-600" />
    <span>Uy tín hàng đầu</span>
  </li>
  <li className="flex items-center gap-2">
    <CheckCircle className="w-5 h-5 text-green-600" />
    <span>Chi phí từ 1.2%</span>
  </li>
</ul>
```

## 📚 Tham khảo

- [@svgr/webpack Documentation](https://react-svgr.com/docs/webpack/)
- [Next.js Custom Webpack Config](https://nextjs.org/docs/app/api-reference/next-config-js/webpack)
- [SVG Props Reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)

---

**Demo component**: Xem file `app/components/icons/IconExample.tsx` để xem ví dụ chi tiết.

