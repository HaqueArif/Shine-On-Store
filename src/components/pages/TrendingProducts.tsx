import { TProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import TrendingProductCard from "../TrendingProduct";

const TrendingProducts = async () => {
  const res = await fetch("https://shine-on-server-five.vercel.app/products", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  const products = data[0]?.products;
  const trendingProducts = products.filter(
    (product: TProduct) => product.rating > 4.8
  );

  return (
    <div>
      <div className="py-20">
        <TrendingProductCard trendingProducts={trendingProducts} />
      </div>
    </div>
  );
};

export default TrendingProducts;
