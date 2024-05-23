import { TCategories, TProduct } from "@/types/types";
import Categories from "../CategoriesSlice";

const CategoryPage = async () => {
  const res = await fetch("http://localhost:3200/products");
  const data = await res.json();
  const categories: TCategories[] = data[0]?.category || [];

  return <Categories categories={categories} />;
};

export default CategoryPage;
