import React from "react";

type PriceRangeProps = {
  priceRange: number[];
  onChange: (value: string) => void;
};

const PriceRange = ({ priceRange, onChange }: PriceRangeProps) => {
  const handlePriceRangeChange = (value: string) => {
    onChange(value);
  };

  return (
    <div>
      <label className="block">Price Range:</label>
      <div>
        <label className="block cursor-pointer">
          <input
            type="radio"
            name="priceRange"
            value="0-50"
            checked={priceRange[0] === 0 && priceRange[1] === 50}
            onChange={() => handlePriceRangeChange("0-50")}
          />
          $0 - $50
        </label>
        <label className="block cursor-pointer">
          <input
            type="radio"
            name="priceRange"
            value="0-50"
            checked={priceRange[0] === 50 && priceRange[1] === 150}
            onChange={() => handlePriceRangeChange("50-150")}
          />
          $0 - $50
        </label>
        <label className="block cursor-pointer">
          <input
            type="radio"
            name="priceRange"
            value="0-50"
            checked={priceRange[0] === 150 && priceRange[1] === 350}
            onChange={() => handlePriceRangeChange("150-350")}
          />
          $0 - $50
        </label>
        <label className="block cursor-pointer">
          <input
            type="radio"
            name="priceRange"
            value="0-50"
            checked={priceRange[0] === 350 && priceRange[1] === 550}
            onChange={() => handlePriceRangeChange("350-550")}
          />
          $0 - $50
        </label>
        <label className="block cursor-pointer">
          <input
            type="radio"
            name="priceRange"
            value="0-50"
            checked={priceRange[0] === 550 && priceRange[1] === 1050}
            onChange={() => handlePriceRangeChange("550-1050")}
          />
          $0 - $50
        </label>
        {/* Add other price range options similarly */}
      </div>
    </div>
  );
};

export default PriceRange;
