import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты — РезкаСтекла",
  description: "Контакты завода по обработке стекла. Телефон, email, адрес производства в Домодедово.",
};

const contacts = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 495 108-55-60",
    href: "tel:+74951085560",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@rezka-stekla.ru",
    href: "mailto:info@rezka-stekla.ru",
  },
  {
    icon: Clock,
    label: "Часы работы",
    value: "пн–пт: 9:00–18:00",
    href: null,
  },
  {
    icon: MapPin,
    label: "Адрес производства",
    value: "Московская обл., г. Домодедово, мкр. Западный, территория ИНТЕГРА, стр. 3",
    href: "https://yandex.ru/maps/?text=Домодедово+территория+ИНТЕГРА",
  },
];

const departments = [
  {
    name: "Алимова Елена",
    role: "Менеджер отдела продаж",
    phone: "+7 495 108-55-60 доб. 144",
    email: "office@rezka-stekla.ru",
  },
  {
    name: "Отдел корпоративных заказов",
    role: "Юридические лица, опт",
    phone: "+7 495 108-55-60 доб. 101",
    email: "b2b@rezka-stekla.ru",
  },
];

export default function KontaktyPage() {
  return (
    <>
      <PageHeader
        title="Контакты"
        subtitle="Свяжитесь с нами любым удобным способом. Работаем с юридическими и физическими лицами."
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: contacts + departments */}
            <div className="space-y-8">
              {/* Contact details */}
              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-5">Реквизиты</h2>
                <div className="space-y-4">
                  {contacts.map((c) => {
                    const Icon = c.icon;
                    const content = (
                      <div className="flex items-start gap-3 group">
                        <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-zinc-900 transition-colors">
                          <Icon size={15} className="text-zinc-600 group-hover:text-white transition-colors" />
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

              {/* Departments */}
              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-5">Менеджеры</h2>
                <div className="space-y-4">
                  {departments.map((d) => (
                    <div key={d.name} className="border border-zinc-100 rounded-xl p-4">
                      <p className="font-medium text-zinc-900 text-sm mb-0.5">{d.name}</p>
                      <p className="text-xs text-zinc-400 mb-3">{d.role}</p>
                      <a href={`tel:${d.phone.replace(/\D/g, "")}`} className="flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900 mb-1">
                        <Phone size={12} />{d.phone}
                      </a>
                      <a href={`mailto:${d.email}`} className="flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900">
                        <Mail size={12} />{d.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal info */}
              <div className="bg-zinc-50 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-zinc-700 mb-3">Реквизиты организации</h3>
                <div className="space-y-1.5 text-xs text-zinc-500">
                  <p><span className="text-zinc-700">Название:</span> ООО «ДомГласс»</p>
                  <p><span className="text-zinc-700">Группа компаний:</span> ГК «DOMO-GROUP»</p>
                  <p><span className="text-zinc-700">Адрес:</span> 142000, Московская область, г. Домодедово, мкр. Западный, тер. ИНТЕГРА, стр. 3</p>
                </div>
              </div>
            </div>

            {/* Right: form (2 columns) */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-zinc-900 mb-6">Отправить заявку</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
