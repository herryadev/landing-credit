# react-icons - Hướng Dẫn Sử Dụng

## 🚀 Quick Start

### Installation
```bash
pnpm add react-icons
```

### Basic Usage
```tsx
import { IoCall, IoChatbubbles } from "react-icons/io5";

function MyComponent() {
  return (
    <div>
      <IoCall className="w-6 h-6 text-blue-600" />
      <IoChatbubbles className="w-8 h-8 text-green-500" />
    </div>
  );
}
```

---

## 📚 Icon Sets Được Dùng Trong Project

### 1. Ionicons 5 (io5) - Primary Choice

**Import:** `react-icons/io5`

**Phong cách:** Modern, clean, filled style

**Icons đang dùng:**
- `IoCall` - Phone icon
- `IoChatbubbles` - Chat icon
- `IoMail` - Email icon
- `IoLocation` - Location/Map pin
- `IoTime` - Clock icon
- `IoCheckmark` - Checkmark
- `IoCheckmarkCircle` - Check circle
- `IoCloseCircle` - Close circle
- `IoSend` - Send/Submit icon
- `IoArrowForward` - Right arrow
- `IoArrowUp` - Up arrow
- `IoFlash` - Lightning/Fast icon
- `IoLockClosed` - Lock/Security icon
- `IoPeople` - Group/Users icon
- `IoSparkles` - Star/Special icon
- `IoPencil` - Edit/Pencil icon

**Example:**
```tsx
import { IoCall, IoChatbubbles, IoMail } from "react-icons/io5";

<IoCall className="w-5 h-5 text-blue-700" />
<IoChatbubbles className="w-6 h-6 text-green-600" />
<IoMail className="w-5 h-5 text-red-600" />
```

---

### 2. Font Awesome (fa) - Secondary Choice

**Import:** `react-icons/fa`

**Phong cách:** Classic, comprehensive, solid style

**Icons đang dùng:**
- `FaCar` - Car icon
- `FaMoneyBillWave` - Cash/Money icon
- `FaBuilding` - Building icon
- `FaGift` - Gift/Celebrate icon
- `FaCreditCard` - Credit card/Bank card icon

**Example:**
```tsx
import { FaCar, FaMoneyBillWave, FaBuilding } from "react-icons/fa";

<FaCar className="w-8 h-8 text-gray-700" />
<FaMoneyBillWave className="w-6 h-6 text-green-600" />
<FaBuilding className="w-7 h-7 text-blue-700" />
```

---

## 🎨 Styling với Tailwind

### Size Classes
```tsx
// Small (16x16px)
<IoCall className="w-4 h-4" />

// Medium (20x20px)
<IoCall className="w-5 h-5" />

// Regular (24x24px)
<IoCall className="w-6 h-6" />

// Large (32x32px)
<IoCall className="w-8 h-8" />

// XL (48x48px)
<IoCall className="w-12 h-12" />
```

### Colors
```tsx
// Text color
<IoCall className="w-6 h-6 text-blue-600" />
<IoCall className="w-6 h-6 text-red-500" />
<IoCall className="w-6 h-6 text-green-700" />

// currentColor (inherit từ parent)
<div className="text-blue-600">
  <IoCall className="w-6 h-6" />
</div>
```

### Hover Effects
```tsx
<IoCall className="w-6 h-6 text-blue-600 hover:text-blue-800 transition" />

<IoCall className="w-6 h-6 text-gray-600 hover:text-blue-600 hover:scale-110 transition-all" />
```

### Responsive
```tsx
// Mobile 20px, Desktop 24px
<IoCall className="w-5 h-5 md:w-6 md:h-6" />

// Mobile 24px, Tablet 32px, Desktop 48px
<IoCall className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />
```

---

## 💡 Common Patterns

### 1. Button với Icon
```tsx
<button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
  <IoCall className="w-5 h-5" />
  <span>Gọi ngay</span>
</button>
```

### 2. Icon-only Button
```tsx
<button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
  <IoCall className="w-5 h-5" />
</button>
```

### 3. Link với Icon
```tsx
<a href="tel:0354064124" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
  <IoCall className="w-5 h-5" />
  035 406 4124
</a>
```

### 4. Icon trong List
```tsx
<ul className="space-y-2">
  <li className="flex items-center gap-2">
    <IoCheckmark className="w-5 h-5 text-green-600" />
    <span>Uy tín hàng đầu</span>
  </li>
  <li className="flex items-center gap-2">
    <IoCheckmark className="w-5 h-5 text-green-600" />
    <span>Chi phí từ 1.2%</span>
  </li>
</ul>
```

### 5. Dynamic Icon Components
```tsx
import { IoCall, IoPencil, FaCar } from "react-icons";

const steps = [
  { icon: IoCall, title: "Call" },
  { icon: IoPencil, title: "Edit" },
  { icon: FaCar, title: "Drive" }
];

{steps.map((step, index) => {
  const IconComponent = step.icon;
  return (
    <div key={index}>
      <IconComponent className="w-8 h-8 text-blue-700" />
      <span>{step.title}</span>
    </div>
  );
})}
```

### 6. Floating Action Button
```tsx
<a
  href="tel:0354064124"
  className="fixed bottom-6 right-6 bg-blue-700 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-800 animate-bounce"
>
  <IoCall className="w-6 h-6" />
</a>
```

---

## 🔍 Tìm Icons

### 1. Browse Website
Truy cập: https://react-icons.github.io/react-icons/

### 2. Search Icons
1. Vào website
2. Gõ keyword (e.g., "phone", "mail", "car")
3. Filter theo icon set (io5, fa, etc.)
4. Click icon để copy import code

### 3. Recommended Icons by Category

**Contact/Communication:**
- `IoCall`, `IoMail`, `IoChatbubbles`, `IoSend`

**Navigation:**
- `IoArrowForward`, `IoArrowBack`, `IoArrowUp`, `IoArrowDown`

**Actions:**
- `IoCheckmark`, `IoClose`, `IoPencil`, `IoTrash`

**UI Elements:**
- `IoMenu`, `IoSettings`, `IoSearch`, `IoFilter`

**Status:**
- `IoCheckmarkCircle` (success)
- `IoCloseCircle` (error)
- `IoInformationCircle` (info)
- `IoWarning` (warning)

**Business:**
- `FaCreditCard`, `FaMoneyBillWave`, `FaBuilding`, `FaCar`

---

## ⚙️ Props & Customization

### Default Props
```tsx
<IoCall 
  size={24}                    // Size in pixels
  color="blue"                 // Color (prefer Tailwind classes)
  className="w-6 h-6"          // Tailwind classes (recommended)
  title="Call us"              // Tooltip text
  aria-label="Phone icon"      // Accessibility
  style={{ marginTop: '4px' }} // Inline styles
/>
```

### Size Prop
```tsx
<IoCall size={16} />  // 16x16px
<IoCall size={24} />  // 24x24px (default)
<IoCall size={32} />  // 32x32px
<IoCall size={48} />  // 48x48px
```

### Color Prop
```tsx
<IoCall color="blue" />
<IoCall color="#3b82f6" />
<IoCall color="rgb(59, 130, 246)" />

// ⚠️ Lưu ý: Prefer Tailwind classes
<IoCall className="text-blue-600" />  // ← Recommended
```

---

## 🎯 Best Practices

### 1. ✅ DO: Dùng Tailwind classes
```tsx
<IoCall className="w-6 h-6 text-blue-600 hover:text-blue-800" />
```

### 2. ❌ DON'T: Dùng inline styles khi có thể
```tsx
<IoCall style={{ width: 24, height: 24, color: 'blue' }} />
```

### 3. ✅ DO: Import specific icons
```tsx
import { IoCall, IoChatbubbles } from "react-icons/io5";
```

### 4. ❌ DON'T: Import tất cả
```tsx
import * as Icons from "react-icons/io5"; // ← Bad
```

### 5. ✅ DO: Consistent sizing
```tsx
// Use same size across similar contexts
<IoCall className="w-6 h-6" />
<IoChatbubbles className="w-6 h-6" />
<IoMail className="w-6 h-6" />
```

### 6. ✅ DO: Accessibility
```tsx
<IoCall 
  className="w-6 h-6"
  aria-label="Phone icon"
  title="Call us"
/>
```

---

## 📦 Tree Shaking

react-icons **tự động tree-shake**. Chỉ icons bạn import sẽ được bundle.

**Example:**
```tsx
// Chỉ IoCall và IoChatbubbles được bundle
import { IoCall, IoChatbubbles } from "react-icons/io5";
```

**Bundle size:**
- ~5KB per icon (gzipped)
- Tree-shaking removes unused icons
- No manual optimization needed

---

## 🔧 TypeScript Support

react-icons có **built-in TypeScript support**:

```tsx
import { IoCall } from "react-icons/io5";
import { IconBaseProps } from "react-icons";

// Icon component props
const icon: IconBaseProps = {
  size: 24,
  color: "blue",
  className: "w-6 h-6"
};

// Custom component với icon
interface ButtonProps {
  icon: React.ComponentType<IconBaseProps>;
  label: string;
}

const IconButton: React.FC<ButtonProps> = ({ icon: Icon, label }) => {
  return (
    <button>
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );
};

<IconButton icon={IoCall} label="Call" />
```

---

## 🎨 Animation Examples

### 1. Bounce
```tsx
<IoCall className="w-6 h-6 animate-bounce" />
```

### 2. Pulse
```tsx
<IoCall className="w-6 h-6 animate-pulse" />
```

### 3. Spin
```tsx
<IoCall className="w-6 h-6 animate-spin" />
```

### 4. Scale on Hover
```tsx
<IoCall className="w-6 h-6 hover:scale-125 transition-transform" />
```

### 5. Rotate on Hover
```tsx
<IoCall className="w-6 h-6 hover:rotate-12 transition-transform" />
```

---

## 🔗 Links

- **Website:** https://react-icons.github.io/react-icons/
- **GitHub:** https://github.com/react-icons/react-icons
- **npm:** https://www.npmjs.com/package/react-icons
- **Search:** https://react-icons.github.io/react-icons/search

---

**Version:** 5.5.0  
**Last Updated:** 2025-11-05

