import Link from "next/link";
import React from "react";

const Category = ({ category: { id, title, image } }) => {
  return (
    <Link
      href="#"
      className="flex flex-col items-center gap-y-2 text-center p-4 transition hover:bg-purple-50"
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded border border-gray-200"
      />
      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color tracking-tight">
        {title}
      </span>
    </Link>
  );
};

export default Category;
