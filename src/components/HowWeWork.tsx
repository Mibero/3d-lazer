"use client";

import { Send, Clock, CheckCircle, Shield } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: <Send size={24} />,
    title: "Заявка и задача",
    text: "Пишите или звоните — расскажите, что нужно. Пришлёте фото, чертёж или идею: поможем оформить мысль в конкретное ТЗ.",
  },
  {
    num: 2,
    icon: <Clock size={24} />,
    title: "Расчёт за 1 час",
    text: "Считаем стоимость и сроки под ваш материал и объём. Без скрытых платежей — цена в смете финальная.",
  },
  {
    num: 3,
    icon: <CheckCircle size={24} />,
    title: "Делаем и показываем",
    text: "На каждом этапе шлём фото процесса. Можно вносить правки — мы за живое общение, а не за конвейер.",
  },
  {
    num: 4,
    icon: <Shield size={24} />,
    title: "Отдаём с гарантией",
    text: "Проверяем результат, упаковываем. На работы действует гарантия. Самовывоз, доставка или курьер по Москве.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <p className="text-[#00d4ff] text-sm text-center mb-2 tracking-widest uppercase">
          Как мы работаем
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] bg-clip-text text-transparent">
            Прозрачно на каждом шаге
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          От первой встречи до готового результата — вы всегда в курсе, что и зачем происходит.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#12141f] border border-white/5 rounded-2xl p-6 relative group hover:border-[#00d4ff]/20 transition-colors"
            >
              {/* Number badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] flex items-center justify-center text-white text-sm font-bold">
                {step.num}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] mb-5">
                {step.icon}
              </div>

              <h3 className="text-white font-bold text-lg mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
