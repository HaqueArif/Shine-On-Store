"use client";

import { TCategories, TProduct } from "@/types/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { StarRating } from "../StarRating";
import PriceRange from "../PriceRange";
import SelectCategory from "../SelectCategory";

const AllProducts = ({ products }: { products: TProduct[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const rating = searchParams.get("trending");
  const isTrending = searchParams.get("trending");
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");

  // const [trending, setTrending] = useState(0);
  const [selectedRating, setSelectedRating] = useState(rating ? 4.9 : 0);
  const [selectedCategory, setSelectedCategory] = useState(category || "");
  const [priceRange, setPriceRange] = useState([
    priceMin ? Number(priceMin) : 0,
    priceMax ? Number(priceMax) : 1000,
  ]);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
    // if (isTrending) {
    //   setTrending(Number(4.9));
    // }
    if (rating) {
      setSelectedRating(4.9);
    }
    if (priceMin && priceMax) {
      setPriceRange([Number(priceMin), Number(priceMax)]);
    }
  }, [category, rating, priceMin, priceMax]);

  const handleRatingChange = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (value: string) => {
    const [min, max] = value.split("-").map(Number);
    setPriceRange([min, max]);
  };

  const handleProductClick = (category: string, id: string) => {
    router.push(`/${category}/${id}`);
  };

  const query: any = {};
  if (selectedRating) query.rating = selectedRating;
  if (selectedCategory) query.category = selectedCategory;
  if (priceRange) {
    query.priceMin = priceRange[0];
    query.priceMax = priceRange[1];

    const queryString = new URLSearchParams(query).toString();
    router.push(`/products?${queryString}`);
  }

  const filteredProducts = products.filter((product: TProduct) => {
    let isMatch = true;
    if (selectedCategory)
      isMatch = isMatch && product.category === selectedCategory;
    if (rating) isMatch = isMatch && product.rating >= 4.9;
    if (!rating && selectedRating)
      isMatch = isMatch && product.rating >= selectedRating;
    if (priceRange[0] !== 0)
      isMatch = isMatch && product.price >= priceRange[0];
    if (priceRange[1] !== 1000)
      isMatch = isMatch && product.price <= priceRange[1];
    return isMatch;
  });

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div>
      <div className="pb-40 pt-20">
        <div className="mb-2">
          <h1 className="font-semibold text-3xl">All Products:</h1>
        </div>
        <div className="grid grid-cols-10 gap-8">
          <div className="col-span-10 sm:col-span-4 md:col-span-3 xl:col-span-2 px-2 flex  flex-col gap-3 ">
            <label>
              <SelectCategory
                categories={uniqueCategories}
                selectedCategory={selectedCategory}
                onChange={handleCategoryChange}
              />
            </label>
            <div>
              <label>
                Rating:
                <div className="w-[80%]">
                  <StarRating
                    rating={selectedRating}
                    onClick={handleRatingChange}
                  />
                </div>
              </label>
            </div>

            <label>
              <div>
                <PriceRange
                  priceRange={priceRange}
                  onChange={handlePriceRangeChange}
                />
              </div>
            </label>
          </div>
          <div className="col-span-10 sm:col-span-6 md:col-span-7 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-1">
            {filteredProducts.map((product: TProduct) => (
              <div
                onClick={() => handleProductClick(product.category, product.id)}
                key={product._id}
                className="flex cursor-pointer"
              >
                <div className="card-compact max-w-96 bg-base-100 h-full hover:bg-slate-50">
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
                          $ {(product.price - product.price * 0.15).toFixed(2)}
                        </span>
                        <span className="text-sm"> - 15%</span>
                        <p className="">
                          ${" "}
                          <span className="line-through">{product.price}</span>
                        </p>
                      </div>
                    </div>
                    <p>{product.name}</p>
                    <p>{product.description.slice(0, 50)}...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
