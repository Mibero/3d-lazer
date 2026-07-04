"use client";

const items = [
  "Лазерная гравировка",
  "✦",
  "Маркировка металла",
  "✦",
  "3D-печать FDM",
  "✦",
  "3D-моделирование",
  "✦",
  "Прототипы и корпуса",
  "✦",
  "Гравировка на подарках",
  "✦",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-4 border-y border-white/5 bg-[#0a0a12]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-4 text-sm ${
              item === "✦"
                ? "text-[#00d4ff]"
                : "text-gray-500 uppercase tracking-widest"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
