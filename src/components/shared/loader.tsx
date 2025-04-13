import { LoaderCircle } from "lucide-react";
import React from "react";

type Props = {
  size?: number;
};

const DefaultLoader = ({ size = 40 }: Props) => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <LoaderCircle className="animate-spin" size={size} color="#4B5563" />
    </div>
  );
};

export default DefaultLoader;
