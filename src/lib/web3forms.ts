import { ContactFormData } from "./validation";

export interface LeadSubmissionResponse {
  success: boolean;
  message: string;
}

export interface ILeadSubmissionService {
  submitInquiry(data: ContactFormData): Promise<LeadSubmissionResponse>;
}

/**
 * Web3Forms client-side lead delivery integration.
 * In the future, this class or interface can be swapped for an internal Next.js API route / database adapter.
 */
export class Web3FormsLeadService implements ILeadSubmissionService {
  private accessKey: string;
  private endpoint: string;

  constructor() {
    this.accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "0ad82509-ff69-4425-acd0-be919949d6a7";
    this.endpoint = "https://api.web3forms.com/submit";
  }

  async submitInquiry(data: ContactFormData): Promise<LeadSubmissionResponse> {
    const key =
      this.accessKey ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "0ad82509-ff69-4425-acd0-be919949d6a7";

    // Basic bot check honeypot
    if (data.botcheck && data.botcheck.trim() !== "") {
      return {
        success: false,
        message: "Bot submission rejected.",
      };
    }

    if (!key || key === "your_access_key_here") {
      return {
        success: false,
        message:
          "Web3Forms Access Key is not configured. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment.",
      };
    }

    try {
      const payload = {
        access_key: key,
        subject: `New Project Inquiry from ${data.fullName} — Alvora Tech Solution`,
        from_name: "Alvora Lead Portal",
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        company: data.companyName || "Not Specified",
        service_required: data.serviceRequired,
        budget: data.estimatedBudget || "Not Specified",
        message: data.projectDescription,
        botcheck: data.botcheck || "",
      };

      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        return {
          success: true,
          message:
            "Thank you! Your enquiry has been submitted. We will contact you shortly.",
        };
      } else {
        return {
          success: false,
          message:
            result.message ||
            "Unable to submit inquiry at this time. Please check your information or try again.",
        };
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Network error. Please try again later.";
      return {
        success: false,
        message: `Submission failed: ${errorMessage}`,
      };
    }
  }
}

export const leadService = new Web3FormsLeadService();
