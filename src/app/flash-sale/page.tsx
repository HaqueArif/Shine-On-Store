import Container from "@/components/Container";
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
    <Container>
      <div>
        <h1 className="font-bold text-3xl mt-20 mb-5"> Flash sale:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 gap-x-1 mb-40">
          {flashSaleProducts.slice(0, 10).map((product: TProduct) => (
            <div
              key={product._id}
              className="card max-w-96 bg-slate-50 hover:bg-slate-200 hover:scale-105 transition-all shadow-md border w-full mx-auto"
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
                <div className="badge badge-secondary text-[14px]">
                  Flash Sale
                </div>
                <h2 className="card-title">{product.name}!</h2>

                <div className="card-actions ">
                  <div className="badge badge-outline">Details</div>
                  <div className="badge badge-outline">
                    {product.price} $USD
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link href="/flash-sale">see all</Link>
        </div>
      </div>
    </Container>
  );
};

export default page;
