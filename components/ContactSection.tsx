"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactSectionProps {
  dict?: any;
  lang?: string;
}

export const ContactSection = ({ dict, lang = "en" }: ContactSectionProps) => {
  const isRTL = lang === "ar" || dict?.locale?.current === "العربية";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (status !== "idle") {
      setStatus("idle");
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          page_source: "noureldeen.me Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
        }, 6000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 lg:py-28 bg-[#161616] text-[#FBEBEB] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -start-32 w-80 h-80 bg-[#220202] rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 -end-32 w-80 h-80 bg-[#F40F0B]/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FBEBEB] mb-4">
            {isRTL ? "دعنا نتحدث" : "Let's Connect"}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-body">
            {isRTL
              ? "سواء كنت ترغب في مناقشة أتمتة اختبارات مشروعك، أو فحص واجهات الويب، بريدي مفتوح دائماً."
              : "Whether you are looking to scale test automation frameworks or audit frontend quality, my inbox is open."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 rounded-2xl bg-[#220202]/50 border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F40F0B]/10 border border-[#F40F0B]/30 flex items-center justify-center text-[#F40F0B] shrink-0">
                <Mail className="w-5 h-5"/>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-400 block font-heading">
                  {isRTL ? "البريد الإلكتروني المباشر" : "Direct Email"}
                </span>
                <a
                  href="mailto:noureldeen.fn@gmail.com"
                  className="font-body text-sm font-semibold text-[#FBEBEB] hover:text-[#F40F0B] transition-colors"
                >
                  noureldeen.fn@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F40F0B]/10 border border-[#F40F0B]/30 flex items-center justify-center text-[#F40F0B] shrink-0">
                <MapPin className="w-5 h-5"/>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-400 block font-heading">
                  {isRTL ? "الموقع والعمل" : "Location / Availability"}
                </span>
                <span className="font-body text-sm text-[#FBEBEB] block">
                  {isRTL ? "متاح للعمل (عن بُعد / هجين)" : "Available Worldwide (Remote / Hybrid)"}
                </span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 rounded-2xl bg-[#220202]/50 border border-white/10 p-6 sm:p-8">
            {/* Status Alerts */}
            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0"/>
                <span>
                  {isRTL
                    ? "تم إرسال رسالتك بنجاح! سأرد عليك في أقرب وقت."
                    : "Message sent successfully! I will get back to you shortly."}
                </span>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-400 text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0"/>
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-heading mb-2">
                    {isRTL ? "الاسم" : "Your Name"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#F40F0B] focus:outline-none transition-colors"
                    placeholder={isRTL ? "اسمك الكامل" : "Jane Doe"}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-heading mb-2">
                    {isRTL ? "البريد الإلكتروني" : "Email Address"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#F40F0B] focus:outline-none transition-colors"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-heading mb-2">
                  {isRTL ? "موضوع الرسالة" : "Subject"}
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#F40F0B] focus:outline-none transition-colors"
                  placeholder={isRTL ? "استفسار بخصوص مشروع / جودة" : "Project Inquiry / SDET Role"}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-heading mb-2">
                  {isRTL ? "تفاصيل الرسالة" : "Message"}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#F40F0B] focus:outline-none transition-colors resize-none"
                  placeholder={isRTL ? "اكتب تفاصيل طلبك أو استفسارك هنا..." : "Tell me about your project goals or testing requirements..."}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#F40F0B] hover:brightness-110 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#F40F0B]/30 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin"/>
                    <span>{isRTL ? "جارٍ الإرسال..." : "Sending..."}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4"/>
                    <span>{isRTL ? "إرسال الرسالة" : "Send Message"}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
