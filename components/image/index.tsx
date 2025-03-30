import React from "react";

interface ImageProps {
  src: string;
  alt?: string;
  raw?: boolean; // if true, src is a raw url and not a path to the public/images folder
  className?: string;
}

const Image = ({ src, alt, className, raw = false }: ImageProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={raw ? src : `/images/${src}`}
      alt={alt ?? "workflow"}
      className={className}
    />
  );
};

export default Image;
