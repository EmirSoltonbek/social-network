import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import ProductCard from "../productCard/ProductCard";
import { useProduct } from "../../../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { getProducts, products, pages } = useProduct();

  const [searchParams, setSearchParams] = useSearchParams();

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
  }, [searchParams]);

  if (currentPage < 1) setCurrentPage(1);
  if (currentPage > pages) setCurrentPage(pages);

  return (
    <div>
<<<<<<< HEAD
      <h1>PRODUCT LIST</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.length
          ? products.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })
          : null}
=======
      <h1 style={{textAlign:"center", margin:"20px"}}>PRODUCT LIST</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-evenly" }}>
        {products?.map((item) => {
          // return (genderCategory === item.gender || category === item.category) ? (
          //   <ProductCard key={item.id} item={item} />
          // ) : null;

          // if (genderCategory === "all") {
          //   return genderCategory === item.gender ||
          //     category === item.category ? (
          //     <ProductCard key={item.id} item={item} />
          //   ) : null;
          // } else {
          //   return genderCategory === item.gender &&
          //     category === item.category ? (
          //     <ProductCard key={item.id} item={item} />
          //   ) : null;
          // }
          return <ProductCard key={item.id} item={item} />;
        })}
>>>>>>> f67d7c9203053d5b1cd39817bcfdec705893097c
      </div>
      <Pagination style={{justifyContent:"center", margin:"10px"}}>
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
// //
// const ProductList = () => {
//   const { getProducts, products, pages } = useProduct();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [currentPage, setCurrentPage] = useState(1);

//   function getPagesCount() {
//     const pageCountArr = [];
//     for (let i = 1; i <= pages; i++) {
//       pageCountArr.push(i);
//     }
//     return pageCountArr;
//   }

//   useEffect(() => {
//     setSearchParams({ page: currentPage });
//   }, [currentPage, setSearchParams]);

//   useEffect(() => {
//     getProducts();
//   }, [searchParams, getProducts]);

//   if (currentPage < 1) {
//     setCurrentPage(1);
//   } else if (currentPage > pages) {
//     setCurrentPage(pages);
//   }

//   return (
//     <div>
//       <h1>PRODUCT LIST</h1>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {products.length
//           ? products.map((item) => <ProductCard key={item.id} item={item} />)
//           : null}
//       </div>
//       <Pagination>
//         <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
//         {getPagesCount().map((item) =>
//           item === currentPage ? (
//             <Pagination.Item
//               onClick={() => setCurrentPage(item)}
//               key={item}
//               active
//             >
//               {item}
//             </Pagination.Item>
//           ) : (
//             <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
//               {item}
//             </Pagination.Item>
//           )
//         )}
//         <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
//       </Pagination>
//     </div>
//   );
// };

// export default ProductList;
