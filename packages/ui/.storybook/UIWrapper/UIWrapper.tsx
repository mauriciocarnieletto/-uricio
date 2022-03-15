import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UIWrapper = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default UIWrapper;
