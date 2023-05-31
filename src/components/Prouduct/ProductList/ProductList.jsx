import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
// import { useSearchParams } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { useProduct } from "../../../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { getProducts, products, pages, category, genderCategory } =
    useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(products);

  const [currentPage, setCurrentPage] = useState(1);
  function getPagesCount() {
    const pageCountArr = [];
    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage]);

  useEffect(() => {
    getProducts();
  }, [searchParams, category]);

  if (currentPage < 1) setCurrentPage(1);
  if (currentPage > pages) setCurrentPage(pages);
  console.log("products", products);
  console.log("category", category);

  return (
    <div>
      <h1>PRODUCT LIST</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((item) => {
          // return (genderCategory === item.gender || category === item.category) ? (
          //   <ProductCard key={item.id} item={item} />
          // ) : null;

          if (genderCategory === "all") {
            return genderCategory === item.gender ||
              category === item.category ? (
              <ProductCard key={item.id} item={item} />
            ) : null;
          } else {
            return genderCategory === item.gender &&
              category === item.category ? (
              <ProductCard key={item.id} item={item} />
            ) : null;
          }
        })}
      </div>
      <Pagination>
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
        {getPagesCount().map((item) =>
          item === currentPage ? (
            <Pagination.Item
              onClick={() => setCurrentPage(item)}
              key={item}
              active
            >
              {item}
            </Pagination.Item>
          ) : (
            <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
              {item}
            </Pagination.Item>
          )
        )}
        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
      </Pagination>
    </div>
  );
};

export default ProductList;
