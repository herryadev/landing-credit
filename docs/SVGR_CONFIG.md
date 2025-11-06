# SVGR Configuration Guide

## 📋 Current Configuration

File: `next.config.ts`

```typescript
{
  loader: "@svgr/webpack",
  options: {
    svgo: true,              // Enable SVGO optimization
    titleProp: true,         // Enable title prop
    ref: true,               // Enable forwardRef
    svgProps: {
      role: "img",           // Default role for accessibility
    },
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: false,              // Giữ viewBox để responsive
              removeUnknownsAndDefaults: false,  // Giữ attrs để override
            },
          },
        },
        {
          name: "addAttributesToSVGElement",
          params: {
            attributes: [{ className: "" }],  // Thêm className support
          },
        },
      ],
    },
  },
}
```

---

## 🎯 Các Options Quan Trọng

### 1. `svgo: true`
**Chức năng:** Enable SVGO (SVG Optimizer) để tối ưu hóa SVG files

**Lợi ích:**
- Giảm file size
- Remove unnecessary metadata
- Clean up paths
- Optimize viewBox

**Example:**
```tsx
// Before optimization: 5KB
// After optimization: 2KB
import Icon from "@svg/contact/phone_fill.svg";
```

---

### 2. `titleProp: true`
**Chức năng:** Cho phép pass `title` prop để tăng accessibility

**Usage:**
```tsx
<PhoneFill 
  title="Phone Icon"
  aria-label="Call us"
  className="w-6 h-6"
/>
```

**Generated HTML:**
```html
<svg role="img" class="w-6 h-6">
  <title>Phone Icon</title>
  <!-- SVG paths -->
</svg>
```

---

### 3. `ref: true`
**Chức năng:** Enable `forwardRef` để có thể pass ref xuống SVG element

**Usage:**
```tsx
const iconRef = useRef<SVGSVGElement>(null);

<PhoneFill 
  ref={iconRef}
  className="w-6 h-6"
  onClick={() => iconRef.current?.focus()}
/>
```

---

### 4. `svgProps`
**Chức năng:** Set default props cho tất cả SVG components

**Current config:**
```typescript
svgProps: {
  role: "img",  // ARIA role for accessibility
}
```

**Result:**
```tsx
// Tất cả SVG icons tự động có role="img"
<PhoneFill className="w-6 h-6" />
// → <svg role="img" class="w-6 h-6">...</svg>
```

**Có thể override:**
```tsx
<PhoneFill role="presentation" className="w-6 h-6" />
// → <svg role="presentation" class="w-6 h-6">...</svg>
```

---

### 5. `removeViewBox: false`
**Chức năng:** Giữ lại `viewBox` attribute trong SVG

**Tại sao quan trọng:**
- Cần để SVG scale properly
- Responsive sizing
- Aspect ratio preservation

**Without viewBox:**
```html
<svg width="24" height="24">...</svg>
<!-- Chỉ có thể 24x24, không scale được -->
```

**With viewBox:**
```html
<svg viewBox="0 0 24 24" width="24" height="24">...</svg>
<!-- Có thể scale: w-6 h-6, w-12 h-12, etc. -->
```

---

### 6. `removeUnknownsAndDefaults: false`
**Chức năng:** Giữ lại attributes để có thể override qua props

**Tại sao cần:**
- Cho phép override `fill`, `stroke`, `opacity`, etc.
- Không remove default values
- Props có thể override SVG attributes

**Example:**
```tsx
// SVG gốc có fill="black"
<PhoneFill fill="red" />  // ✅ Override thành red

// Nếu removeUnknownsAndDefaults: true
<PhoneFill fill="red" />  // ❌ Vẫn black vì attr đã bị remove
```

---

### 7. `addAttributesToSVGElement`
**Chức năng:** Thêm `className` attribute vào SVG root element

**Tại sao cần:**
- Một số SVG không có `className` attribute
- Cần để pass Tailwind classes
- Enable dynamic styling

**Config:**
```typescript
{
  name: "addAttributesToSVGElement",
  params: {
    attributes: [{ className: "" }],
  },
}
```

**Result:**
```tsx
<PhoneFill className="w-6 h-6 text-blue-600" />
// → <svg class="w-6 h-6 text-blue-600">...</svg>
```

---

## 🔧 Advanced Usage

### Custom Props with TypeScript

Update `svg.d.ts` để add custom props:

```typescript
declare module "*.svg" {
  import * as React from "react";
  
  interface SVGProps extends React.SVGProps<SVGSVGElement> {
    title?: string;      // Title for accessibility
    desc?: string;       // Description
    // Add custom props here
    customColor?: string;
  }
  
  const SVGComponent: React.FunctionComponent<SVGProps>;
  export default SVGComponent;
}
```

---

### Conditional Styling

```tsx
// Dynamic className
<PhoneFill 
  className={`w-6 h-6 ${isActive ? 'text-blue-600' : 'text-gray-400'}`}
/>

// With tailwind-merge (recommended)
import { cn } from "@/lib/utils";

<PhoneFill 
  className={cn(
    "w-6 h-6",
    isActive && "text-blue-600",
    !isActive && "text-gray-400"
  )}
/>
```

---

### Animation

```tsx
// CSS animation
<PhoneFill className="w-6 h-6 animate-spin" />

// Tailwind transitions
<PhoneFill className="w-6 h-6 transition-colors hover:text-blue-600" />

// Custom animation
<PhoneFill 
  className="w-6 h-6"
  style={{
    animation: "pulse 2s infinite"
  }}
/>
```

---

## 🎨 Styling Best Practices

### 1. Use currentColor for fill
```tsx
// ✅ Good: Kế thừa màu từ parent
<div className="text-blue-600">
  <PhoneFill fill="currentColor" className="w-6 h-6" />
</div>

// ❌ Bad: Hard-coded color
<PhoneFill fill="#3b82f6" className="w-6 h-6" />
```

### 2. Consistent sizing
```tsx
// ✅ Good: Dùng Tailwind size classes
<PhoneFill className="w-6 h-6" />   // 24x24px
<PhoneFill className="w-8 h-8" />   // 32x32px

// ❌ Bad: Inline styles không consistent
<PhoneFill width="23" height="25" />
```

### 3. Responsive sizing
```tsx
// ✅ Good: Responsive classes
<PhoneFill className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />

// ✅ Good: rem-based sizing
<PhoneFill className="w-6 h-6 text-base md:text-lg" />
```

---

## 🐛 Troubleshooting

### Issue: className không hoạt động

**Giải pháp:**
1. Check SVGR config có `addAttributesToSVGElement`
2. Xóa `.next` cache: `rm -rf .next`
3. Rebuild: `pnpm dev`

### Issue: fill/stroke không override được

**Giải pháp:**
1. Check `removeUnknownsAndDefaults: false`
2. Use `fill="currentColor"` instead of hardcoded colors
3. Check SVG source có `fill` hoặc `stroke` không

### Issue: Icon không hiển thị

**Giải pháp:**
1. Add `viewBox` nếu thiếu
2. Check `w-*` và `h-*` classes
3. Inspect element xem SVG có render không

---

## 📚 References

- [SVGR Documentation](https://react-svgr.com/docs/options/)
- [SVGO Plugins](https://github.com/svg/svgo#built-in-plugins)
- [SVG Accessibility](https://www.w3.org/WAI/tutorials/images/)
- [Tailwind SVG Styling](https://tailwindcss.com/docs/fill)

---

**Last Updated:** 2025-11-05  
**Config Version:** 1.0.0

