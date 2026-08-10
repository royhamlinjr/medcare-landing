import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "dark" | "outline";
  icon?: ReactNode;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-primary hover:bg-primary-dark text-white",
  dark:
    "bg-dark hover:bg-black text-white",
  outline:
    "border border-dark/20 text-dark hover:bg-dark hover:text-white",
};

const Button = ({
  children,
  variant = "primary",
  icon,
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-colors duration-200 ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;