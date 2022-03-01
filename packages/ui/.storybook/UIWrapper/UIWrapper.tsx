import React, { ReactNode } from "react";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
// import "../../src/styles/tailwind.css";

interface Props {
  children: ReactNode;
}

const UIWrapper = ({ children }: Props) => {
  return <div className="px-20 py-10">{children}</div>;
};

export default UIWrapper;
