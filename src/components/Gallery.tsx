"use client";

import { useState } from "react";
import galleryData from "@/data/gallery.json";

type FilterKey = "all" | "laser" | "print3d";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Все работы" },
  { key: "laser", label: "Лазер" },
  { key: "print3d", label: "3D-печать" },
];

interface Props {
  onOpenForm: () => void;
}

export default function Gallery({ onOpenForm }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered =
    activeFilter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <p className="text-[#00d4ff] text-sm text-center mb-2 tracking-widest uppercase">
          Портфолио
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] bg-clip-text text-transparent">
            Наши работы
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Лучше один раз увидеть. Реальные заказы, выполненные вручную.
        </p>

        {/* Filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-2 flex-wrap justify-center">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === f.key
                    ? "bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-white"
                    : "bg-[#1a1025] text-gray-400 hover:text-white border border-white/5"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#1a1025] rounded-xl overflow-hidden border border-white/5 hover:border-[#00d4ff]/30 transition-all cursor-pointer"
            >
              {/* Image with hover effect */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add(
                        "bg-gradient-to-br",
                        "from-[#00d4ff]/10",
                        "to-[#ff6b35]/10",
                        "flex",
                        "items-center",
                        "justify-center"
                      );
                      const placeholder = document.createElement("div");
                      placeholder.className = "text-gray-500 text-sm text-center px-4";
                      placeholder.textContent = item.title;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium">{item.description}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      item.category === "laser"
                        ? "bg-[#00d4ff]/10 text-[#00d4ff]"
                        : "bg-[#ff6b35]/10 text-[#ff6b35]"
                    }`}
                  >
                    {item.category === "laser" ? "Лазер" : "3D-печать"}
                  </span>
                </div>
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Хочу так же!</p>
          <button
            onClick={onOpenForm}
            className="inline-flex px-6 py-3 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Заказать работу
          </button>
        </div>
      </div>
    </section>
  );
}
