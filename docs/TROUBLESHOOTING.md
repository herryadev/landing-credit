# Troubleshooting Guide

## 🐛 Các Lỗi Thường Gặp

### 1. Error: "Element type is invalid: expected a string... but got: object"

**Nguyên nhân:**
- Bạn đang chạy dev server với **Turbopack** thay vì **webpack**
- @svgr/webpack chỉ hoạt động với webpack, không hoạt động với Turbopack

**Triệu chứng:**
```
Error: Element type is invalid: expected a string (for built-in components) 
or a class/function (for composite components) but got: object.

Check the render method of `Header`.
```

**Giải pháp:**

✅ **Cách 1: Dùng pnpm script (Khuyến nghị)**
```bash
pnpm dev  # Đã config sẵn flag --webpack
```

✅ **Cách 2: Thêm flag --webpack**
```bash
next dev --webpack
# hoặc
npx next dev --webpack
```

❌ **KHÔNG nên:**
```bash
next dev        # Sẽ dùng Turbopack → Lỗi!
npm run dev     # Nếu chưa config --webpack
```

---

### 2. SVG Icons Không Hiển Thị

**Nguyên nhân:**
- Path alias `@svg/*` không được nhận diện
- TypeScript config chưa đúng

**Giải pháp:**

1. **Kiểm tra tsconfig.json:**
```json
{
  "compilerOptions": {
    "paths": {
      "@svg/*": ["./app/assets/svg/*"]
    }
  },
  "include": [
    "svg.d.ts"  // Đảm bảo include file này
  ]
}
```

2. **Restart TypeScript server trong VSCode:**
- Cmd/Ctrl + Shift + P
- Chọn "TypeScript: Restart TS Server"

3. **Xóa .next folder và rebuild:**
```bash
rm -rf .next
pnpm dev
```

---

### 3. TypeScript Error: "Cannot find module '*.svg'"

**Nguyên nhân:**
- Thiếu file `svg.d.ts` hoặc chưa được include trong tsconfig

**Giải pháp:**

1. **Đảm bảo file `svg.d.ts` tồn tại ở root:**
```typescript
declare module "*.svg" {
  import * as React from "react";
  const SVGComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default SVGComponent;
}

declare module "*.svg?url" {
  const content: string;
  export default content;
}
```

2. **Check tsconfig.json include:**
```json
{
  "include": [
    "next-env.d.ts",
    "svg.d.ts",  // ← Phải có dòng này
    "**/*.ts",
    "**/*.tsx"
  ]
}
```

3. **Restart TypeScript:**
```bash
# Trong VSCode
Cmd/Ctrl + Shift + P → TypeScript: Restart TS Server
```

---

### 4. Build Error: "ERROR: This build is using Turbopack..."

**Nguyên nhân:**
- Next.js 16 phát hiện webpack config nhưng đang dùng Turbopack

**Giải pháp:**
```bash
# Luôn dùng flag --webpack
pnpm build        # Đã config sẵn
# hoặc
next build --webpack
```

---

### 5. Icons Hiển Thị Nhưng Không Có Màu

**Nguyên nhân:**
- SVG không kế thừa màu từ parent
- Cần set `fill="currentColor"`

**Giải pháp:**

❌ **Sai:**
```tsx
<PhoneFill className="text-blue-600" />
```

✅ **Đúng:**
```tsx
<PhoneFill className="w-6 h-6 text-blue-600" fill="currentColor" />
```

Hoặc trong CSS:
```css
svg {
  fill: currentColor;
}
```

---

### 6. Import SVG Bị Lỗi: "Module not found"

**Nguyên nhân:**
- Path sai hoặc file không tồn tại
- Alias `@svg/*` chưa hoạt động

**Giải pháp:**

1. **Check path có đúng không:**
```bash
# Kiểm tra file tồn tại
ls app/assets/svg/contact/phone_fill.svg
```

2. **Thử import với relative path:**
```tsx
// Thay vì
import PhoneFill from "@svg/contact/phone_fill.svg";

// Thử
import PhoneFill from "../../assets/svg/contact/phone_fill.svg";
```

3. **Nếu relative path hoạt động → vấn đề ở alias:**
- Check `tsconfig.json` paths
- Restart dev server

---

### 7. Performance Issues / Slow Reload

**Nguyên nhân:**
- Webpack chậm hơn Turbopack trong dev mode
- Import quá nhiều SVG không cần thiết

**Giải pháp:**

1. **Optimize imports:**
```tsx
// ❌ Không nên: Import nhiều icons không dùng
import Icon1 from "@svg/...";
import Icon2 from "@svg/...";
import Icon3 from "@svg/...";

// ✅ Nên: Chỉ import icons cần dùng
import PhoneFill from "@svg/contact/phone_fill.svg";
```

2. **Dùng Turbopack cho pages không dùng SVG:**
```bash
# Nếu đang dev pages không dùng SVG
pnpm run dev:turbo  # Nhanh hơn
```

3. **Cache webpack:**
- Next.js tự động cache webpack build
- Nếu vẫn chậm, xóa `.next` và rebuild

---

## 🔧 Quick Fixes Checklist

Khi gặp lỗi, thử theo thứ tự:

1. ✅ **Restart dev server**
```bash
# Stop server (Ctrl+C)
pnpm dev
```

2. ✅ **Xóa .next cache**
```bash
rm -rf .next
pnpm dev
```

3. ✅ **Check đang dùng webpack**
```bash
# Terminal should show:
# ▲ Next.js 16.0.1 (webpack)
#                     ^^^^^^^^
```

4. ✅ **Restart TypeScript server (VSCode)**
```
Cmd/Ctrl + Shift + P → TypeScript: Restart TS Server
```

5. ✅ **Reinstall dependencies**
```bash
rm -rf node_modules .next
pnpm install
pnpm dev
```

---

## 📞 Cần Hỗ Trợ Thêm?

Nếu vẫn gặp lỗi, check:

1. **Console errors** trong browser DevTools
2. **Terminal errors** nơi chạy dev server
3. **TypeScript errors** trong VSCode Problems panel

Thông tin hữu ích khi báo lỗi:
- Error message đầy đủ
- Component nào bị lỗi
- Node version: `node -v`
- Package manager: `pnpm -v`
- Next.js version: `16.0.1`

