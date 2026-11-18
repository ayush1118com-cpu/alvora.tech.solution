import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold gap-2",
    lg: "px-6 py-3.5 text-base font-semibold gap-2.5 shadow-sm",
  };

  const variantStyles = {
    primary:
      "bg-[#123B8A] text-white hover:bg-[#0C2860] active:bg-[#081C44] focus-visible:outline-[#123B8A] shadow-sm hover:shadow-md hover:-translate-y-0.5 btn-shine-effect",
    secondary:
      "bg-[#1677E8] text-white hover:bg-[#1264c5] active:bg-[#0e52a4] focus-visible:outline-[#1677E8] shadow-sm hover:shadow-md hover:-translate-y-0.5 btn-shine-effect",
    outline:
      "border border-[#123B8A]/25 text-[#123B8A] bg-white hover:bg-[#F5F8FC] hover:border-[#123B8A] active:bg-blue-50 focus-visible:outline-[#123B8A] hover:-translate-y-0.5",
    white:
      "bg-white text-[#123B8A] hover:bg-slate-50 active:bg-slate-100 shadow-md hover:shadow-lg focus-visible:outline-white hover:-translate-y-0.5 btn-shine-effect",
    ghost:
      "text-[#123B8A] hover:bg-[#F5F8FC] active:bg-blue-100/60 focus-visible:outline-[#123B8A]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} aria-disabled={disabled}>
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
