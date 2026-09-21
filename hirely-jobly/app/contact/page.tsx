"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Nav, Footer } from "@/components/Sections";
import { site, courses } from "@/data/content";

interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  course: string;
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
    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log("Contact form submitted successfully:", form);
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
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>

        <div className="mb-10">
          <span className="pill mb-3 inline-block">Get in touch</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Book a free demo or speak with our team
          </h1>
          <p className="mt-3 max-w-xl text-sm text-neutral-600">
            Have questions about batch schedules, syllabus details, or Hyderabad campus visits? Leave your details and an academic counsellor will reach out within 24 hours.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left Form (2 cols) */}
          <div className="lg:col-span-2">
            <div className="card p-6 md:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">
                    Thank you, {form.name.split(" ")[0]}!
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-sm text-neutral-600">
                    We have received your enquiry for the <b>{courses.find((c) => c.slug === form.course)?.name || form.course}</b> track. Our counsellor will call or WhatsApp you at <b>{form.phone}</b> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", college: "", course: "", message: "" });
                    }}
                    className="btn btn-light mt-8 text-xs"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="e.g. Rahul Sharma"
                        value={form.name}
                        onChange={handleChange}
                        className={`field ${errors.name ? "field-error" : ""}`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="e.g. rahul@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`field ${errors.email ? "field-error" : ""}`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="e.g. +91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        className={`field ${errors.phone ? "field-error" : ""}`}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="college" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                        College / University <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="college"
                        type="text"
                        name="college"
                        placeholder="e.g. JNTU Hyderabad / CBIT"
                        value={form.college}
                        onChange={handleChange}
                        className={`field ${errors.college ? "field-error" : ""}`}
                      />
                      {errors.college && <p className="mt-1 text-xs text-rose-500">{errors.college}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                      Course Interested In <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className={`field cursor-pointer ${errors.course ? "field-error" : ""}`}
                    >
                      <option value="">Select a course track...</option>
                      {courses.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.name} ({c.meta})
                        </option>
                      ))}
                      <option value="career-bundle">Career Bundle (2 Courses + Placement Prep)</option>
                      <option value="not-sure">Not sure yet — need counselling</option>
                    </select>
                    {errors.course && <p className="mt-1 text-xs text-rose-500">{errors.course}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-800 mb-1.5">
                      Message or Questions <span className="text-neutral-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Let us know your branch, semester, or specific questions about the batch schedule..."
                      value={form.message}
                      onChange={handleChange}
                      className="field resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-dark w-full justify-center py-3 text-sm cursor-pointer disabled:opacity-70"
                  >
                    {submitting ? "Sending details..." : "Request Free Demo & Callback"} <ArrowUpRight size={15} />
                  </button>

                  <p className="text-[11px] text-center text-neutral-400">
                    We respect your privacy. No spam — only genuine admissions assistance from our Hyderabad campus team.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Contact Details Sidebar */}
          <div className="space-y-6">
            <div className="card p-6">
              <span className="pill mb-3 inline-block">Contact Info</span>
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-4">Hyderabad Training Hub</h3>

              <div className="space-y-4 text-xs text-neutral-600">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-neutral-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-800">Address</div>
                    {/* TODO: replace with exact Hyderabad centre address */}
                    <div>Madhapur, HITEC City, Hyderabad, Telangana 500081</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-neutral-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-800">Email</div>
                    {/* TODO: replace with active contact inbox */}
                    <a href={`mailto:${site.email}`} className="text-neutral-900 underline hover:text-black">
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-neutral-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-800">Phone / WhatsApp</div>
                    {/* TODO: replace with active contact number */}
                    <a href={`tel:${site.phone}`} className="text-neutral-900 hover:text-black">
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-neutral-800 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-800">Counselling Hours</div>
                    <div>Monday – Saturday: 9:00 AM – 7:30 PM</div>
                    <div>Sunday: 10:00 AM – 4:00 PM (By appointment)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-card p-6">
              <span className="inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-lime-400 mb-2">
                Fast Response
              </span>
              <h4 className="font-serif text-lg font-bold text-white mb-2">Instant WhatsApp Counselling</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Need quick answers right away? Chat directly with an admissions mentor on WhatsApp for batch dates and course brochures.
              </p>
              {/* TODO: replace href with active wa.me link */}
              <a
                href="https://wa.me/910000000000?text=Hi%20Hirely%20and%20Jobly,%20I'm%20interested%20in%20your%20tech%20courses"
                target="_blank"
                rel="noreferrer"
                className="btn bg-white text-black hover:bg-neutral-100 text-xs w-full justify-center mt-4"
              >
                Chat on WhatsApp <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
