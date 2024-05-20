import { TProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const TrendingProducts = async () => {
  const res = await fetch("http://localhost:3200/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  const flashSaleProducts = products.filter(
    (product: TProduct) => product.rating > 4.8
  );

  return (
    <div>
      <div className="my-40">
        <div className="flex justify-between mb-2">
          <h1 className="font-semibold text-3xl "> Trending Products :</h1>
          <Link href="/flash-sale">
            <button className="border border-orange-500 hover:bg-orange-600 hover:text-white text-black px-5 py-2 rounded-md capitalize transition-all">
              See All Products
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6   gap-1 ">
          {flashSaleProducts.slice(0, 6).map((product: TProduct) => (
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
                    alt="Shoes"
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
    </div>
  );
};

export default TrendingProducts;
