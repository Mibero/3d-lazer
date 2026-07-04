import { NextResponse } from "next/server";

// API-роут для отправки заявки в Telegram
// Все переменные окружения хранятся в .env.local

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, comment } = body;

    // Валидация обязательных полей
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Имя и телефон обязательны" },
        { status: 400 }
      );
    }

    // Формируем сообщение для Telegram
    const message = [
      `📩 *Новая заявка с сайта*`,
      ``,
      `👤 *Имя:* ${name}`,
      `📱 *Телефон:* ${phone}`,
      email ? `📧 *Email:* ${email}` : null,
      comment ? `💬 *Комментарий:* ${comment}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    // Отправляем в Telegram
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { error: "Сервис временно недоступен" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      console.error("Telegram API error:", await response.text());
      return NextResponse.json(
        { error: "Ошибка отправки" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
