import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Phone, Mail, MapPin, Clock, ExternalLink, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты — GLASSEYES",
  description: "Контакты GLASSEYES: телефон, email и адрес компании.",
};

const contacts = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 928 239-66-66",
    href: "tel:+79282396666",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mohmad_592@mail.ru",
    href: "mailto:mohmad_592@mail.ru",
  },
  {
    icon: Clock,
    label: "Часы работы",
    value: "пн–пт: 9:00–18:00",
    href: null,
  },
  {
    icon: MapPin,
    label: "Адрес компании",
    value: "г. Грозный, ул. Молдавская 13",
    href: "https://yandex.ru/maps/?text=Грозный+ул+Молдавская+13",
  },
];

const departments = [
  {
    name: "GLASSEYES",
    role: "Отдел продаж",
    phone: "89282396666",
    email: "mohmad_592@mail.ru",
  },
  {
    name: "GLASSEYES",
    role: "Корпоративные и частные заказы",
    phone: "89287897113",
    email: "mohmad_592@mail.ru",
  },
];

const mainPhones = ["89282396666", "89287897113"];
const temperingPhones = ["89388924000", "89388918008"];

export default function KontaktyPage() {
  return (
    <>
      <PageHeader
        title="Контакты"
        subtitle="Свяжитесь с нами любым удобным способом. Работаем с юридическими и физическими лицами."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
      />

      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-5">Реквизиты</h2>
                <div className="space-y-4 surface noise relative rounded-2xl p-5 overflow-hidden">
                  {contacts.map((c) => {
                    const Icon = c.icon;
                    const content = (
                      <div className="flex items-start gap-3 group">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                          <Icon size={15} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-zinc-400 mb-0.5">{c.label}</p>
                          <p className="text-sm font-medium text-zinc-800 leading-relaxed">
                            {c.value}
                            {c.href && c.href.startsWith("https") && (
                              <ExternalLink size={11} className="inline ml-1.5 text-zinc-400" />
                            )}
                          </p>
                        </div>
                      </div>
                    );
                    return c.href ? (
                      <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <div key={c.label}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-5">Менеджеры</h2>
                <div className="space-y-4">
                  {departments.map((d) => (
                    <div key={d.name} className="surface noise relative rounded-xl p-4 overflow-hidden">
                      <p className="font-medium text-zinc-900 text-sm mb-0.5">{d.name}</p>
                      <p className="text-xs text-zinc-400 mb-3">{d.role}</p>
                      <a href={`tel:+7${d.phone.slice(1)}`} className="flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900 mb-1">
                        <Phone size={12} />{d.phone}
                      </a>
                      <a href={`mailto:${d.email}`} className="flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900">
                        <Mail size={12} />{d.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface noise relative rounded-xl p-5 overflow-hidden">
                <h3 className="text-sm font-semibold text-zinc-700 mb-3">Реквизиты организации</h3>
                <div className="space-y-1.5 text-xs text-zinc-500">
                  <p><span className="text-zinc-700">Название:</span> GLASSEYES</p>
                  <p><span className="text-zinc-700">Email:</span> mohmad_592@mail.ru</p>
                  <p><span className="text-zinc-700">Адрес:</span> г. Грозный, ул. Молдавская 13</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="surface noise relative rounded-2xl p-6 overflow-hidden">
                <h2 className="text-lg font-semibold text-zinc-900 mb-5">Основные номера</h2>
                <div className="space-y-3">
                  {mainPhones.map((raw) => {
                    const wa = `7${raw.slice(1)}`;
                    return (
                      <div key={raw} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3">
                        <span className="font-semibold text-zinc-900">{raw}</span>
                        <div className="flex items-center gap-2">
                          <a href={`tel:+${wa}`} className="inline-flex items-center gap-1 rounded-full border border-zinc-300 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100">
                            <Phone size={12} />
                            Позвонить
                          </a>
                          <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100">
                            <MessageCircle size={12} />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="surface noise relative rounded-2xl p-6 overflow-hidden">
                <h2 className="text-lg font-semibold text-zinc-900 mb-2">Закалка стекла</h2>
                <p className="text-sm text-zinc-600 mb-5">Отдельные номера по направлению закалки стекла.</p>
                <div className="space-y-3">
                  {temperingPhones.map((raw) => {
                    const wa = `7${raw.slice(1)}`;
                    return (
                      <div key={raw} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50/60 px-4 py-3">
                        <span className="font-semibold text-zinc-900">{raw}</span>
                        <div className="flex items-center gap-2">
                          <a href={`tel:+${wa}`} className="inline-flex items-center gap-1 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100">
                            <Phone size={12} />
                            Позвонить
                          </a>
                          <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100">
                            <MessageCircle size={12} />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
