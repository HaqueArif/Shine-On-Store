import { TProduct } from "@/types/types";
import Image from "next/image";

const page = async () => {
  const res = await fetch("http://localhost:3200/products");
  const data = await res.json();
  const products = data[0]?.products;
  // const flashSaleProducts = products?.filter(
  //   (product: TProduct) => product.flashSale
  // );

  return (
    <div>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Photo / Name / Category</th>
              <th>Description</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product: TProduct, i: number) => (
              <tr key={i}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          layout="fill"
                          objectFit="cover"
                          src={product?.image}
                          alt="Shoes"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                      <div className="text-sm opacity-50">
                        {product.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="tooltip" data-tip={product.description}>
                  {product.description.slice(0, 30)}...
                </td>
                <td>{product.brand}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">
                    {product.price}
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">
                    {product.rating}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default page;
