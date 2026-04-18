// src/app/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(100, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email is too long"),
  phone: z
    .string()
    .max(20, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  service: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  honeypot: z.string().max(0, "Bot detected"), // hidden field
});

type ContactFormData = z.infer<typeof contactSchema>;

const SERVICE_OPTIONS = [
  "Botox / Dysport",
  "Dermal Filler",
  "Sculptra",
  "Morpheus8 RF Microneedling",
  "Hydrafacial MD",
  "Chemical Peels",
  "SkinPen Microneedling",
  "BBL Photofacial",
  "Halo Hybrid Laser",
  "Laser Hair Removal",
  "CoolPeel CO2",
  "Consultation",
  "Membership",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setServerError(
          (body as { error?: string }).error ||
            "We couldn't send your message. Please try again or email us directly at hello@lumenaesthetics.com."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError(
        "We couldn't send your message. Check your connection and try again, or email us at hello@lumenaesthetics.com."
      );
    }
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-start gap-4 py-16"
        role="alert"
        aria-live="polite"
      >
        <CheckCircle className="text-champagne" size={32} />
        <h2 className="font-serif text-3xl text-bone font-light">
          Message received.
        </h2>
        <p className="text-stone font-sans text-base leading-relaxed max-w-sm">
          We&rsquo;ll be in touch within one business day. In the meantime,
          you&rsquo;re welcome to book a consultation directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
    >
      <p className="text-[11px] tracking-[0.2em] uppercase text-stone font-sans mb-8">
        * Required
      </p>

      {/* Honeypot — hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          id="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      <div className="flex flex-col gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-[11px] tracking-[0.15em] uppercase text-stone font-sans mb-2"
          >
            Name *
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full bg-charcoal border border-white/10 text-bone text-sm font-sans px-4 py-3 focus:outline-none focus:border-champagne/50 transition-colors placeholder:text-stone/40"
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && (
            <p
              id="name-error"
              className="mt-2 text-[12px] text-red-400 font-sans"
              role="alert"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-[11px] tracking-[0.15em] uppercase text-stone font-sans mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full bg-charcoal border border-white/10 text-bone text-sm font-sans px-4 py-3 focus:outline-none focus:border-champagne/50 transition-colors placeholder:text-stone/40"
            placeholder="your@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-2 text-[12px] text-red-400 font-sans"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-[11px] tracking-[0.15em] uppercase text-stone font-sans mb-2"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full bg-charcoal border border-white/10 text-bone text-sm font-sans px-4 py-3 focus:outline-none focus:border-champagne/50 transition-colors placeholder:text-stone/40"
            placeholder="(212) 555-0000"
            {...register("phone")}
          />
          {errors.phone && (
            <p
              id="phone-error"
              className="mt-2 text-[12px] text-red-400 font-sans"
              role="alert"
            >
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="block text-[11px] tracking-[0.15em] uppercase text-stone font-sans mb-2"
          >
            I&rsquo;m interested in
          </label>
          <select
            id="service"
            className="w-full bg-charcoal border border-white/10 text-bone text-sm font-sans px-4 py-3 focus:outline-none focus:border-champagne/50 transition-colors"
            {...register("service")}
          >
            <option value="">Select a treatment (optional)</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-[11px] tracking-[0.15em] uppercase text-stone font-sans mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            aria-required="true"
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full bg-charcoal border border-white/10 text-bone text-sm font-sans px-4 py-3 focus:outline-none focus:border-champagne/50 transition-colors placeholder:text-stone/40 resize-none"
            placeholder="Tell us what brings you in..."
            {...register("message")}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-2 text-[12px] text-red-400 font-sans"
              role="alert"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Server error */}
        {serverError && (
          <div
            className="border border-red-400/30 p-4"
            role="alert"
            aria-live="assertive"
          >
            <p className="text-red-400 text-sm font-sans">{serverError}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-block text-xs tracking-widest uppercase font-sans text-ink-deep bg-champagne px-10 py-4 hover:bg-champagne-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
