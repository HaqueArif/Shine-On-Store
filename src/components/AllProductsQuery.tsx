"use client";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

const AllProductsQuery: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
  const router = useRouter();

  const handleRatingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRating(Number(e.target.value));
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const [min, max] = e.target.value.split("-").map(Number);
    setPriceRange([min, max]);
  };

  const handleSearch = () => {
    const query: any = {};
    if (selectedRating) query.rating = selectedRating;
    if (selectedCategory) query.category = selectedCategory;
    if (priceRange)
      (query.priceMin = priceRange[0]), (query.priceMax = priceRange[1]);

    // (`products/?category=${query}`)

    const queryString = new URLSearchParams(query).toString();
    router.push(`/all-products?${queryString}`);
  };

  return (
    <div>
      <select onChange={handleRatingChange}>
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <select onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
      <select onChange={handlePriceRangeChange}>
        <option value="">Select Price Range</option>
        <option value="0-50">0 - 50</option>
        <option value="50-100">50 - 100</option>
        <option value="100-200">100 - 200</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default AllProductsQuery;
