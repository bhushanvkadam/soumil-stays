import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants = {
  primary: "bg-forest text-white hover:bg-[#15352a]",
  outline: "border border-forest text-forest hover:bg-forest hover:text-white bg-transparent",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`rounded-lg font-sans font-medium transition-colors duration-200 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
