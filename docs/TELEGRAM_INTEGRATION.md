# Hướng Dẫn Tích Hợp Telegram Bot

## 📋 Tổng Quan

Hệ thống này sẽ tự động gửi thông tin từ form liên hệ vào group Telegram của bạn thông qua Telegram Bot API.

## 🚀 Các Bước Cài Đặt

### Bước 1: Tạo Telegram Bot

1. Mở Telegram và tìm kiếm **@BotFather**
2. Gửi lệnh `/newbot`
3. Đặt tên cho bot (ví dụ: "Rút Thẻ Notification Bot")
4. Đặt username cho bot (phải kết thúc bằng "bot", ví dụ: "ruttthe_notification_bot")
5. BotFather sẽ trả về **Bot Token** có dạng:
   ```
   1234567890:ABCdefGHIjklMNOpqrsTUVwxyz123456789
   ```
6. **LƯU LẠI TOKEN NÀY** - đây là `TELEGRAM_BOT_TOKEN`

### Bước 2: Tạo Group và Thêm Bot

1. Tạo một group Telegram mới (hoặc dùng group có sẵn)
2. Thêm bot vừa tạo vào group:
   - Click vào tên group → Add members
   - Tìm tên bot của bạn và thêm vào
3. **Quan trọng**: Đảm bảo bot có quyền gửi tin nhắn trong group

### Bước 3: Lấy Chat ID

Có 2 cách để lấy Chat ID:

#### Cách 1: Sử dụng getUpdates API

1. Gửi một tin nhắn bất kỳ vào group (ví dụ: "test")
2. Mở trình duyệt và truy cập URL sau (thay `YOUR_BOT_TOKEN` bằng token thực):
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
3. Tìm phần `"chat":{"id":-1001234567890}` trong response
4. Số ID có dấu **âm** là Chat ID của group (ví dụ: `-1001234567890`)

#### Cách 2: Sử dụng Bot Helper

1. Thêm bot **@userinfobot** vào group
2. Bot sẽ tự động gửi thông tin group, bao gồm Chat ID
3. Lưu lại Chat ID (có dấu âm)

### Bước 4: Tạo File .env.local

1. Trong thư mục root của project, tạo file mới tên `.env.local`
2. Thêm nội dung sau vào file:

```env
# Telegram Bot Token (lấy từ BotFather)
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz123456789

# Chat ID của group (có dấu âm)
TELEGRAM_CHAT_ID=-1001234567890
```

3. Thay thế giá trị placeholder bằng thông tin thực tế của bạn
4. **Lưu file**

### Bước 5: Restart Server

```bash
# Tắt server đang chạy (Ctrl+C) và khởi động lại
pnpm dev
```

## ✅ Kiểm Tra Hoạt Động

1. Mở website của bạn
2. Điền form liên hệ và submit
3. Kiểm tra group Telegram - bạn sẽ thấy tin nhắn thông báo với format:

```
🔔 LIÊN HỆ MỚI TỪ WEBSITE

👤 Họ tên: Nguyễn Văn A
📱 Số điện thoại: 0123456789
📧 Email: example@email.com
🛠 Dịch vụ: Rút thẻ tín dụng
💬 Ghi chú: Cần tư vấn thêm

⏰ Thời gian: 06/11/2025, 10:30:45
```

## 🔧 Cấu Trúc Code

### API Route
- **File**: `app/api/send-telegram/route.ts`
- **Endpoint**: `POST /api/send-telegram`
- **Chức năng**: Nhận data từ form và gửi đến Telegram

### Component
- **File**: `app/components/ContactForm.tsx`
- **Chức năng**: Form UI và gọi API khi submit

## 🔒 Bảo Mật

- ✅ File `.env.local` đã được thêm vào `.gitignore` - không bị commit lên Git
- ✅ Bot Token và Chat ID được lưu an toàn trong environment variables
- ✅ Không expose thông tin nhạy cảm ra client-side

## ❗ Xử Lý Lỗi

### Lỗi: "Server configuration error"
- **Nguyên nhân**: Thiếu hoặc sai `TELEGRAM_BOT_TOKEN` hoặc `TELEGRAM_CHAT_ID`
- **Giải pháp**: Kiểm tra lại file `.env.local` và restart server

### Lỗi: "Failed to send message"
- **Nguyên nhân**: 
  - Bot chưa được thêm vào group
  - Bot không có quyền gửi tin nhắn
  - Chat ID sai
- **Giải pháp**: 
  - Kiểm tra bot có trong group không
  - Đảm bảo Chat ID đúng (có dấu âm cho group)

### Form hiển thị lỗi "Có lỗi xảy ra"
- Mở Console (F12) để xem chi tiết lỗi
- Kiểm tra Network tab để xem response từ API

## 📝 Tùy Chỉnh

### Thay Đổi Format Tin Nhắn

Edit file `app/api/send-telegram/route.ts`, phần `telegramMessage`:

```typescript
const telegramMessage = `
🔔 <b>TIÊU ĐỀ TÙY CHỈNH</b>

👤 <b>Tên:</b> ${name}
// Thêm/sửa các trường khác...
`;
```

### Thêm Emoji/Icon Khác

Telegram hỗ trợ đầy đủ emoji Unicode. Chỉ cần copy emoji và paste vào string.

### Gửi Đến Nhiều Group

Sửa file API route để gửi đến nhiều Chat ID:

```typescript
const chatIds = [
  process.env.TELEGRAM_CHAT_ID_1,
  process.env.TELEGRAM_CHAT_ID_2,
];

for (const chatId of chatIds) {
  await fetch(telegramApiUrl, {
    // ... send to each chat
  });
}
```

## 🆘 Hỗ Trợ

Nếu gặp vấn đề, kiểm tra:
1. Bot Token có đúng không?
2. Chat ID có đúng và có dấu âm không?
3. Bot có trong group không?
4. Server đã restart sau khi tạo `.env.local` chưa?
5. Console có báo lỗi gì không?

---

**Lưu ý**: Không bao giờ commit file `.env.local` lên Git hoặc chia sẻ Bot Token với người khác!

