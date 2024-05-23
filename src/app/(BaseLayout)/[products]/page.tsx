import Container from "@/components/Container";
import AllProducts from "../../../components/pages/AllProducts";
import { TProduct } from "@/types/types";
import Image from "next/image";
import React from "react";

const AllProductsPage = async () => {
  const res = await fetch("https://shine-on-server-five.vercel.app/products", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  const products: TProduct[] = data[0]?.products || [];

  return (
    <div className="bg-base-200">
      <Container>
        <AllProducts products={products} />
      </Container>
    </div>
  );
};

export default AllProductsPage;
