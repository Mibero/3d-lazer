"use client";

import { ArrowDown } from "lucide-react";

export default function Hero({ onCalcClick }: { onCalcClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ff6b35]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/10 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35]/10 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-[#00d4ff] text-sm sm:text-base mb-4 tracking-widest uppercase">
          Лаборатория в Зеленограде · работаем с душой
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] bg-clip-text text-transparent">
            3D Лазер
          </span>
          <br />
          <span className="text-white text-3xl sm:text-4xl md:text-5xl">
            технологии будущего в ваших руках
          </span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Лазерная резка, гравировка, маркировка, 3D-печать и моделирование.
          Делаем вручную, с гарантией и душой.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onCalcClick}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-white font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
          >
            Рассчитать стоимость
            <ArrowDown size={20} />
          </button>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:bg-white/5 transition-colors inline-flex items-center justify-center"
          >
            Смотреть услуги
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#00d4ff]">5.0</div>
            <div className="text-gray-500 text-sm">рейтинг ★</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#ff6b35]">70+</div>
            <div className="text-gray-500 text-sm">
              <a href="https://www.avito.ru/brands/a2ad7a610d266ddeb5ccd49e3c76752c" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b35] transition-colors">
                отзывов на Авито
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#00d4ff]">15+</div>
            <div className="text-gray-500 text-sm">лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#ff6b35]">2400+</div>
            <div className="text-gray-500 text-sm">заказов</div>
          </div>
        </div>
      </div>
    </section>
  );
}
