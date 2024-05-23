import { StarRatingProps } from "@/types/types";
import { StarIcon } from "lucide-react";

export const StarRating = ({ rating, onClick }: StarRatingProps) => {
  const handleStarClick = (clickedRating: number) => {
    onClick(clickedRating);
  };
  return (
    <div className="rating rating-lg rating-half">
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-400  mask mask-star-2 mask-half-1"
        onClick={() => handleStarClick(0.5)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-2"
        onClick={() => handleStarClick(1)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-1"
        onClick={() => handleStarClick(1.5)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-2"
        onClick={() => handleStarClick(2)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-1"
        onClick={() => handleStarClick(2.5)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-2"
        onClick={() => handleStarClick(3)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-1"
        onClick={() => handleStarClick(3.5)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-2"
        onClick={() => handleStarClick(4)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-1"
        onClick={() => handleStarClick(4.5)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-2"
        onClick={() => handleStarClick(5)}
      />
    </div>
  );
};
