"use client";

import { TProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TrendingProductCard = ({
  trendingProducts,
}: {
  trendingProducts: TProduct[];
}) => {
  const router = useRouter();

  const handleCategoryClick = () => {
    router.push(`/products?trending=true`);
  };
  return (
    <div>
      <div className="flex justify-between mb-2">
        <h1 className="font-semibold text-3xl "> Trending Products :</h1>
        <button
          onClick={() => handleCategoryClick()}
          className="border border-orange-500 hover:bg-orange-600 hover:text-white text-black px-5 py-2 rounded-md capitalize transition-all"
        >
          See All Products
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6   gap-1 ">
        {trendingProducts.slice(0, 6).map((product: TProduct) => (
          <div
            key={product._id}
            className=" card-compact max-w-96 bg-base-100  hover:bg-slate-50"
          >
            <div className="relative h-20 w-20 mx-auto mt-8">
              <figure>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={product?.image}
                  alt={product?.name}
                />
              </figure>
            </div>
            <div className="card-body">
              <div className="card-title">
                <div>
                  <span className="badge badge-secondary xl">
                    $ {(product.price - product.price * 0.15).toFixed()}
                  </span>
                  <span className="text-sm"> - 15%</span>
                  <p className="">
                    $ <span className="line-through">{product.price}</span>
                  </p>
                </div>
              </div>
              <p>{product.name}</p>
              <p>{product.description.slice(0, 50)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProductCard;
