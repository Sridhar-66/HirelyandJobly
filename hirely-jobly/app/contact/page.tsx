"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Clock, MessageCircle, Sparkles } from "lucide-react";
import { Nav, Footer, Pill } from "@/components/Sections";
import { site, courses, hubs } from "@/data/content";

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  course: string;
  centerPreference: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  college?: string;
  course?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    centerPreference: "madhapur",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!form.name.trim()) {
      errs.name = "Full name is required.";
    }

    if (!form.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone)) {
      errs.phone = "Please enter a valid phone number (at least 8-10 digits).";
    }

    if (!form.college.trim()) {
      errs.college = "College / University name is required.";
    }

    if (!form.course) {
      errs.course = "Please select a course track.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <Nav activePath="/contact" />
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <Pill>Free Career Guidance</Pill>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Book your <span className="gradient-text">free demo &amp; counselling</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
            Speak directly with our senior academic counsellor in Hyderabad. We help you choose the right course track, discuss batch timings, and evaluate your eligibility for up to 40% scholarships.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="card p-6 md:p-8">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Counselling Request Received!
                  </h2>
                  <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <b>{form.name}</b>. Our academic counselor will call you at <b>{form.phone}</b> within 2 business hours to schedule your free demo class.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        college: "",
                        course: "",
                        centerPreference: "madhapur",
                        message: "",
                      });
                    }}
                    className="btn btn-secondary mt-8 text-xs"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`field ${errors.name ? "field-error" : ""}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`field ${errors.phone ? "field-error" : ""}`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        className={`field ${errors.email ? "field-error" : ""}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        College / University Name *
                      </label>
                      <input
                        type="text"
                        name="college"
                        value={form.college}
                        onChange={handleChange}
                        placeholder="e.g. JNTUH / CBIT / VNR VJIET"
                        className={`field ${errors.college ? "field-error" : ""}`}
                      />
                      {errors.college && (
                        <p className="mt-1 text-[11px] text-red-500">{errors.college}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Interested Track *
                      </label>
                      <select
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                        className={`field ${errors.course ? "field-error" : ""}`}
                      >
                        <option value="">Select a tech course</option>
                        {courses.map((c) => (
                          <option key={c.slug} value={c.slug}>
                            {c.name} ({c.duration})
                          </option>
                        ))}
                      </select>
                      {errors.course && (
                        <p className="mt-1 text-[11px] text-red-500">{errors.course}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Preferred Mode / Center
                      </label>
                      <select
                        name="centerPreference"
                        value={form.centerPreference}
                        onChange={handleChange}
                        className="field"
                      >
                        <option value="madhapur">Madhapur (HITEC City Center)</option>
                        <option value="ameerpet">Ameerpet Metro Hub</option>
                        <option value="online">Live Interactive Online</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Any questions or specific career goals? (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="e.g. Looking for weekend batch with placement assistance..."
                      className="field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary w-full py-3.5 text-sm font-semibold mt-2"
                  >
                    {submitting ? "Booking Your Demo..." : "Book Free Demo & Counselling Session"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & Centers Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 text-base mb-4">
                Hyderabad Training Centers
              </h3>
              <div className="space-y-4 text-xs">
                {hubs.map((hub) => (
                  <div key={hub.id} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                      <MapPin size={14} className="text-blue-600" />
                      {hub.name}
                    </div>
                    <p className="mt-1 text-slate-600 leading-relaxed pl-5">
                      {hub.address}
                    </p>
                    <span className="mt-1.5 inline-block text-[11px] font-semibold text-emerald-600 pl-5">
                      ✓ {hub.batch}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp Support */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-md">
              <div className="flex items-center gap-2 font-bold text-sm mb-2">
                <MessageCircle size={18} />
                Instant WhatsApp Assistance
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Need immediate response regarding syllabus, fees, or demo timings? Chat directly with our admission counselor.
              </p>
              <a
                href={`https://wa.me/${site.whatsapp.replace(/\+/g, "")}?text=Hi%20Hirely%20%26%20Jobly%20team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20courses.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-4 w-full bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold justify-center"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
