import React, { useState } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const CategoriesComponent = () => {
  const { getCategories, categories, category, fetchByParams } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  // const [search, setSearch] = useState(searchParams.get("q") || "");

  // useEffect(() => {
  //   setSearchParams({
  //     q: search,
  //   });
  // }, [search]);

  //   console.log("categories", categories);
  //   console.log("category", category);

  return (
    <div>
      {/* <div
        className="gender_buttons_wrap"
        onClick={(e) => {
          e.stopPropagation();
          e.target.name && selectGenderCategory(e.target.name);
        }}
      >
        <Button
          variant={genderCategory === "all" ? "primary" : "light"}
          name="all"
        >
          All
        </Button>
        <Button
          variant={genderCategory === "female" ? "primary" : "light"}
          name="female"
        >
          Female
        </Button>
        <Button
          variant={genderCategory === "male" ? "primary" : "light"}
          name="male"
        >
          Male
        </Button>
      </div>
      {categories.length
        ? categories.map((elem) => {
            return (
              <Button
                variant={category === elem.id ? "primary" : "light"}
                onClick={() => selectCategory(elem.id)}
                key={elem.id}
              >
                {elem.title}
              </Button>
            );
          })
        : null} */}

      <div className="search_wrap">
        <input
          type="text"
          onChange={(e) => fetchByParams("search", e.target.value)}
        />
      </div>
      <div className="categoryes_wrap">
        <Button onClick={() => fetchByParams("category", "all")}>All</Button>
        {categories.length
          ? categories.map((elem) => {
              return (
                <Button
                  variant={category === elem.id ? "primary" : "light"}
                  onClick={() => fetchByParams("category", +elem.id)}
                  key={elem.id}
                >
                  {elem.title}
                </Button>
              );
            })
          : null}
      </div>
      <div className="gender_category_wrap">
        <Button onClick={() => fetchByParams("gender", "all")}>All</Button>
        <Button onClick={() => fetchByParams("gender", "female")}>
          Female
        </Button>
        <Button onClick={() => fetchByParams("gender", "male")}>Male</Button>
      </div>
      <div className="size_category_wrap">
        <Button onClick={() => fetchByParams("size", "all")}>All</Button>
        <Button onClick={() => fetchByParams("size", "s")}>S</Button>
        <Button onClick={() => fetchByParams("size", "m")}>M</Button>
        <Button onClick={() => fetchByParams("size", "l")}>L</Button>
      </div>
      <div className="color_category_wrap">
        <Button onClick={() => fetchByParams("color", "all")}>All</Button>
        <Button onClick={() => fetchByParams("color", "white")}>White</Button>
        <Button onClick={() => fetchByParams("color", "black")}>Black</Button>
        <Button onClick={() => fetchByParams("color", "gray")}>Gray</Button>
        <Button onClick={() => fetchByParams("color", "red")}>Red</Button>
      </div>
    </div>
  );
};

export default CategoriesComponent;
