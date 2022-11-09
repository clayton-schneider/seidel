import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  to?: string;
  type?: "submit" | "reset" | "button";
  className?: string;
}
const PrimaryBtn = ({ children, to, className, type = "button" }: Props) => (
  <a
    href={to}
    className={
      className +
      " bg-gradient-to-br from-primary to-primLight inline-block px-7 py-3 text-white"
    }
  >
    {children}
  </a>
);

export default PrimaryBtn;
