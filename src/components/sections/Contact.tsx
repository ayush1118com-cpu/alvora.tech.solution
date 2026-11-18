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
  "General Consultation",
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
    <section id="contact" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Have An Idea?"
          highlightedText="Let's Build Something Great."
          description="Tell us about your project. Our team will get in touch to discuss the right solution for your business."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Company Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F5F8FC] rounded-2xl p-6 sm:p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-[#101828] mb-2">
                Connect Directly With Our Solutions Team
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
                Whether you need a full enterprise software build, modern POS system, or digital marketing growth strategy, our team is ready to assist.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-[#1677E8]/10 text-[#1677E8] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${companyData.phones[0].replace(/\s+/g, "")}`}
                      className="text-sm font-bold text-[#123B8A] hover:text-[#1677E8] transition-colors block"
                    >
                      {companyData.phones[0]}
                    </a>
                    <a
                      href={`tel:${companyData.phones[1].replace(/\s+/g, "")}`}
                      className="text-xs font-semibold text-slate-600 hover:text-[#1677E8] transition-colors block"
                    >
                      {companyData.phones[1]}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-[#1677E8]/10 text-[#1677E8] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Official Inquiries
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
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-[#1677E8]/10 text-[#1677E8] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Operations Hub
                    </span>
                    <p className="text-xs font-semibold text-slate-800">
                      {companyData.address.city}, {companyData.address.state}, {companyData.address.country}
                    </p>
                    <span className="text-[11px] text-slate-500">
                      Serving Global & Regional Clients
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-[#1677E8]/10 text-[#1677E8] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Consultation Hours
                    </span>
                    <p className="text-xs font-semibold text-slate-800">
                      {companyData.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA / Guarantee Pill */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-800 block">
                  Confidential & Non-Disclosure Assured
                </span>
                <span className="text-slate-500">
                  Your project concept and business data are treated with strict confidentiality.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#101828]">
                Submit Project Inquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Please complete all required fields below. We typically respond within 24 business hours.
              </p>
            </div>

            {/* Submission Status Alert */}
            {submissionStatus === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <p className="font-bold">Inquiry Successfully Submitted!</p>
                  <p className="mt-0.5 text-emerald-800">{statusMessage}</p>
                </div>
              </div>
            )}

            {submissionStatus === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
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
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-[#1677E8]/20 focus:outline-none ${
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
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-[#1677E8]/20 focus:outline-none ${
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
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-[#1677E8]/20 focus:outline-none ${
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#1677E8] text-slate-900 bg-white text-sm transition-colors focus:ring-2 focus:ring-[#1677E8]/20 focus:outline-none"
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
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-[#1677E8]/20 focus:outline-none bg-white ${
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#1677E8] text-slate-900 bg-white text-sm transition-colors focus:ring-2 focus:ring-[#1677E8]/20 focus:outline-none"
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
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-[#1677E8]/20 focus:outline-none resize-y ${
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
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <p>
                  Privacy Notice: The submitted information is solely used to evaluate and respond to your business inquiry. We do not sell or share your contact data.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#123B8A] hover:bg-[#0C2860] active:bg-[#081C44] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Inquiry...</span>
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
        </div>
      </div>
    </section>
  );
};
