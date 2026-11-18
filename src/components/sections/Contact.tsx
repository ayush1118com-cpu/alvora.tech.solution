"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { companyData } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactFormData, ValidationErrors, validateContactForm } from "@/lib/validation";
import { leadService } from "@/lib/web3forms";

const servicesOptions = [
  "Web Development",
  "Web Applications (CRM / ERP)",
  "Mobile Applications (iOS / Android)",
  "UI/UX Design & Prototyping",
  "SaaS Development",
  "Restaurant POS & Kitchen Display System",
  "Automation & API Integration",
  "Maintenance & Support",
  "Artful Creation (Digital Marketing & SEO)",
  "General Project Consultation",
];

const budgetRanges = [
  "Less than $1,000 / ₹75,000",
  "$1,000 – $3,000 / ₹75k – ₹2.5L",
  "$3,000 – $7,500 / ₹2.5L – ₹6L",
  "$7,500 – $15,000 / ₹6L – ₹12L",
  "$15,000+ / ₹12L+",
  "To be discussed / Flexible",
];

const initialFormState: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  serviceRequired: "",
  estimatedBudget: "",
  projectDescription: "",
  botcheck: "",
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear validation error on change
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Validate inputs
    const { isValid, errors: validationErrors } = validateContactForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
      setSubmissionStatus("error");
      setStatusMessage("Please correct the errors in the highlighted fields.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setStatusMessage("");

    try {
      const result = await leadService.submitInquiry(formData);

      if (result.success) {
        setSubmissionStatus("success");
        setStatusMessage(result.message);
        setFormData(initialFormState);
      } else {
        setSubmissionStatus("error");
        setStatusMessage(result.message);
      }
    } catch {
      setSubmissionStatus("error");
      setStatusMessage("An unexpected error occurred. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#1677E8]/5 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-[#38A5FF]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Direct Inquiries"
            title="Have An Idea?"
            highlightedText="Let's Build Something Great."
            description="Tell us about your project. Our team will get in touch to discuss the right solution for your business."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Company Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right" delay={100}>
              <div className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-9 border border-blue-100/90 shadow-sm hover:border-[#1677E8]/40 transition-colors">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-2">
                  Connect Directly With Our Solutions Team
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-7 font-normal">
                  Whether you need a full enterprise software build, modern restaurant POS system, or growth marketing with Artful Creation, our team is ready to assist.
                </p>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#1677E8]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-11 h-11 rounded-xl bg-[#1677E8]/10 text-[#1677E8] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                        Direct Support Line
                      </span>
                      <a
                        href={`tel:${companyData.phones[0].replace(/\s+/g, "")}`}
                        className="text-sm font-bold text-[#123B8A] hover:text-[#1677E8] transition-colors block"
                      >
                        {companyData.phones[0]}
                      </a>
                      <a
                        href={`tel:${companyData.phones[1].replace(/\s+/g, "")}`}
                        className="text-xs font-semibold text-slate-600 hover:text-[#1677E8] transition-colors block mt-0.5"
                      >
                        {companyData.phones[1]}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#1677E8]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-11 h-11 rounded-xl bg-[#1677E8]/10 text-[#1677E8] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                        Corporate Email
                      </span>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-sm font-bold text-[#123B8A] hover:text-[#1677E8] transition-colors break-all"
                      >
                        {companyData.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#1677E8]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-11 h-11 rounded-xl bg-[#1677E8]/10 text-[#1677E8] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                        Operations Hub
                      </span>
                      <p className="text-xs font-bold text-slate-800">
                        {companyData.address.city}, {companyData.address.state}, {companyData.address.country}
                      </p>
                      <span className="text-[11px] text-slate-500 font-medium">
                        India & Global Client Operations
                      </span>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#1677E8]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-11 h-11 rounded-xl bg-[#1677E8]/10 text-[#1677E8] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                        Consultation Hours
                      </span>
                      <p className="text-xs font-bold text-slate-800">
                        {companyData.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* SLA / Guarantee Pill */}
            <ScrollReveal direction="right" delay={200}>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3.5 hover:border-emerald-300 transition-colors">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-slate-800 block">
                    Strict Confidentiality & NDA Assured
                  </span>
                  <span className="text-slate-500">
                    Your project concept and business parameters are protected under standard non-disclosure practices.
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={150}>
              <div className="bg-white rounded-3xl p-7 sm:p-9 lg:p-11 border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="mb-7">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                    Submit Project Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Please complete all required fields below. Our solutions architect will review and reply within 24 business hours.
                  </p>
                </div>

                {/* Submission Status Alert */}
                {submissionStatus === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 animate-fadeIn">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-bold">Inquiry Successfully Submitted!</p>
                      <p className="mt-0.5 text-emerald-800">{statusMessage}</p>
                    </div>
                  </div>
                )}

                {submissionStatus === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 animate-fadeIn">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-bold">Submission Notice</p>
                      <p className="mt-0.5 text-red-800">{statusMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Honeypot field (hidden for spam prevention) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="botcheck">Do not fill this field</label>
                    <input
                      type="text"
                      name="botcheck"
                      id="botcheck"
                      value={formData.botcheck}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Row 1: Full Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:ring-4 focus:ring-[#1677E8]/10 focus:outline-none ${
                          errors.fullName
                            ? "border-red-400 bg-red-50/30 text-red-900"
                            : "border-slate-300 focus:border-[#1677E8] text-slate-900 bg-white"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600 font-medium">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:ring-4 focus:ring-[#1677E8]/10 focus:outline-none ${
                          errors.email
                            ? "border-red-400 bg-red-50/30 text-red-900"
                            : "border-slate-300 focus:border-[#1677E8] text-slate-900 bg-white"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:ring-4 focus:ring-[#1677E8]/10 focus:outline-none ${
                          errors.phone
                            ? "border-red-400 bg-red-50/30 text-red-900"
                            : "border-slate-300 focus:border-[#1677E8] text-slate-900 bg-white"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 font-medium">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Enterprises"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#1677E8] text-slate-900 bg-white text-sm transition-all focus:ring-4 focus:ring-[#1677E8]/10 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Required & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="serviceRequired"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        required
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:ring-4 focus:ring-[#1677E8]/10 focus:outline-none bg-white ${
                          errors.serviceRequired
                            ? "border-red-400 bg-red-50/30 text-red-900"
                            : "border-slate-300 focus:border-[#1677E8] text-slate-900"
                        }`}
                      >
                        <option value="">Select a service category</option>
                        {servicesOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.serviceRequired && (
                        <p className="mt-1 text-xs text-red-600 font-medium">
                          {errors.serviceRequired}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="estimatedBudget"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Estimated Budget <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <select
                        id="estimatedBudget"
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#1677E8] text-slate-900 bg-white text-sm transition-all focus:ring-4 focus:ring-[#1677E8]/10 focus:outline-none"
                      >
                        <option value="">Select an estimated budget range</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Description */}
                  <div>
                    <label
                      htmlFor="projectDescription"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      required
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements, target goals, timelines, and features needed..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:ring-4 focus:ring-[#1677E8]/10 focus:outline-none resize-y ${
                        errors.projectDescription
                          ? "border-red-400 bg-red-50/30 text-red-900"
                          : "border-slate-300 focus:border-[#1677E8] text-slate-900 bg-white"
                      }`}
                    />
                    {errors.projectDescription && (
                      <p className="mt-1 text-xs text-red-600 font-medium">
                        {errors.projectDescription}
                      </p>
                    )}
                  </div>

                  {/* Privacy Notice */}
                  <div className="pt-2 flex items-center gap-2.5 text-xs text-slate-500">
                    <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <p>
                      Privacy Notice: The submitted information is solely used to evaluate and respond to your business inquiry. We never share or sell contact data.
                    </p>
                  </div>

                  {/* Submit Button with Laser Shine Effect */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#123B8A] to-[#1677E8] hover:from-[#0C2860] hover:to-[#1264c5] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer btn-shine-effect"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Project Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
