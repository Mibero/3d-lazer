"use client";

import { useState, useRef } from "react";
import { ChevronRight, ChevronLeft, Calculator as CalcIcon, Upload, File } from "lucide-react";
import calcConfig from "@/data/calculator-config.json";

type ServiceType = "laser" | "print3d";

interface LaserParams {
  service: string;
  length: number;
  area: number;
}

interface Print3dParams {
  material: string;
  weight: number;
  fileName: string;
}

interface Props {
  onOpenForm: () => void;
}

export default function Calculator({ onOpenForm }: Props) {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType | null>(null);
  const [laserParams, setLaserParams] = useState<LaserParams>({
    service: "",
    length: 0,
    area: 0,
  });
  const [printParams, setPrintParams] = useState<Print3dParams>({
    material: "",
    weight: 0,
    fileName: "",
  });
  const [result, setResult] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const calculate = () => {
    if (serviceType === "laser") {
      const svc = calcConfig.laser.services.find(
        (s) => s.id === laserParams.service
      );
      if (svc) {
        let price = 0;
        if ("pricePerMeter" in svc) {
          price = (svc as unknown as { pricePerMeter: number }).pricePerMeter * laserParams.length;
        } else if ("pricePerCm2" in svc) {
          price = (svc as unknown as { pricePerCm2: number }).pricePerCm2 * laserParams.area;
        }
        setResult(Math.max(price, calcConfig.laser.minOrder));
      }
    } else if (serviceType === "print3d") {
      const mat = calcConfig.print3d.materials.find(
        (m) => m.id === printParams.material
      );
      if (mat) {
        setResult(mat.pricePerGram * printParams.weight);
      }
    }
    setStep(4);
  };

  const reset = () => {
    setStep(1);
    setServiceType(null);
    setLaserParams({ service: "", length: 0, area: 0 });
    setPrintParams({ material: "", weight: 0, fileName: "" });
    setResult(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrintParams({
        ...printParams,
        fileName: file.name,
        weight: calcConfig.print3d.defaultWeightGrams,
      });
    }
  };

  return (
    <section id="calculator" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative max-w-2xl mx-auto">
        <p className="text-[#00d4ff] text-sm text-center mb-2 tracking-widest uppercase">
          Предварительный расчёт
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] bg-clip-text text-transparent">
            Калькулятор стоимости
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Рассчитаем за 30 секунд. Точная стоимость — после обсуждения.
        </p>

        <div className="bg-[#1a1025] border border-white/5 rounded-2xl p-6 sm:p-8">
          {/* Step indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= s
                      ? "bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-white"
                      : "bg-white/5 text-gray-500"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-12 h-0.5 ${
                      step > s
                        ? "bg-gradient-to-r from-[#00d4ff] to-[#ff6b35]"
                        : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Service type */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg mb-4 text-center">
                Выберите тип услуги
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setServiceType("laser");
                    setStep(2);
                  }}
                  className="p-6 rounded-xl border border-white/10 hover:border-[#00d4ff]/50 bg-white/5 text-left transition-all"
                >
                  <div className="text-[#00d4ff] mb-3">
                    <CalcIcon size={28} />
                  </div>
                  <div className="text-white font-medium text-lg">
                    Лазерные услуги
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    Резка, гравировка, маркировка
                  </div>
                </button>

                <button
                  onClick={() => {
                    setServiceType("print3d");
                    setStep(2);
                  }}
                  className="p-6 rounded-xl border border-white/10 hover:border-[#ff6b35]/50 bg-white/5 text-left transition-all"
                >
                  <div className="text-[#ff6b35] mb-3">
                    <CalcIcon size={28} />
                  </div>
                  <div className="text-white font-medium text-lg">
                    3D-печать
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    FDM печать, моделирование
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Laser parameters */}
          {step === 2 && serviceType === "laser" && (
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg">
                Параметры лазерной обработки
              </h3>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Тип услуги
                </label>
                <select
                  value={laserParams.service}
                  onChange={(e) =>
                    setLaserParams({ ...laserParams, service: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none"
                >
                  <option value="">Выберите услугу</option>
                  {calcConfig.laser.services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {laserParams.service === "cut" && (
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Длина реза (погонных метров)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={laserParams.length || ""}
                    onChange={(e) =>
                      setLaserParams({
                        ...laserParams,
                        length: Number(e.target.value),
                      })
                    }
                    placeholder="Введите длину"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none placeholder:text-gray-500"
                  />
                  <p className="text-gray-500 text-xs mt-1">
                    200₽ за погонный метр
                  </p>
                </div>
              )}

              {(laserParams.service === "engrave" || laserParams.service === "mark") && (
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Площадь рисунка (см²)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={laserParams.area || ""}
                    onChange={(e) =>
                      setLaserParams({
                        ...laserParams,
                        area: Number(e.target.value),
                      })
                    }
                    placeholder="Введите площадь"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none placeholder:text-gray-500"
                  />
                  <p className="text-gray-500 text-xs mt-1">
                    100₽ за см² площади рисунка
                  </p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-lg border border-white/10 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <ChevronLeft size={16} /> Назад
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={
                    !laserParams.service ||
                    (laserParams.service === "cut" && !laserParams.length) ||
                    ((laserParams.service === "engrave" || laserParams.service === "mark") && !laserParams.area)
                  }
                  className="flex-1 px-5 py-3 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Далее <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: 3D print parameters */}
          {step === 2 && serviceType === "print3d" && (
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg">
                Параметры 3D-печати
              </h3>

              {/* File upload */}
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Загрузите модель (STL/OBJ) для быстрого расчёта
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center cursor-pointer hover:border-[#00d4ff]/30 transition-colors"
                >
                  {printParams.fileName ? (
                    <div className="flex items-center justify-center gap-3">
                      <File size={24} className="text-[#00d4ff]" />
                      <span className="text-white">{printParams.fileName}</span>
                    </div>
                  ) : (
                    <>
                      <Upload size={32} className="text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">
                        Нажмите или перетащите файл
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        STL, OBJ — до 50 МБ
                      </p>
                    </>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".stl,.obj"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Материал
                </label>
                <select
                  value={printParams.material}
                  onChange={(e) =>
                    setPrintParams({ ...printParams, material: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#ff6b35] focus:outline-none"
                >
                  <option value="">Выберите материал</option>
                  {calcConfig.print3d.materials.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Примерный вес (грамм)
                </label>
                <input
                  type="number"
                  min="1"
                  value={printParams.weight || ""}
                  onChange={(e) =>
                    setPrintParams({
                      ...printParams,
                      weight: Number(e.target.value),
                    })
                  }
                  placeholder="Введите вес"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#ff6b35] focus:outline-none placeholder:text-gray-500"
                />
                <p className="text-gray-500 text-xs mt-1">
                  Если загрузили модель — введите вес вручную
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-lg border border-white/10 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <ChevronLeft size={16} /> Назад
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!printParams.material || !printParams.weight}
                  className="flex-1 px-5 py-3 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Далее <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirm */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg">
                Подтвердите данные
              </h3>

              <div className="bg-white/5 rounded-xl p-5 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Тип услуги:</span>
                  <span className="text-white">
                    {serviceType === "laser" ? "Лазерные услуги" : "3D-печать"}
                  </span>
                </div>
                {serviceType === "laser" ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Услуга:</span>
                      <span className="text-white">
                        {calcConfig.laser.services.find((s) => s.id === laserParams.service)?.name}
                      </span>
                    </div>
                    {laserParams.service === "cut" && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Длина:</span>
                        <span className="text-white">{laserParams.length} п.м</span>
                      </div>
                    )}
                    {(laserParams.service === "engrave" || laserParams.service === "mark") && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Площадь:</span>
                        <span className="text-white">{laserParams.area} см²</span>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Материал:</span>
                      <span className="text-white">
                        {calcConfig.print3d.materials.find((m) => m.id === printParams.material)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Вес:</span>
                      <span className="text-white">{printParams.weight} г</span>
                    </div>
                    {printParams.fileName && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Файл:</span>
                        <span className="text-white">{printParams.fileName}</span>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-lg border border-white/10 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <ChevronLeft size={16} /> Назад
                </button>
                <button
                  onClick={calculate}
                  className="flex-1 px-5 py-3 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-white font-medium flex items-center justify-center gap-2"
                >
                  Рассчитать
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Result */}
          {step === 4 && result !== null && (
            <div className="space-y-6 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] bg-clip-text text-transparent">
                {result.toLocaleString("ru-RU")} ₽
              </div>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                Расчёт является предварительным и не является публичной офертой.
                Точная стоимость определяется после обсуждения заказа.
              </p>
              {serviceType === "laser" && (
                <p className="text-gray-500 text-xs">
                  * Минимальная стоимость заказа — 1 500 ₽
                </p>
              )}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={onOpenForm}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Оформить заявку
                </button>
                <button
                  onClick={reset}
                  className="px-6 py-3 rounded-lg border border-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  Новый расчёт
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
