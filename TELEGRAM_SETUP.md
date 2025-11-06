# ⚡ Hướng Dẫn Cài Đặt Telegram Bot - Nhanh

## 📝 Tóm Tắt

Khi người dùng submit form trên website, thông tin sẽ tự động gửi vào group Telegram.

## 🎯 3 Bước Cài Đặt

### 1️⃣ Tạo Bot với BotFather

```
1. Mở Telegram → Tìm @BotFather
2. Gửi: /newbot
3. Đặt tên: "Rút Thẻ Notification"
4. Đặt username: "rutthe_notify_bot"
5. Nhận Token: 1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
```

### 2️⃣ Lấy Chat ID

```
1. Tạo group Telegram mới
2. Thêm bot vào group
3. Gửi tin nhắn: "test" vào group
4. Truy cập: https://api.telegram.org/bot<TOKEN>/getUpdates
5. Copy Chat ID (số âm): -1001234567890
```

### 3️⃣ Cập Nhật File .env.local

Mở file `.env.local` ở root project và sửa:

```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=-1001234567890
```

## ✅ Hoàn Tất

```bash
# Restart server
pnpm dev
```

Test bằng cách submit form trên website!

---

📚 **Xem hướng dẫn chi tiết**: `docs/TELEGRAM_INTEGRATION.md`

