import React, { useState } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "./CategoriesComponent.css";

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
      <div className="filter-container">
        <div>
          <label>Category:</label>
          <select
            name=""
            id=""
            onChange={(e) => fetchByParams("category", e.target.value)}
          >
            <option value="all">All</option>
            {categories.length
              ? categories.map((elem) => {
                  return (
                    <option
                      value={elem.id}
                      // key={elem.id}
                    >
                      {elem.title}
                    </option>
                  );
                })
              : null}
          </select>
        </div>
        <div>
          <label>Gender:</label>
          <select
            name=""
            id=""
            onChange={(e) => fetchByParams("gender", e.target.value)}
          >
            <option value="all">All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div>
          <label>Size:</label>
          <select
            name=""
            id=""
            onChange={(e) => fetchByParams("size", e.target.value)}
          >
            <option value="all">All</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
        </div>
        <div>
          <label>Color:</label>
          <select
            name=""
            id=""
            onChange={(e) => fetchByParams("color", e.target.value)}
          >
            <option value="all">All</option>
            <option value="white">While</option>
            <option value="black">Black</option>
            <option value="gray">Gray</option>
            <option value="red">Red</option>
          </select>
        </div>
        <div className="categoryComponentInputDiv">
          <input
            placeholder="Search"
            type="text"
            onChange={(e) => fetchByParams("search", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;
