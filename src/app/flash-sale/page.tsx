import Container from "@/components/Container";
import FlashSaleTimer from "@/components/FlashSaleTimer";
import { TProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const res = await fetch("http://localhost:3200/products");
  const products = await res.json();
  const flashSaleProducts = products.filter(
    (product: TProduct) => product.flashSale
  );

  return (
    <div className="bg-slate-100">
      <Container>
        <div className="pt-20 ">
          <h1 className="font-bold text-7xl text-center text-[#f46c4e]">
            Flash sale
          </h1>
          <p className="text-center text-2xl border-b-2 mb-5">
            Deals daily update
          </p>
          <p className="mb-16 lg:w-[80%] mx-auto text-center">
            Attention all cleaning supplies enthusiasts! Do not miss out on our
            exclusive Flash Sale. Get a fantastic 45% off on a wide range of
            top-quality cleaning supplies. This limited-time offer includes
            everything you need to keep your home spotless, from multipurpose
            cleaners to specialized tools. Hurry, these deals would not last
            long!
          </p>
          <div className="flex justify-between items-center border border-b-4 border-b-orange-500 bg-orange-100 px-5 py-2 rounded-xl">
            <h1 className=" text-xl "> On Sale Now</h1>
            <FlashSaleTimer />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-1 pb-40">
            {flashSaleProducts.map((product: TProduct) => (
              <div
                key={product._id}
                className=" card-compact max-w-96 mx-auto bg-base-100 hover:bg-slate-50"
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
                        $ {(product.price - product.price * 0.45).toFixed()}
                      </span>
                      <span className="text-sm"> - 45%</span>
                      <p className="">
                        $ <span className="line-through">{product.price}</span>
                      </p>
                    </div>
                  </div>
                  <p>{product.name}</p>
                  <p>{product.description.slice(0, 50)}...</p>
                  {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
