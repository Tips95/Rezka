import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "РезкаСтекла — Резка стекла по размерам в Москве",
  description:
    "Профессиональная резка стекла любой сложности. Фигурная, криволинейная, прямолинейная резка. ЧПУ-оборудование. Размеры от 150×400 до 3200×6000 мм.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`min-h-screen ${inter.className}`}>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="aurora" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 500px at 50% 0%, rgba(255,255,255,0.85), transparent 60%), radial-gradient(700px 420px at 50% 100%, rgba(255,255,255,0.65), transparent 60%)",
            }}
          />
        </div>

        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
