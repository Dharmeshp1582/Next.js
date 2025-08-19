import React from 'react'

const Products = async({searchParams}) => {

  // const searchParams = await props.searchParams; // 1st way

  const category = searchParams?.category || "all";
  const page = searchParams?.page || 1;
  const sort = searchParams?.sort || "default";

  // console.log(params)
//  console.log(props.searchParams);

//http://localhost:3000/products?category=laptop&page=1&price-asc=200
//output in console = {category: 'laptop', page: '1', price-asc: '200'}


  return (
    <div>
      <h1>Search Params</h1>
      <h3>Showing {category} products, sorted by {sort}, page {page} </h3>
    </div>
  )
}

export default Products