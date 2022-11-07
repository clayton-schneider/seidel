import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  to: string;
  className?: string;
}
const PrimaryBtn = ({ children, to, className }: Props) => (
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
