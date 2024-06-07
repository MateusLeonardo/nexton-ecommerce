"use server";

import { ProductCategoriesProps } from "@/types/productCategories";

export default async function getCategories() {
  try {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = (await response.json()) as ProductCategoriesProps[];
    return data;
  } catch (error) {
    console.log(error);
  }
}
