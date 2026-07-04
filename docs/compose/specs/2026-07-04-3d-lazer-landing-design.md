# Спецификация: Сайт-лендинг «3D Лазер Лаборатория»

## [S1] Обзор проекта

Одностраничный лендинг для мастерской «3D Лазер Лаборатория», специализирующейся на лазерных технологиях (резка, гравировка) и 3D-печати. Домен: 3d-lazer.moscow. Хостинг: Vercel через GitHub.

## [S2] Технический стек

- **Framework**: Next.js 14+ (App Router)
- **Язык**: TypeScript
- **Стили**: Tailwind CSS
- **Форма**: react-hook-form + Yup
- **API**: Vercel Serverless Functions
- **Отправка**: Telegram Bot API (fetch)
- **Данные**: локальные JSON-файлы

## [S3] Цветовая схема

- Фон: тёмно-фиолетовый (#0f0f1a → #1a1025)
- Акценты: градиент голубой (#00d4ff) → оранжевый (#ff6b35)
- Текст: белый (#ffffff), серый (#888888)
- Логотип: оригинальный пользователя с применённым градиентом

## [S4] Структура страницы

### Хедер
- Логотип (слева)
- Навигация: Услуги, Галерея, Калькулятор, Контакты (якоря)
- Кнопка «Оставить заявку»

### Герой-секция
- Заголовок: «3D Лазер – технологии будущего в ваших руках»
- Подзаголовок: «Лазерная резка, гравировка, 3D-печать любой сложности»
- Кнопка «Рассчитать стоимость» → калькулятор
- Фон: анимация/видео (заглушка)

### Блок «Наши услуги» — ВКЛАДКИ
- Переключатель: «Лазерные технологии» / «3D-печать»
- Лазер: резка, гравировка, маркировка, сварка (иконки + описание)
- 3D-печать: FDM, фотополимер, крупноформатная (материалы, размеры)
- Данные из `data/services.json`

### Галерея/Портфолио — СЕТКА С ФИЛЬТРАМИ
- Сетка фото по категориям
- Кнопки фильтрации: все / лазер / 3D-печать
- Данные из `data/gallery.json`, изображения в `/public/images/gallery/`

### Калькулятор — ПОШАГОВЫЙ МАСТЕР
- Шаг 1: тип услуги (лазер/3D)
- Шаг 2: параметры (материал, размеры)
- Шаг 3: расчёт + disclaimer
- Коэффициенты из `data/calculator-config.json`

### Форма заявки
- Поля: Имя, Телефон, Email, Комментарий, Файл (необяз.)
- Отправка через `/api/send-request` → Telegram
- Vercel Serverless Function

### Контакты
- Адрес, телефон, email
- Соцсети: Telegram, WhatsApp, VK
- Яндекс.Карта

### Подвал
- Копирайт, политика конфиденциальности

## [S5] Файловая структура

```
src/
  app/
    layout.tsx          — корневой layout (мета-теги, шрифты)
    page.tsx            — главная страница (все блоки)
    api/
      send-request/
        route.ts        — API: отправка в Telegram
  components/
    Header.tsx
    Hero.tsx
    Services.tsx        — вкладки лазер/3D
    Gallery.tsx         — сетка с фильтрами
    Calculator.tsx      — пошаговый мастер
    ContactForm.tsx
    ContactInfo.tsx
    Footer.tsx
  data/
    services.json
    gallery.json
    calculator-config.json
data/
  services.json
  gallery.json
  calculator-config.json
public/
  images/
    logo.svg            — логотип пользователя (градиент)
    gallery/            — фото работ
```

## [S6] Данные (JSON-файлы)

### services.json
```json
{
  "laser": [
    { "id": "cut", "title": "Лазерная резка", "icon": "scissors", "description": "..." },
    { "id": "engrave", "title": "Гравировка", "icon": "pen", "description": "..." },
    { "id": "mark", "title": "Маркировка", "icon": "tag", "description": "..." },
    { "id": "weld", "title": "Сварка", "icon": "zap", "description": "..." }
  ],
  "print3d": [
    { "id": "fdm", "title": "FDM печать", "icon": "layers", "description": "..." },
    { "id": "sla", "title": "Фотополимер", "icon": "droplet", "description": "..." },
    { "id": "large", "title": "Крупноформатная", "icon": "maximize", "description": "..." }
  ]
}
```

### calculator-config.json
```json
{
  "laser": {
    "materials": [
      { "id": "plywood", "name": "Фанера", "pricePerCm2": 0.5 },
      { "id": "acrylic", "name": "Акрил", "pricePerCm2": 0.8 },
      { "id": "metal", "name": "Металл", "pricePerCm2": 2.0 },
      { "id": "leather", "name": "Кожа", "pricePerCm2": 0.6 }
    ],
    "thicknessMultiplier": { "3": 1.0, "5": 1.2, "8": 1.5, "10": 1.8 }
  },
  "print3d": {
    "materials": [
      { "id": "pla", "name": "PLA", "pricePerCm3": 2.0 },
      { "id": "petg", "name": "PETG", "pricePerCm3": 2.5 },
      { "id": "abs", "name": "ABS", "pricePerCm3": 2.8 },
      { "id": "rubber", "name": "Резина", "pricePerCm3": 4.0 },
      { "id": "nylon", "name": "Нейлон", "pricePerCm3": 5.0 }
    ]
  }
}
```

## [S7] API: Отправка заявки

- POST `/api/send-request`
- Тело: `{ name, phone, email, comment, file? }`
- Валидация: Yup
- Отправка: Telegram Bot API (fetch к `https://api.telegram.org/bot{TOKEN}/sendMessage`)
- Chat ID из `.env.local`
- После отправки: JSON `{ success: true }`

## [S8] SEO

- Мета-теги: title, description, Open Graph
- Семантическая разметка (header, main, section, footer)
- Alt-теги для изображений

## [S9] Адаптивность

- Mobile-first подход
- Брейкпоинты: sm (640px), md (768px), lg (1024px), xl (1280px)
- Галерея: 1 колонка → 2 → 3 → 4
- Калькулятор: полная ширина на мобильных

## [S10] Переменные окружения

```
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
```

Хранятся в `.env.local`, исключены из `.gitignore`.
