"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { X, Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  material: string;
  comment: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: "laser-cut", name: "Лазерная резка", materials: ["Фанера", "Акрил", "Металл", "Кожа", "Пластик"] },
  { id: "laser-engrave", name: "Лазерная гравировка", materials: ["Металл", "Дерево", "Кожа", "Стекло", "Пластик"] },
  { id: "laser-mark", name: "Маркировка металла", materials: ["Сталь", "Алюминий", "Латунь"] },
  { id: "print3d-fdm", name: "3D-печать FDM", materials: ["PLA", "PETG", "ABS", "Нейлон", "TPU"] },
  { id: "print3d-model", name: "3D-моделирование", materials: ["По чертежу", "По эскизу", "По фото"] },
];

export default function ContactForm({ isOpen, onClose }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>();

  const currentMaterials = services.find((s) => s.id === selectedService)?.materials || [];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/send-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSuccess(true);
        reset();
        setSelectedService("");
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }
    } catch {
      alert("Ошибка отправки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-[#1a1025] border border-white/10 rounded-2xl w-full max-w-md p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">
              Заявка отправлена!
            </h3>
            <p className="text-gray-400">Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <>
            <h3 className="text-white text-xl font-semibold mb-6">
              Оставить заявку
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  {...register("name", { required: "Введите имя" })}
                  placeholder="Ваше имя"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none placeholder:text-gray-500"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  {...register("phone", {
                    required: "Введите телефон",
                    pattern: {
                      value: /^(\+7|8)[0-9]{10}$/,
                      message: "Формат: +7XXXXXXXXXX или 8XXXXXXXXXX (10 цифр после 7/8)",
                    },
                  })}
                  placeholder="+7 (999) 123-45-67"
                  type="tel"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none placeholder:text-gray-500"
                />
                <p className="text-gray-500 text-xs mt-1">
                  +7 или 8, далее 10 цифр номера
                </p>
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Email (optional) */}
              <div>
                <input
                  {...register("email", {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Некорректный формат email",
                    },
                  })}
                  placeholder="Email (необязательно)"
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none placeholder:text-gray-500"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <select
                  value={selectedService}
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    setValue("service", e.target.value);
                    setValue("material", "");
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none"
                >
                  <option value="">Выберите услугу</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
                <input type="hidden" {...register("service")} />
              </div>

              {/* Material */}
              {selectedService && (
                <div>
                  <select
                    {...register("material", { required: "Выберите материал" })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none"
                  >
                    <option value="">Выберите материал</option>
                    {currentMaterials.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  {errors.material && (
                    <p className="text-red-400 text-sm mt-1">{errors.material.message}</p>
                  )}
                </div>
              )}

              {/* Comment */}
              <div>
                <textarea
                  {...register("comment")}
                  placeholder="Опишите задачу (размеры, количество, пожелания)"
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:outline-none placeholder:text-gray-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] text-white font-medium disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    Отправить заявку <Send size={16} />
                  </>
                )}
              </button>

              <p className="text-gray-500 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
