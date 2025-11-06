# Migration: Custom SVG → react-icons

## 📋 Tổng Quan

Đã migrate từ custom SVG files với @svgr/webpack sang **[react-icons](https://react-icons.github.io/react-icons/)** - Thư viện icons phổ biến nhất cho React.

### ✅ Lợi Ích

- 🚀 **Đơn giản hơn**: Không cần config webpack phức tạp
- ⚡ **Hoạt động với Turbopack**: Next.js 16 default build
- 📦 **Nhẹ hơn**: Tree-shaking tự động
- 🎨 **Nhiều icons hơn**: 50,000+ icons từ 24+ icon sets
- 🔧 **Dễ maintain**: Import trực tiếp, không cần quản lý SVG files
- 💯 **TypeScript support**: Built-in types

---

## 🔄 Những Gì Đã Thay Đổi

### 1. Removed
- ❌ `@svgr/webpack` package
- ❌ Custom webpack config trong `next.config.ts`
- ❌ `svg.d.ts` TypeScript declarations
- ❌ Path alias `@svg/*`
- ❌ Custom SVG files trong `app/assets/svg/`

### 2. Added
- ✅ `react-icons` package (5.5.0)
- ✅ Simple clean `next.config.ts`
- ✅ Import từ `react-icons/io5` và `react-icons/fa`

### 3. Scripts Changed
**Before:**
```json
{
  "dev": "next dev --webpack",
  "build": "next build --webpack"
}
```

**After:**
```json
{
  "dev": "next dev",      // ← Turbopack works!
  "build": "next build"   // ← Turbopack default
}
```

---

## 📊 Icon Mapping

| Old SVG | New react-icons | Package |
|---------|----------------|---------|
| `phone_fill.svg` | `IoCall` | `io5` |
| `chat_1_fill.svg` | `IoChatbubbles` | `io5` |
| `mail_fill.svg` | `IoMail` | `io5` |
| `location_fill.svg` | `IoLocation` | `io5` |
| `clock_fill.svg` | `IoTime` | `io5` |
| `check_fill.svg` | `IoCheckmark` | `io5` |
| `check_circle_fill.svg` | `IoCheckmarkCircle` | `io5` |
| `close_circle_fill.svg` | `IoCloseCircle` | `io5` |
| `send_fill.svg` | `IoSend` | `io5` |
| `arrow_right_fill.svg` | `IoArrowForward` | `io5` |
| `arrow_up_fill.svg` | `IoArrowUp` | `io5` |
| `lightning_fill.svg` | `IoFlash` | `io5` |
| `lock_fill.svg` | `IoLockClosed` | `io5` |
| `sparkles_fill.svg` | `IoSparkles` | `io5` |
| `group_fill.svg` | `IoPeople` | `io5` |
| `pencil_fill.svg` | `IoPencil` | `io5` |
| `car_fill.svg` | `FaCar` | `fa` |
| `cash_fill.svg` | `FaMoneyBillWave` | `fa` |
| `building_1_fill.svg` | `FaBuilding` | `fa` |
| `celebrate_fill.svg` | `FaGift` | `fa` |
| `bank_card_fill.svg` | `FaCreditCard` | `fa` |

---

## 💻 Code Changes

### Before (Custom SVG)

```tsx
import PhoneFill from "@svg/contact/phone_fill.svg";
import ChatFill from "@svg/contact/chat_1_fill.svg";

<PhoneFill className="w-6 h-6 text-blue-600" />
<ChatFill className="w-8 h-8 text-green-500" />
```

### After (react-icons)

```tsx
import { IoCall, IoChatbubbles } from "react-icons/io5";

<IoCall className="w-6 h-6 text-blue-600" />
<IoChatbubbles className="w-8 h-8 text-green-500" />
```

---

## 📁 Files Changed

### Components Updated
1. ✅ `Header.tsx` - IoCall
2. ✅ `Hero.tsx` - IoCall, IoChatbubbles, FaGift, IoCheckmark
3. ✅ `About.tsx` - FaBuilding, FaCar, FaMoneyBillWave, IoTime
4. ✅ `Services.tsx` - IoCheckmarkCircle, IoFlash, IoLockClosed
5. ✅ `Process.tsx` - IoCall, IoPencil, FaCar, FaMoneyBillWave
6. ✅ `Stats.tsx` - FaCreditCard, FaCar, IoPeople, IoSparkles
7. ✅ `ContactForm.tsx` - IoSend, IoCheckmarkCircle, IoCloseCircle, IoLocation
8. ✅ `Footer.tsx` - IoCall, IoMail, IoLocation, IoArrowForward, IoArrowUp

### Config Files
- ✅ `next.config.ts` - Simplified to default
- ✅ `package.json` - Removed webpack flags
- ✅ `tsconfig.json` - Removed `@svg/*` alias (kept `@/*`)
- ❌ `svg.d.ts` - Deleted

---

## 🚀 How to Use react-icons

### 1. Basic Usage

```tsx
import { IoCall } from "react-icons/io5";

<IoCall className="w-6 h-6" />
```

### 2. With Tailwind Classes

```tsx
import { IoCall } from "react-icons/io5";

<IoCall className="w-6 h-6 text-blue-600 hover:text-blue-800" />
```

### 3. Multiple Icons

```tsx
import { IoCall, IoChatbubbles, IoMail } from "react-icons/io5";
import { FaCar, FaBuilding } from "react-icons/fa";

<IoCall className="w-5 h-5" />
<IoChatbubbles className="w-5 h-5" />
<FaCar className="w-8 h-8" />
```

### 4. With Props

```tsx
<IoCall 
  className="w-6 h-6"
  color="blue"
  size={24}
  title="Call us"
  aria-label="Phone icon"
/>
```

### 5. Dynamic Icons (trong arrays)

```tsx
import { IoCall, IoPencil } from "react-icons/io5";

const steps = [
  { icon: IoCall, title: "Call" },
  { icon: IoPencil, title: "Edit" }
];

{steps.map((step, index) => {
  const IconComponent = step.icon;
  return <IconComponent className="w-8 h-8" />
})}
```

---

## 🎨 Available Icon Sets

react-icons supports 50,000+ icons from:

- **Ionicons 5 (io5)** - Modern, clean ← **Primary choice**
- **Font Awesome (fa)** - Classic, comprehensive ← **Secondary choice**
- Material Design (md)
- Heroicons (hi)
- Bootstrap Icons (bs)
- Feather (fi)
- ...và 20+ sets khác

**Browse all icons:** https://react-icons.github.io/react-icons/

---

## 📦 Installation

```bash
pnpm add react-icons
# or
npm install react-icons
# or
yarn add react-icons
```

---

## ✨ Benefits Comparison

| Feature | Custom SVG + @svgr/webpack | react-icons |
|---------|---------------------------|-------------|
| Setup complexity | ⚠️ Complex webpack config | ✅ Zero config |
| Turbopack support | ❌ Not supported | ✅ Full support |
| Tree-shaking | ✅ Yes | ✅ Yes |
| TypeScript | ⚠️ Manual declarations | ✅ Built-in |
| Icons available | ~100 (custom) | 50,000+ |
| Maintenance | ⚠️ Manual file management | ✅ npm update |
| Bundle size | Medium | Small (on-demand) |
| Dev experience | ⚠️ Slow (webpack) | ✅ Fast (Turbopack) |

---

## 🐛 Troubleshooting

### Issue: Icon không hiển thị

**Check:**
1. Import đúng package? `io5` hay `fa`?
2. Có thêm `className` với size? (`w-6 h-6`)
3. Check console errors

### Issue: TypeScript errors

**Solution:**
```bash
# Clear cache và rebuild
rm -rf .next node_modules/.cache
pnpm dev
```

### Issue: Icons too small/large

**Solution:**
```tsx
// Use Tailwind size classes
<IoCall className="w-6 h-6" />  // 24x24px
<IoCall className="w-8 h-8" />  // 32x32px

// Or use size prop
<IoCall size={24} />
<IoCall size={32} />
```

---

## 🔗 Resources

- [react-icons Website](https://react-icons.github.io/react-icons/)
- [react-icons GitHub](https://github.com/react-icons/react-icons)
- [Icon Search](https://react-icons.github.io/react-icons/search)
- [Ionicons 5 Docs](https://ionic.io/ionicons)
- [Font Awesome Docs](https://fontawesome.com/)

---

**Migration Date:** 2025-11-05  
**react-icons Version:** 5.5.0  
**Status:** ✅ Complete & Tested

