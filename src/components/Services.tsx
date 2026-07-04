"use client";

import { Sparkles, Box, ArrowRight, Check } from "lucide-react";

interface Props {
  onOpenForm: () => void;
}

export default function Services({ onOpenForm }: Props) {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <p className="text-[#00d4ff] text-sm text-center mb-2 tracking-widest uppercase">
          Что мы делаем
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] bg-clip-text text-transparent">
            Услуги лаборатории
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Лазер, 3D-печать и умный ремонт под одной крышей
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Laser card */}
          <div className="bg-[#161825] border border-white/5 rounded-2xl overflow-hidden group hover:border-[#ff6b35]/20 transition-colors">
            <div className="relative h-56 overflow-hidden">
              <img
                src="https://comp.moscow/images/service-laser.jpg"
                alt="Лазерная гравировка"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.classList.add("bg-gradient-to-br", "from-[#ff6b35]/20", "to-[#00d4ff]/10");
                }}
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-sm">
                Лазер
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-[#ff6b35]/10 border border-[#ff6b35]/20 flex items-center justify-center text-[#ff6b35] mb-5">
                <Sparkles size={24} />
              </div>

              <h3 className="text-white font-bold text-xl sm:text-2xl mb-4">
                Лазерная гравировка и маркировка
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Точная гравировка и промышленная маркировка на металле, дереве,
                коже, стекле и пластике. Шильды, логотипы, надписи, штрих-коды
                и DataMatrix — стойко и красиво.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-[#ff6b35] shrink-0" />
                  Металл · сталь · алюминий
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-[#ff6b35] shrink-0" />
                  Дерево · кожа · стекло
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-[#ff6b35] shrink-0" />
                  Маркировка и DataMatrix
                </li>
              </ul>

              <button
                onClick={onOpenForm}
                className="inline-flex items-center gap-2 text-[#ff6b35] font-medium hover:gap-3 transition-all"
              >
                Заказать услугу
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* 3D card */}
          <div className="bg-[#161825] border border-white/5 rounded-2xl overflow-hidden group hover:border-[#00d4ff]/20 transition-colors">
            <div className="relative h-56 overflow-hidden">
              <img
                src="https://comp.moscow/images/service-3d.jpg"
                alt="3D-печать"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.classList.add("bg-gradient-to-br", "from-[#00d4ff]/20", "to-[#ff6b35]/10");
                }}
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-sm">
                3D
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] mb-5">
                <Box size={24} />
              </div>

              <h3 className="text-white font-bold text-xl sm:text-2xl mb-4">
                3D-моделирование и печать
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                От идеи до готовой детали: смоделируем по чертежу или эскизу и
                напечатаем на FDM-принтерах. Корпуса, шестерёнки, фигурки,
                прототипы и архитектурные макеты.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-[#00d4ff] shrink-0" />
                  FDM печать из PLA, PETG, ABS
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-[#00d4ff] shrink-0" />
                  Модели по эскизу и reverse-engineering
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check size={16} className="text-[#00d4ff] shrink-0" />
                  Прочные и детальные материалы
                </li>
              </ul>

              <button
                onClick={onOpenForm}
                className="inline-flex items-center gap-2 text-[#00d4ff] font-medium hover:gap-3 transition-all"
              >
                Заказать услугу
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
