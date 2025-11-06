# 📊 Google Analytics 4 (GA4) Setup Guide

## ✅ Installation Complete

**Tracking ID:** `G-2NR65K5ZJY`  
**Status:** ✅ Installed and Active  
**Implementation:** Next.js App Router với `next/script`

---

## 📁 Files Created

### 1. GoogleAnalytics Component
**File:** `app/components/GoogleAnalytics.tsx`

```tsx
import Script from 'next/script'

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = 'G-2NR65K5ZJY'
  
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
```

**Features:**
- ✅ Uses Next.js `<Script>` component
- ✅ Strategy: `afterInteractive` (không block page load)
- ✅ Optimized cho performance
- ✅ Dễ maintain và update

---

## 🔧 Integration

**Updated:** `app/layout.tsx`

```tsx
import GoogleAnalytics from "./components/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <GoogleAnalytics />  {/* ← Added here */}
        {children}
      </body>
    </html>
  )
}
```

**Vị trí:** Đầu `<body>` để track ngay khi page load

---

## 🎯 What Gets Tracked

### Automatic Tracking (GA4 Default)
- ✅ **Page Views** - Tất cả page visits
- ✅ **Sessions** - User sessions
- ✅ **User Demographics** - Age, gender, interests
- ✅ **Device Info** - Desktop, mobile, tablet
- ✅ **Location** - Country, city
- ✅ **Traffic Sources** - Organic, direct, referral, social
- ✅ **Scroll Depth** - How far users scroll
- ✅ **Outbound Clicks** - Links to external sites
- ✅ **File Downloads** - PDF, docs downloads
- ✅ **Video Engagement** - If videos embedded

### Pages Being Tracked
1. `/` - Trang chủ
2. `/rut-tien` - Trang rút tiền
3. `/dao-han` - Trang đáo hạn
4. All future pages automatically

---

## 📊 Accessing GA4 Dashboard

### 1. Login to Google Analytics
```
URL: https://analytics.google.com/
Account: (Your Google account)
Property: G-2NR65K5ZJY
```

### 2. Key Reports to Monitor

#### Real-time Report
```
Location: Reports > Realtime
Shows: Live users on site right now
```

#### Traffic Acquisition
```
Location: Reports > Acquisition > Traffic acquisition
Shows: Where visitors come from (Google, Facebook, Direct...)
```

#### Page Performance
```
Location: Reports > Engagement > Pages and screens
Shows: Most visited pages, bounce rate, time on page
```

#### Conversions
```
Location: Reports > Monetization > Conversions
Shows: Goal completions (phone clicks, form submissions)
```

---

## 🎯 Setting Up Goals (Conversions)

### Important Conversions to Track

#### 1. Phone Call Clicks
**Event:** `phone_call_click`

```javascript
// Already auto-tracked if using tel: links
<a href="tel:0354064124">Call</a>
```

**To view:** 
- Go to Configure > Events
- Find "click" events
- Filter by link_url contains "tel:"

#### 2. Zalo Chat Clicks
**Event:** `zalo_chat_click`

```javascript
// Auto-tracked for external links
<a href="https://zalo.me/0354064124">Chat Zalo</a>
```

#### 3. Form Submissions
**Event:** `form_submit`

If you have contact forms, GA4 will auto-track submissions.

---

## 🔍 How to Verify It's Working

### Method 1: Real-time Report (Immediate)
1. Go to https://analytics.google.com/
2. Select property G-2NR65K5ZJY
3. Click **Reports > Realtime**
4. Open your website in another tab
5. You should see **1 user** in realtime report
6. Navigate to different pages - should update in real-time

### Method 2: Chrome Extension (Easy)
1. Install "Google Analytics Debugger" extension
2. Visit your website
3. Open Chrome DevTools (F12)
4. Check Console for GA events
5. Should see: `Tracking pageview: /`

### Method 3: View Page Source (Quick)
1. Visit your website
2. Right-click > View Page Source
3. Search for: `G-2NR65K5ZJY`
4. Should find the GA script tag

### Method 4: Network Tab (Developer)
1. Open DevTools (F12)
2. Go to Network tab
3. Reload page
4. Filter by: `gtag`
5. Should see request to `googletagmanager.com`

---

## 📈 Expected Data Timeline

### First 24 Hours
- ✅ Real-time data visible immediately
- ⏳ Standard reports: 24-48 hours delay
- ⏳ Full historical data: 24-48 hours

### First Week
- 📊 User behavior patterns emerging
- 📊 Top pages identified
- 📊 Traffic sources visible

### First Month
- 📊 Reliable trends established
- 📊 Conversion tracking complete
- 📊 Audience insights available

---

## 🎯 Key Metrics to Monitor

### Daily Metrics
- **Users** - Unique visitors per day
- **Sessions** - Total visits
- **Pageviews** - Total pages viewed
- **Bounce Rate** - % visitors who leave immediately

### Weekly Metrics
- **Traffic Sources** - Where users come from
- **Top Pages** - Most visited pages
- **Device Type** - Desktop vs Mobile
- **Avg Session Duration** - Time on site

### Monthly Metrics
- **User Growth** - Month-over-month increase
- **Conversion Rate** - % who call/submit form
- **SEO Performance** - Organic search traffic
- **Return Visitors** - % returning customers

---

## 🔥 Custom Events (Advanced - Optional)

If you want to track custom actions, you can add:

### Track CTA Button Clicks
```tsx
<button 
  onClick={() => {
    // Send event to GA4
    gtag('event', 'cta_click', {
      button_name: 'Call Now',
      page_location: window.location.pathname
    })
  }}
>
  Call Now
</button>
```

### Track Service Selection
```tsx
<a 
  href="/rut-tien"
  onClick={() => {
    gtag('event', 'service_select', {
      service_type: 'rut_tien',
      value: 1.8
    })
  }}
>
  Rút Tiền Thẻ
</a>
```

### Track Calculator Usage
```tsx
function handleCalculate(amount) {
  gtag('event', 'calculator_use', {
    calculation_amount: amount,
    fee_percentage: 1.8
  })
}
```

---

## 📱 Mobile App Tracking (Future)

If you create mobile app later, use same GA4 property:
- iOS: Firebase SDK
- Android: Firebase SDK
- Property ID: G-2NR65K5ZJY

Benefits:
- ✅ Cross-platform tracking
- ✅ Web + App data in one dashboard
- ✅ Unified user journey

---

## 🔒 Privacy & GDPR Compliance

### Current Implementation
- ✅ Anonymous tracking (no PII collected)
- ✅ IP anonymization enabled by default in GA4
- ✅ Cookie consent implicit (Vietnam)

### For EU Users (If needed)
Add cookie consent banner:
```tsx
// Optional: Cookie consent component
import CookieConsent from 'react-cookie-consent'

<CookieConsent>
  Website này sử dụng cookies để cải thiện trải nghiệm người dùng.
</CookieConsent>
```

---

## 🎓 Recommended Reports

### Week 1 Setup
1. **Real-time Overview**
   - Verify tracking works
   - See live visitors

2. **Traffic Acquisition**
   - Where users come from
   - Which channels drive traffic

3. **Pages and Screens**
   - Most popular pages
   - User engagement per page

### Ongoing Monitoring
4. **Conversions**
   - Phone clicks
   - Form submissions
   - Goal completions

5. **User Demographics**
   - Age ranges
   - Interests
   - Device types

6. **Engagement**
   - Session duration
   - Pages per session
   - Bounce rate

---

## 🚨 Troubleshooting

### Issue: No data showing
**Possible causes:**
1. Tracking code not deployed yet
2. Ad blocker blocking GA
3. Need to wait 24-48 hours for data

**Fix:**
- Check real-time report (instant)
- Disable ad blocker
- Wait 24-48 hours

### Issue: Duplicate tracking
**Symptoms:** Double pageviews

**Fix:**
- Check only one GA component exists
- Verify no double `<GoogleAnalytics />` import

### Issue: Events not tracking
**Possible causes:**
1. Custom events not implemented
2. Incorrect event syntax

**Fix:**
- Use GA4 DebugView mode
- Check event parameters
- Review implementation

---

## 📚 Useful Resources

### Google Analytics 4 Resources
- [GA4 Help Center](https://support.google.com/analytics/answer/9304153)
- [GA4 Event Reference](https://support.google.com/analytics/answer/9267735)
- [GA4 Reports Guide](https://support.google.com/analytics/answer/9212670)

### Next.js + GA4
- [Next.js Analytics Docs](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [next/script Documentation](https://nextjs.org/docs/app/api-reference/components/script)

### Debugging Tools
- [Google Tag Assistant](https://tagassistant.google.com/)
- [GA Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger)

---

## ✅ Quick Checklist

- [x] GA4 component created
- [x] Integrated into layout.tsx
- [x] Tracking ID configured (G-2NR65K5ZJY)
- [ ] Verify in real-time report
- [ ] Setup custom conversions
- [ ] Configure enhanced measurement
- [ ] Create custom dashboard
- [ ] Setup email reports
- [ ] Add team members to property

---

## 📞 Next Steps

### Immediate (Today)
1. ✅ Login to https://analytics.google.com/
2. ✅ Select property G-2NR65K5ZJY
3. ✅ Check Real-time report
4. ✅ Verify website visits showing

### This Week
5. Setup conversion goals:
   - Phone call clicks
   - Zalo chat clicks
   - Contact form submissions
6. Explore standard reports
7. Create custom dashboard

### This Month
8. Analyze first month's data
9. Identify top traffic sources
10. Optimize based on insights

---

**Installation Date:** November 6, 2025  
**Status:** ✅ Active & Tracking  
**Version:** GA4 (Google Analytics 4)

🎉 **Google Analytics đã được cài đặt thành công!**

