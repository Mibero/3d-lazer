export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} 3D Лазер Лаборатория. Все права защищены.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#services"
              className="text-gray-500 text-sm hover:text-gray-400 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#gallery"
              className="text-gray-500 text-sm hover:text-gray-400 transition-colors"
            >
              Работы
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-gray-400 transition-colors"
            >
              Политика
            </a>
          </div>
        </div>

        {/* Avito badge with real logo */}
        <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-center">
          <a
            href="https://www.avito.ru/brands/a2ad7a610d266ddeb5ccd49e3c76752c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[#161825] border border-white/5 hover:border-[#ff6b35]/30 transition-colors group"
          >
            {/* Real Avito logo - colorful circles */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="18" r="10" fill="#59B838"/>
              <circle cx="18" cy="10" r="8" fill="#7B5EA7"/>
              <circle cx="24" cy="18" r="6" fill="#2CA5D9"/>
              <circle cx="18" cy="22" r="5" fill="#E5533F"/>
            </svg>
            <div className="text-left">
              <div className="text-white text-sm font-medium group-hover:text-[#ff6b35] transition-colors">
                Авито
              </div>
              <div className="text-gray-500 text-xs">★ 5.0 · 70+ отзывов</div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
