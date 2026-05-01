"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const topics = [
  "Резка стекла и зеркал (юр. лица)",
  "Резка стекла и зеркал (физ. лица)",
  "Замер и установка (душевые, двери)",
  "Стеклопакеты",
  "Окна, двери из алюминия / ПВХ",
  "Стеклоконструкции под ключ",
  "Фасадное остекление",
  "Другое",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 rounded-full bg-cyan-100/80 border border-cyan-200 flex items-center justify-center mb-5">
          <Send size={24} className="text-cyan-700" />
        </div>
        <h3 className="text-xl font-semibold text-zinc-900 mb-2">Заявка отправлена!</h3>
        <p className="text-zinc-500 text-sm max-w-sm">
          Наш специалист свяжется с вами в ближайшее рабочее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Unified premium field style to match glass surfaces site-wide */}
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1.5">
          ФИО <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Иванов Иван Иванович"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-white/75 backdrop-blur-sm border border-white/70 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent transition"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">
            Телефон <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+7 (___) ___-__-__"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-white/75 backdrop-blur-sm border border-white/70 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">Email</label>
          <input
            type="email"
            placeholder="example@mail.ru"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white/75 backdrop-blur-sm border border-white/70 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1.5">
          Тема обращения
        </label>
        <select
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          className="w-full bg-white/75 backdrop-blur-sm border border-white/70 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent transition"
        >
          <option value="">Выберите тему</option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={form.agree}
          onChange={(e) => setForm({ ...form, agree: e.target.checked })}
          className="mt-0.5 w-4 h-4 rounded accent-cyan-700"
        />
        <span className="text-sm text-zinc-500 leading-relaxed">
          Я принимаю{" "}
          <a href="#" className="text-cyan-800 underline underline-offset-2">
            пользовательское соглашение
          </a>{" "}
          и политику конфиденциальности
        </span>
      </label>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-slate-900 to-cyan-900 text-white font-semibold py-3.5 rounded-lg hover:from-slate-800 hover:to-cyan-800 transition-all flex items-center justify-center gap-2 text-sm shadow-[0_16px_45px_rgba(8,145,178,0.30)]"
      >
        <Send size={15} />
        Отправить заявку
      </button>
    </form>
  );
}
