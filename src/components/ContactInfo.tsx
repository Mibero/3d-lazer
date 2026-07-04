"use client";

import { MapPin, Phone, Mail, MessageCircle, Send as Telegram } from "lucide-react";

export default function ContactInfo() {
  return (
    <section id="contacts" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <p className="text-[#00d4ff] text-sm text-center mb-2 tracking-widest uppercase">
          Связаться с нами
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] bg-clip-text text-transparent">
            Контакты
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Расскажите о задаче — посчитаем за час
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Телефон</h3>
                <a
                  href="tel:+79661894559"
                  className="text-gray-400 hover:text-[#00d4ff] transition-colors"
                >
                  +7 (966) 189-45-59
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Почта</h3>
                <a
                  href="mailto:i@mibero.ru"
                  className="text-gray-400 hover:text-[#00d4ff] transition-colors"
                >
                  i@mibero.ru
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center text-[#00d4ff] shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Лаборатория</h3>
                <p className="text-gray-400">
                  г. Москва, Зеленоград,
                  <br />
                  ПГТ Андреевка, д. 29, стр. 1
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-white font-medium mb-3">Мы в соцсетях</h3>
              <div className="flex gap-3">
                <a
                  href="https://t.me/LazerLabZel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1a1025] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-colors"
                >
                  <Telegram size={20} />
                </a>
                <a
                  href="https://wa.me/79661894559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#1a1025] border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/30 transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="https://www.avito.ru/brands/a2ad7a610d266ddeb5ccd49e3c76752c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#161825] border border-white/10 flex items-center justify-center hover:border-[#ff6b35]/30 transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                    <circle cx="12" cy="18" r="10" fill="#59B838"/>
                    <circle cx="18" cy="10" r="8" fill="#7B5EA7"/>
                    <circle cx="24" cy="18" r="6" fill="#2CA5D9"/>
                    <circle cx="18" cy="22" r="5" fill="#E5533F"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Yandex Maps */}
          <div className="bg-[#1a1025] border border-white/10 rounded-2xl overflow-hidden h-80 lg:h-auto min-h-[320px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.148081%2C55.976293&z=16&pt=37.148081%2C55.976293%2Cpm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full min-h-[320px]"
              title="Карта проезда"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
