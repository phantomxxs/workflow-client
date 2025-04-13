import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  buttonComponent?: ReactNode;
  isSmallText?: boolean;
};

const Header = ({ title, buttonComponent, isSmallText = false }: Props) => {
  return (
    <div className="mb-5 flex w-full items-center justify-between">
      <h1
        className={cn(
          "font-semibold dark:text-white",
          isSmallText ? "text-lg" : "text-2xl",
        )}
      >
        {title}
      </h1>

      {buttonComponent}
    </div>
  );
};

export default Header;
