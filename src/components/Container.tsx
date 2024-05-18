import cn from "@/utils/cn";
import React, { ReactNode } from "react";
type TContainerProps = {
  children: ReactNode;
  className?: string;
};
const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={cn("w-full max-w-[1290px] mx-auto px-5", className)}>
      {children}
    </div>
  );
};

export default Container;
