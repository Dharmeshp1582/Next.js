"use client"

import { useSearchParams } from "next/navigation"

const ProductList = () => {
  const searchParams = useSearchParams();

  
  // const pages = searchParams.get("page") || 1; // if only 1 page then use this
   const pages = searchParams.getAll("page")

  const category = searchParams.get("category") || "all";
  // const category = searchParams.getAll("category") // if multiple categories then use this
  const entries = Object.fromEntries(searchParams.entries());
  
  console.log("pages: ",pages);
  console.log("category: ", category);
  console.log("entries: ", entries);

  return (
    <div>
      <h2>Client</h2>
      <p>Page: {pages}</p>
      <p>Category: {category}</p>
    </div>
  )
}

export default ProductList