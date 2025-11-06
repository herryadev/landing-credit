import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Validate required fields
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get Telegram credentials from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Missing Telegram configuration");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Map service types to Vietnamese labels
    const serviceLabels: Record<string, string> = {
      "rut-the": "Rút thẻ tín dụng",
      "dao-han": "Đáo hạn thẻ",
      "tu-van": "Tư vấn chung",
      khac: "Dịch vụ khác",
    };

    // Format message for Telegram
    const telegramMessage = `
🔔 <b>LIÊN HỆ MỚI TỪ WEBSITE</b>

👤 <b>Họ tên:</b> ${name}
📱 <b>Số điện thoại:</b> <code>${phone}</code>
${`📧 <b>Email:</b> <code>${email ? email : "..."}</code>`}
🛠 <b>Dịch vụ:</b> ${serviceLabels[service] || service}
${message ? `💬 <b>Ghi chú:</b> ${message}` : ""}

⏰ <b>Thời gian:</b> ${new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    })}
    `.trim();

    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const telegramResponse = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    });

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending telegram message:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
