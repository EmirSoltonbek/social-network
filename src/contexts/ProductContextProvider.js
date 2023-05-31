import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API, API2 } from "../helpers/consts";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  pages: 1,
  categories: [],
  category: JSON.parse(localStorage.getItem("category")) || null,
  oneProduct: null,
  rating: 0,
  genderCategory: localStorage.getItem("genderCategory") || "all",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 12),
      };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };

    case "ADD_RATING":
      return { ...state, rating: action.payload };

    case "GET_SELECT_ONE_CATEGORY":
      return { ...state, category: action.payload };
    case "GET_SELECT_ONE_GENDER_CATEGORY":
      return { ...state, genderCategory: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getConfig() {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  }

  async function createProduct(newProduct) {
    try {
      const res = await axios.post(`${API}/products/`, newProduct, getConfig());
      console.log(res);
      navigate("/product-list");
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts() {
    try {
      const res = await axios(
        `${API}/products/listing/${window.location.search}`,
        getConfig()
      );
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/products/listing/${id}/`, getConfig());
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
  async function getOneProduct(id) {
    const res = await axios(`${API}/products/listing/${id}/`, getConfig());
    dispatch({ type: "GET_ONE_PRODUCT", payload: res.data });
  }

  async function updateProduct(id, editedProduct) {
    try {
      await axios.patch(`${API}/products/${id}/`, editedProduct, getConfig());
      getProducts();
      navigate("/product-list");
    } catch (error) {
      console.log(error);
    }
  }

  async function addRating(value, id) {
    try {
      await axios.post(
        `${API}/products/add_rating/`,
        { value, product: id },
        getConfig()
      );
    } catch (error) {
      console.log(error);
    }
  }
  // ! get categories

  async function getCategories() {
    try {
      const res = await axios(`${API}/products/categories/`, getConfig());
      dispatch({ type: "GET_CATEGORIES", payload: res.data.results });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addComment(body, id) {
    try {
      await axios.post(
        `${API}/products/comments/`,
        { body, product: id },
        getConfig()
      );
    } catch (error) {
      console.log(error);
    }
  }

  // async function getCategories() {
  //   try {
  //     let res = await axios(`${API}/products/categories/`, getConfig());
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // ! get categories end

  // ! select category

  function selectCategory(id) {
    dispatch({ type: "GET_SELECT_ONE_CATEGORY", payload: id });
    localStorage.setItem("category", id);
  }

  function selectGenderCategory(select) {
    dispatch({ type: "GET_SELECT_ONE_GENDER_CATEGORY", payload: select });
    localStorage.setItem("genderCategory", select);
  }
  // ! select category end

  const values = {
    getCategories,
    categories: state.categories,
    createProduct,

    getProducts,
    products: state.products,
    pages: state.pages,
    deleteProduct,

    getOneProduct,
    oneProduct: state.oneProduct,
    updateProduct,
    getConfig,

    addRating,
    addComment,
    getConfig,
    selectCategory,
    category: state.category,
    genderCategory: state.genderCategory,
    selectGenderCategory,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
