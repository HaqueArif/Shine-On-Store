import Container from "@/components/Container";
import { ProductId, TProduct } from "@/types/types";
import {
  LocateIcon,
  MapPin,
  PackageCheck,
  Truck,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";

// generateStaticParams
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:3200/products");
  const data = await res.json();
  const products = data[0]?.products;
  return products.slice(0, 10).map((product: TProduct) => ({
    productId: product.id,
  }));
};

const SingleProductPage = async ({ params }: ProductId) => {
  console.log(params.productId);
  const res = await fetch("http://localhost:3200/products");
  const data = await res.json();
  const products = data[0]?.products;
  const filteredProducts = products?.find(
    (product: TProduct) => product.id === params.productId
  );
  return (
    <Container>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-32   bg-base-100  mb-40 mt-20 ">
        <div className=" grid grid-cols-5 ">
          {/* main image */}
          <div className="sm:border  col-span-5 hover:scale-105 transition-all">
            <div className="relative w-[80%] h-full md:h-[80%]  mx-auto mt-8  ">
              <Image
                layout="fill"
                objectFit="contain"
                object-position="center"
                src={filteredProducts?.image}
                alt={filteredProducts?.name}
              />
            </div>
            {/* three image of category*/}
            <div className=" flex  items-center justify-between ">
              <div className="border bg-slate-100 w-full py-2">
                <div className=" relative w-full h-20 ">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    object-position="center"
                    src={filteredProducts?.image}
                    alt={filteredProducts?.name}
                  />
                </div>
              </div>
              <div className="border bg-slate-200 w-full py-2">
                <div className=" relative w-full h-20 ">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    object-position="center"
                    src={filteredProducts?.image}
                    alt={filteredProducts?.name}
                  />
                </div>
              </div>
              <div className="border bg-slate-200 w-full py-2">
                <div className=" relative w-full h-20 ">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    object-position="center"
                    src={filteredProducts?.image}
                    alt={filteredProducts?.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* middle side contents */}
        <div className="">
          <div className="  border-b-2 pb-10 mb-10">
            <p className="text-3xl font-semibold">{filteredProducts.name}</p>
            <div>
              <span className="text-2xl">${filteredProducts.price}</span>
            </div>
          </div>

          <p className="">Rating: {filteredProducts.rating}</p>
          <p className="">Brand: {filteredProducts.brand}</p>
          <p className="">{filteredProducts.description}</p>

          <div className="mt-10">
            <p className="flex gap-5">
              <Truck /> Free worldwide shipping on all orders over $100
            </p>
            <p className="flex gap-5">
              <PackageCheck /> Delivers in: 3-7 Working Days Shipping & Return
            </p>
          </div>
        </div>

        {/* right side contents */}

        <div className="">
          <div className="bg-orange-50 p-3 mb-5">
            <div className="border-b-2">
              <div className="flex gap-5 items-center mb-2">
                <p className="flex gap-1">
                  <MapPin /> Dhaka, Dhaka North, Banani Road No. 12 - 19
                </p>
                <button className="text-cyan-600">Change</button>
              </div>
              <div className="flex gap-5 items-center mb-2">
                <p className="flex gap-1">
                  <TruckIcon /> Standard Delivery 25 May - 30 May 4 - 9 day(s)
                </p>
                <button className="text-cyan-600">
                  $ {filteredProducts.price}
                </button>
              </div>
            </div>
            <div className="my-2">
              <p className="flex gap-1">
                <MapPin /> 7 Day Return
              </p>
              <span className="text-sm">Change of mind applicable</span>
            </div>
            <div className="">
              <p className="flex gap-1">
                <MapPin /> Warranty not available
              </p>
            </div>
          </div>

          <div className="bg-orange-50 p-3">
            <div className="flex items-center justify-between">
              <div>
                <span>Sold by</span>
                <p>{filteredProducts.brand}</p>
              </div>
              <span>CHAT</span>
            </div>
            <div className="grid grid-cols-3">
              <div className="flex flex-col justify-between items-center">
                <p className="border-2 p-1">Positive Seller Ratings</p>
                <p className="border-2 p-1 w-full h-full text-center">
                  New Seller
                </p>
              </div>
              <div className="flex flex-col justify-between items-center">
                <p className="border-2 p-1">Ship on Time</p>
                <p className="border-2 p-1 w-full h-full text-center text-xl font-bold">
                  100%{" "}
                </p>
              </div>
              <div className="flex flex-col justify-betweens items-center">
                <p className="border-2 p-1">Chat Response Rate</p>
                <p className="border-2 p-1 w-full h-full text-center">
                  Not enough data{" "}
                </p>
              </div>
            </div>
            <div>
              <button className="inline-block w-full py-2 mt-2 text-center bg-orange-500 text-white">
                Visit Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
