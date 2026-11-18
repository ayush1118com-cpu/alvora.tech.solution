export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceRequired: string;
  estimatedBudget: string;
  projectDescription: string;
  botcheck?: string; // honeypot
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  serviceRequired?: string;
  estimatedBudget?: string;
  projectDescription?: string;
  general?: string;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  // Full Name validation
  const nameTrimmed = (data.fullName || "").trim();
  if (!nameTrimmed) {
    errors.fullName = "Full name is required.";
  } else if (nameTrimmed.length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  } else if (!/^[a-zA-Z\s.'-]+$/.test(nameTrimmed)) {
    errors.fullName = "Please enter a valid name using letters and spaces.";
  }

  // Business Email validation
  const emailTrimmed = (data.email || "").trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailTrimmed) {
    errors.email = "Business email is required.";
  } else if (!emailRegex.test(emailTrimmed)) {
    errors.email = "Please enter a valid email address (e.g., name@company.com).";
  }

  // Phone Number validation
  const phoneTrimmed = (data.phone || "").trim();
  // Validates standard international and national phone formats (7 to 15 digits, optional + prefix, spaces, dashes)
  const phoneClean = phoneTrimmed.replace(/[\s\-()]/g, "");
  const phoneRegex = /^\+?[0-9]{7,15}$/;
  if (!phoneTrimmed) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(phoneClean)) {
    errors.phone = "Please enter a valid phone number (at least 7 to 15 digits).";
  }

  // Service Required validation
  if (!data.serviceRequired || data.serviceRequired === "") {
    errors.serviceRequired = "Please select a required service.";
  }

  // Project Description validation
  const descTrimmed = (data.projectDescription || "").trim();
  if (!descTrimmed) {
    errors.projectDescription = "Project description is required.";
  } else if (descTrimmed.length < 10) {
    errors.projectDescription = "Please provide at least 10 characters detailing your project.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
