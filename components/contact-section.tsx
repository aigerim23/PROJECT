"use client"

import { useState } from "react"
import { Phone, Mail, CheckCircle, ArrowUpRight, Loader2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Используем HTML разметку, она более устойчива к спецсимволам
    const text = `
<b>🚀 Новая заявка!</b>
<b>👤 Имя:</b> ${name}
<b>📞 Тел:</b> ${phone}
<b>🛠 Тема:</b> ${subject}
<b>📝 Сообщение:</b> ${message || "—"}
    `;

    // ДАННЫЕ (Рекомендуется вынести в .env)
    const TOKEN = "8680158569:AAH3vaGRatD3HYHLB0Sd9RxeI0e1h0WUulk";
    const CHAT_ID = "886815950";

    try {
// СТРОКА 36 ДОЛЖНА ВЫГЛЯДЕТЬ ТАК:
const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: CHAT_ID,
    text: text,
    parse_mode: "Markdown",
  }),
});



      if (response.ok) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset(); // Очистка формы
      } else {
        const errorData = await response.json();
        console.error("Telegram API Error:", errorData);
        alert("Ошибка при отправке. Проверьте настройки бота.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Ошибка сети. Проверьте соединение.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Левая колонка */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] mb-6">
              {t.contact.title}
            </h2>
            <p className="text-neutral-400 text-base md:text-lg mb-12">
              {t.contact.description}
            </p>

            <div className="space-y-6 mt-auto">
              <a href="tel:+77770404747" className="flex items-start gap-4 group">
                <div className="w-10 h-10 border border-neutral-700 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                  <Phone className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Phone</p>
                  <p className="text-white font-medium">+7 (777) 040-47-47</p>
                </div>
              </a>
              <a href="mailto:astanarailwaycompany@gmail.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 border border-neutral-700 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                  <Mail className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Email</p>
                  <p className="text-white font-medium">astanarailwaycompany@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Правая колонка - Форма */}
          <div className="bg-white p-6 md:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">
                      {t.contact.form.name}
                    </label>
                    <input 
                      name="name" 
                      type="text" 
                      required 
                      className="w-full px-4 py-3.5 border border-neutral-200 outline-none focus:border-neutral-950 text-neutral-950" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input 
                      name="phone" 
                      type="tel" 
                      required 
                      className="w-full px-4 py-3.5 border border-neutral-200 outline-none focus:border-neutral-950 text-neutral-950" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">
                    {t.contact.form.interest}
                  </label>
                  <select 
                    name="subject" 
                    className="w-full px-4 py-3.5 border border-neutral-200 outline-none focus:border-neutral-950 text-neutral-950 bg-white"
                  >
                    {t.contact.form.options.map((opt: string, i: number) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    className="w-full px-4 py-3.5 border border-neutral-200 outline-none focus:border-neutral-950 resize-none text-neutral-950" 
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neutral-950 text-white py-4 font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 disabled:bg-neutral-400"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      {t.contact.form.submitBtn}
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-neutral-950 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-neutral-950 mb-2">
                  {t.contact.form.success}
                </h3>
                <p className="text-neutral-500">
                  {t.contact.form.successDescription}
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm font-medium text-neutral-950 underline underline-offset-4"
                >
                  Отправить еще раз
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
