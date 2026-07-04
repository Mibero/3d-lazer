"use client";

import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Артём Н.",
    text: "Заказывал гравировку на складном ноже в подарок. Сделали идеально ровно и быстро, проконсультировали по шрифту. Именинник в восторге.",
    service: "Гравировка на подарке",
    rating: 5,
  },
  {
    id: 2,
    name: "Дарья К.",
    text: "Нужно было напечатать кастомный корпус для самоделки. Мастер сам подсказал материал и толщину стенок. Получилось крепко и аккуратно.",
    service: "3D-печать корпуса",
    rating: 5,
  },
  {
    id: 3,
    name: "Михаил С.",
    text: "Заказал гравировку на клавиатуре Макбука — получился уникальный девайс. Лазер выгравировал надпись идеально, ничего не повредив.",
    service: "Гравировка клавиатуры",
    rating: 5,
  },
  {
    id: 4,
    name: "Елена П.",
    text: "Сделали кастомный корпус ПК с выгравированным логотипом и подсветкой. Выглядит как заводская деталь, но только моя. Рекомендую!",
    service: "Кастомизация корпуса",
    rating: 5,
  },
];

export default function AvitoReviews() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <p className="text-[#00d4ff] text-sm text-center mb-2 tracking-widest uppercase">
          Отзывы
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] bg-clip-text text-transparent">
            Отзывы реальных клиентов
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-4">
          Более 70 отзывов на Авито — все 5 звёзд
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="https://www.avito.ru/brands/a2ad7a610d266ddeb5ccd49e3c76752c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#ff6b35]/10 border border-[#ff6b35]/20 text-[#ff6b35] hover:bg-[#ff6b35]/20 transition-colors text-sm font-medium"
          >
            Смотреть все отзывы на Авито
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#1a1025] border border-white/5 rounded-xl p-6 hover:border-[#ff6b35]/20 transition-colors"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#ff6b35] text-[#ff6b35]"
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                &laquo;{review.text}&raquo;
              </p>
              <div className="border-t border-white/5 pt-3">
                <div className="text-white font-medium text-sm">{review.name}</div>
                <div className="text-gray-500 text-xs">{review.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
