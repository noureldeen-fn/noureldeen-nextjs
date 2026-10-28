"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";

interface ContactSectionProps {
  dict: any;
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
          page_source: "noureldeen.me Portfolio Contact",
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
        setErrorMessage(result.message || dict?.contact?.form?.error || "Failed to send message.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(dict?.contact?.form?.error || "Network error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Official Brand Channels Data
  const directChannels = [
    {
      label: dict?.contact?.directEmail || "Direct Email",
      value: "noureldeen.fn@gmail.com",
      href: "mailto:noureldeen.fn@gmail.com",
      isExternal: false,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <rect width="24" height="24" rx="6" fill="#EA4335" />
          <path d="M4 6.5l8 5.5 8-5.5v11H4v-11z" fill="#FFFFFF" fillOpacity="0.2" />
          <path d="M4.5 6h15a.5.5 0 0 1 .5.5v1.2l-8 5.3-8-5.3V6.5a.5.5 0 0 1 .5-.5z" fill="#FFFFFF" />
          <path d="M4 8.2v9.3a.5.5 0 0 0 .5.5H7V10.2l-3-2z" fill="#FFFFFF" fillOpacity="0.9" />
          <path d="M20 8.2v9.3a.5.5 0 0 1-.5.5H17V10.2l3-2z" fill="#FFFFFF" fillOpacity="0.9" />
        </svg>
      ),
    },
    {
      label: dict?.contact?.whatsapp || "WhatsApp Direct",
      value: "+20 109 534 4657",
      href: "https://wa.me/201095344657",
      isExternal: true,
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <circle cx="16" cy="16" r="16" fill="#25D366" />
          <path
            d="M23.5 19.3c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.3-.4 0-.7.2-.9.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.8s1.6 4.4 1.9 4.7c.2.3 3.2 4.9 7.7 6.8 1.1.5 1.9.7 2.6.9 1.1.4 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.2.4-2.1.3-2.3-.1-.2-.4-.3-.8-.5z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      label: dict?.contact?.linkedin || "LinkedIn Profile",
      value: "linkedin.com/in/noureldeen-zayan",
      href: "https://www.linkedin.com/in/noureldeen-zayan",
      isExternal: true,
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <rect width="32" height="32" rx="6" fill="#0A66C2" />
          <path
            d="M9.8 12.3H5.8v13.9h4V12.3zM7.8 5.8a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6zM26.2 12.3h-3.9v1.9h-.1c-.5-1.1-2-2.3-4.1-2.3-4.4 0-5.2 2.9-5.2 6.7v7.6h4v-6.7c0-1.6 0-3.7 2.3-3.7s2.6 1.8 2.6 3.6v6.8h4V12.3z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      label: dict?.contact?.github || "GitHub Repositories",
      value: "github.com/noureldeen-fn",
      href: "https://github.com/noureldeen-fn",
      isExternal: true,
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <circle cx="16" cy="16" r="16" fill="#24292E" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 5a11 11 0 0 0-3.5 21.4c.5.1.8-.2.8-.5v-2c-3.1.7-3.7-1.3-3.7-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 2.8 3.5 2 .1-.8.4-1.3.7-1.6-2.5-.3-5-1.2-5-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3.1 1.1a10.8 10.8 0 0 1 5.6 0c2.2-1.4 3.1-1.1 3.1-1.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.5A11 11 0 0 0 16 5z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative w-full py-20 lg:py-28 bg-[#161616] text-[#FBEBEB] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 -start-32 w-96 h-96 bg-[#220202] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -end-32 w-96 h-96 bg-[#F40F0B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl mb-8 lg:mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FBEBEB]">
            {dict?.contact?.sectionTitle || (isRTL ? "دعنا نتواصل ونبني معاً" : "Let's Connect & Collaborate")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Channels (NO Location) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#220202]/60 border border-white/10 p-6 sm:p-8 space-y-4 shadow-2xl">
            <span className="text-xs uppercase tracking-wider text-[#F40F0B] font-heading font-semibold block mb-2">
              {isRTL ? "قنوات التواصل المباشر" : "Direct Channels"}
            </span>

            {directChannels.map((channel, idx) => (
              <a
                key={idx}
                href={channel.href}
                target={channel.isExternal ? "_blank" : undefined}
                rel={channel.isExternal ? "noreferrer" : undefined}
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-black/40 border border-white/5 hover:border-[#F40F0B]/50 hover:bg-[#310302]/40 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="shrink-0 transform transition-transform duration-200 group-hover:scale-110">
                    {channel.icon}
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-heading">
                      {channel.label}
                    </span>
                    <span className="font-body text-xs sm:text-sm font-semibold text-[#FBEBEB] group-hover:text-white transition-colors">
                      {channel.value}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#F40F0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>

          {/* Right Column: Web3Forms Email Submission */}
          <div className="lg:col-span-7 rounded-3xl bg-[#220202]/60 border border-white/10 p-6 sm:p-8 shadow-2xl">
            {/* Real Submission Feedback */}
            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>{dict?.contact?.form?.success || "Message sent successfully!"}</span>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/70 border border-red-500/40 text-red-400 text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-heading mb-2">
                    {dict?.contact?.form?.name || "Your Name"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#F40F0B] focus:outline-none transition-colors"
                    placeholder={dict?.contact?.form?.namePlaceholder || "Jane Doe"}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-heading mb-2">
                    {dict?.contact?.form?.email || "Email Address"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#F40F0B] focus:outline-none transition-colors"
                    placeholder={dict?.contact?.form?.emailPlaceholder || "name@example.com"}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-heading mb-2">
                  {dict?.contact?.form?.subject || "Subject"}
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#F40F0B] focus:outline-none transition-colors"
                  placeholder={dict?.contact?.form?.subjectPlaceholder || "Project Scope"}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 font-heading mb-2">
                  {dict?.contact?.form?.message || "Message"}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-[#F40F0B] focus:outline-none transition-colors resize-none"
                  placeholder={dict?.contact?.form?.messagePlaceholder || "Describe your requirements..."}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#F40F0B] hover:brightness-110 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#F40F0B]/30 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{dict?.contact?.form?.sending || "Sending..."}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{dict?.contact?.form?.send || "Send Message"}</span>
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
