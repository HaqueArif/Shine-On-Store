import React from "react";

type CategoryProps = {
  categories: string[];
  selectedCategory: string;
  onChange: (category: string) => void;
};

const SelectCategory = ({
  categories,
  selectedCategory,
  onChange,
}: CategoryProps) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Category:</span>
        </div>
        <select
          className="select select-bordered"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option disabled value="">
            Pick One
          </option>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectCategory;
