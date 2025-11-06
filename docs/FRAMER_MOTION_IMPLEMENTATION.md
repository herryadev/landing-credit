# Framer Motion Implementation - Landing Page Animation

## Tổng quan
Đã tích hợp thư viện **Framer Motion** vào toàn bộ landing page để tạo trải nghiệm người dùng sinh động, mượt mà và chuyên nghiệp.

## Cài đặt
```bash
pnpm add framer-motion@12.23.24
```

## Cấu trúc File Mới

### 1. Utilities & Hooks

#### `app/utils/animations.ts`
Chứa các animation variants có thể tái sử dụng:
- `fadeIn` - Fade in đơn giản
- `fadeInUp` - Fade in từ dưới lên
- `fadeInDown` - Fade in từ trên xuống
- `fadeInLeft` - Fade in từ trái sang
- `fadeInRight` - Fade in từ phải sang
- `scaleIn` - Scale up khi xuất hiện
- `slideDown` - Slide xuống với height auto
- `staggerContainer` - Container cho stagger animation
- `floatingAnimation` - Animation floating cho images
- `pulseAnimation` - Pulse effect

#### `app/hooks/useInView.ts`
Custom hook để detect khi element xuất hiện trong viewport
- Sử dụng IntersectionObserver API
- Trigger animation một lần khi element vào viewport
- Auto unobserve sau khi triggered

#### `app/hooks/useCounter.ts`
Custom hook cho number counter animation
- Animate số từ 0 đến target number
- Configurable duration
- Trigger khi element vào viewport

## Animation Implementation Chi Tiết

### 1. Header (`app/components/Header.tsx`)
**Animations:**
- ✅ Fade in + slide down khi page load
- ✅ Logo fade in với delay
- ✅ Menu items stagger animation
- ✅ Hover effect với scale
- ✅ Mobile menu slide down/up với AnimatePresence
- ✅ Tap effect trên buttons

**Key Features:**
- Smooth navigation menu appearance
- Interactive hover states
- Mobile menu animation với height transition

### 2. Hero Section (`app/components/Hero.tsx`)
**Animations:**
- ✅ Badge quảng cáo: Scale + pulse effect
- ✅ Gift icon: Shake animation lặp lại
- ✅ Heading: Stagger animation (từng element xuất hiện)
- ✅ CTA Buttons: Hover scale + tap effect
- ✅ Trust indicators: Sequential fade in
- ✅ Hero image: Floating animation (lên xuống liên tục)

**Key Features:**
- Eye-catching promotional badge
- Sequential content reveal
- Smooth floating hero image

### 3. About Section (`app/components/About.tsx`)
**Animations:**
- ✅ Scroll-triggered animations
- ✅ Decorative shapes: Floating animation với rotation
- ✅ Section header: Stagger fade in
- ✅ Feature cards: Stagger animation + hover lift
- ✅ Icons: Rotate 360° on hover
- ✅ CTA section: Delayed fade in

**Key Features:**
- Ambient animated decorations
- Interactive feature cards
- Smooth scroll reveals

### 4. Services Section (`app/components/Services.tsx`)
**Animations:**
- ✅ Scroll-triggered animations
- ✅ Section header: Stagger fade in
- ✅ Service cards: Stagger animation
- ✅ Icons: Shake animation on hover
- ✅ Buttons: Scale effect on hover/tap

**Key Features:**
- Professional service card reveals
- Interactive icon animations
- Smooth hover transitions

### 5. Process Section (`app/components/Process.tsx`)
**Animations:**
- ✅ Scroll-triggered animations
- ✅ Decorative shapes: Floating animation
- ✅ Step cards: Stagger animation
- ✅ Step badges: Spring animation với delay
- ✅ Icons: Rotate 360° on hover
- ✅ Arrows: Fade in với delay
- ✅ CTA section: Delayed fade in

**Key Features:**
- Clear step-by-step visualization
- Spring animation for badges
- Connecting arrows animation

### 6. Stats Section (`app/components/Stats.tsx`)
**Animations:**
- ✅ Scroll-triggered animations
- ✅ Number counter animation (0 → target)
- ✅ Stat cards: Scale in animation
- ✅ Icons: Rotate 360° on hover
- ✅ Cards: Lift on hover
- ✅ CTA section: Scale + fade in

**Key Features:**
- **Impressive number counter effect**
- Dynamic statistics reveal
- Professional stat cards

### 7. Contact Form (`app/components/ContactForm.tsx`)
**Animations:**
- ✅ Scroll-triggered animations
- ✅ Section header: Stagger fade in
- ✅ Form container: Delayed fade in
- ✅ Submit button: Scale on hover/tap
- ✅ Success/Error messages: AnimatePresence với slide
- ✅ Contact method cards: Stagger + hover effect
- ✅ Icons: Rotate 360° on hover

**Key Features:**
- Smooth form appearance
- Animated success/error feedback
- Interactive contact cards

### 8. Footer (`app/components/Footer.tsx`)
**Animations:**
- ✅ Scroll-triggered animations
- ✅ Footer columns: Stagger fade in
- ✅ Links: Slide right on hover
- ✅ CTA banner: Delayed fade in
- ✅ Floating Action Buttons:
  - Call button: Continuous bounce animation
  - Zalo button: Scale + color change on hover
  - Scroll to top: Scale on hover

**Key Features:**
- Professional footer reveal
- Persistent floating action buttons
- Smooth hover interactions

## Animation Patterns Sử Dụng

### 1. Scroll-Triggered Animations
```typescript
const { ref, isInView } = useInView();

<motion.div
  ref={ref}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={staggerContainer}
>
```

### 2. Stagger Animation
```typescript
<motion.div variants={staggerContainer}>
  {items.map((item, index) => (
    <motion.div key={index} variants={fadeInUp}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### 3. Hover Effects
```typescript
<motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  whileTap={{ scale: 0.95 }}
>
```

### 4. Continuous Animation
```typescript
<motion.div
  animate={{ 
    y: [0, -15, 0],
    rotate: [0, 5, 0]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
```

### 5. Number Counter
```typescript
const count = useCounter(targetNumber, 2000, isInView);
<div>{count}+</div>
```

## Performance Optimizations

1. **IntersectionObserver**: Chỉ animate khi element vào viewport
2. **One-time animations**: Unobserve sau khi triggered để tránh re-render
3. **Will-change CSS**: Framer Motion tự động optimize
4. **RequestAnimationFrame**: Number counter sử dụng rAF

## Timing & Delays

- Header: 0.6s fade in
- Hero content: Staggered 0.1s per item
- Section headers: 0.2s delay
- Cards: Staggered 0.05-0.1s per card
- Floating animations: 3-5s duration
- Number counters: 2s duration

## Browser Support

Framer Motion hỗ trợ:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Best Practices Đã Áp Dụng

1. ✅ Consistent animation timing
2. ✅ Subtle, không quá phô trương
3. ✅ Performance-focused với scroll triggers
4. ✅ Accessibility-friendly (respects prefers-reduced-motion)
5. ✅ Reusable animation variants
6. ✅ Type-safe với TypeScript
7. ✅ Mobile-optimized animations

## Kết Quả

Landing page giờ đây có:
- ✨ Smooth page load animations
- ✨ Engaging scroll experience
- ✨ Interactive hover states
- ✨ Professional number counters
- ✨ Floating elements tạo depth
- ✨ Consistent animation language
- ✨ Better user engagement

## Next Steps (Tùy chọn)

1. Add page transition animations
2. Implement parallax scrolling
3. Add more micro-interactions
4. Custom cursor effects
5. Loading skeleton screens

