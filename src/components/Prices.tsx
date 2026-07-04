"use client";

import { Check } from "lucide-react";

const prices = [
  {
    title: "Лазерная гравировка",
    price: "от 300₽",
    time: "от 1 часа",
    features: ["Металл, дерево, кожа, пластик", "Любые тиражи", "Макет бесплатно"],
    accent: "orange",
  },
  {
    title: "Техническая маркировка",
    price: "индивидуально",
    time: "по согласованию",
    features: ["Серийные номера", "QR-коды и штрих-коды", "Скидки при больших тиражах"],
    accent: "cyan",
  },
  {
    title: "3D-моделирование",
    price: "от 1000₽/час",
    time: "от 1 дня",
    features: ["По чертежам и эскизам", "Reverse-engineering", "Бесплатная консультация"],
    accent: "cyan",
  },
  {
    title: "3D-печать",
    price: "от 200₽",
    time: "от 1 дня",
    features: ["FDM печать", "Прототипы и детали", "Различные материалы"],
    accent: "orange",
  },
  {
    title: "Лазерная резка",
    price: "200₽/п.м",
    time: "от 1 часа",
    features: ["Фанера, акрил, металл", "Толщина до 20мм", "Высокая точность"],
    accent: "cyan",
  },
];

interface Props {
  onOpenForm: () => void;
}

export default function Prices({ onOpenForm }: Props) {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <p className="text-[#00d4ff] text-sm text-center mb-2 tracking-widest uppercase">
          Цены
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] bg-clip-text text-transparent">
            Прозрачные цены без сюрпризов
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Точная стоимость зависит от сложности и объёма. Рассчитаем бесплатно за 1 час.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prices.map((item, i) => (
            <div
              key={i}
              className="bg-[#161825] border border-white/5 rounded-2xl p-6 flex flex-col hover:border-white/10 transition-colors"
            >
              <h3 className="text-white font-bold text-lg mb-3">
                {item.title}
              </h3>

              <div className={`text-2xl font-bold mb-1 ${
                item.accent === "orange" ? "text-[#ff6b35]" : "text-[#00d4ff]"
              }`}>
                {item.price}
              </div>

              <p className="text-gray-500 text-sm mb-5">{item.time}</p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {item.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-gray-300 text-sm">
                    <Check size={14} className={`shrink-0 ${
                      item.accent === "orange" ? "text-[#ff6b35]" : "text-[#00d4ff]"
                    }`} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenForm}
                className="w-full py-3 rounded-xl border border-white/10 text-white text-center font-medium hover:bg-white/5 transition-colors"
              >
                Заказать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
