import React from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

const CategoriesComponent = () => {
  const {
    getCategories,
    categories,
    selectCategory,
    category,
    selectGenderCategory,
    genderCategory,
  } = useProduct();
  useEffect(() => {
    getCategories();
  }, []);
  //   console.log("categories", categories);
  //   console.log("category", category);

  return (
    <div>
      <div
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
        : null}
    </div>
  );
};

export default CategoriesComponent;
