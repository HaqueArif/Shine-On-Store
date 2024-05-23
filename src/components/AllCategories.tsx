"use client";

import { TCategories } from "@/types/types";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const AllCategories = ({ categories }: { categories: TCategories[] }) => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`${category}-item /?category=${category}`);
  };

  return (
    <div className="mt-40 pb-40">
      <h1 className="font-semibold text-3xl">All Categories:</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 mt-3">
        {categories.map((category) => (
          <div
            key={category.category}
            className="bg-slate-200 pt-5 px-2 hover:bg-slate-50 hover:cursor-pointer"
            onClick={() => handleCategoryClick(category.category)}
          >
            <div className="relative w-16 h-16 mx-auto">
              <Image
                layout="fill"
                objectFit="cover"
                src={category?.image}
                alt={category?.category}
              />
            </div>
            <div className="text-center text-sm h-[50px] flex justify-center items-center">
              <p>{category?.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
