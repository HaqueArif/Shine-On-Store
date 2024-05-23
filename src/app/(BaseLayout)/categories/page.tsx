import AllCategories from "@/components/AllCategories";
import Container from "@/components/Container";
import { TCategories } from "@/types/types";
import React from "react";

const AllCategoriesPage = async () => {
  const res = await fetch("http://localhost:3200/products");
  const data = await res.json();
  const categories: TCategories[] = data[0]?.category || [];

  return (
    <Container>
      <AllCategories categories={categories} />
    </Container>
  );
};

export default AllCategoriesPage;
