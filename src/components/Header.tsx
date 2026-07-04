"use client";

import { useState } from "react";
import { Menu, X, Phone, Send } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Работы" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header({ onOpenForm }: { onOpenForm: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111320]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#ff6b35] flex items-center justify-center font-bold text-[#111320] text-sm">
              3D
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-semibold text-sm leading-tight">
                3D Лазер
              </div>
              <div className="text-gray-500 text-xs">Лаборатория</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://t.me/LazerLabZel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00d4ff] text-sm transition-colors flex items-center gap-1.5"
            >
              <Send size={14} />
              Telegram
            </a>
            <a
              href="tel:+79661894559"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              +7 (966) 189-45-59
            </a>
            <button
              onClick={onOpenForm}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Оставить заявку
            </button>
          </div>

          {/* Mobile: phone + button + menu */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+79661894559"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#00d4ff] hover:bg-white/10 transition-colors"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={onOpenForm}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-white font-medium text-sm"
            >
              Заявка
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-400 hover:text-white"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-white/5 mt-2 pt-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors text-sm py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://t.me/LazerLabZel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d4ff] hover:text-white transition-colors text-sm py-1 flex items-center gap-2"
              >
                <Send size={14} />
                Telegram канал
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
