import "./EditProduct.css";
import React, { useEffect, useState } from "react";
import { useProduct } from "../../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const {
    getCategories,
    categories,
    createProduct,
    oneProduct,
    getOneProduct,
    updateProduct,
  } = useProduct();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getCategories();
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setImage1(oneProduct.image1);
      setImage2(oneProduct.image2);
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setSize(oneProduct.size);
      setColor(oneProduct.color);
      setGender(oneProduct.gender);
      setQuantity(oneProduct.quantity);
      setCategory(oneProduct.category.id);
    }
  }, []);

  function handleSave() {
    const newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("size", size);
    newProduct.append("color", color);
    newProduct.append("gender", gender);
    newProduct.append("quantity", quantity);
    newProduct.append("category", category);
    newProduct.append("image1", image1);
    newProduct.append("image2", image2);
    updateProduct(id, newProduct);
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <input
        onChange={(e) => setImage1(e.target.files[0])}
        type="file"
        accept="image/*"
      />
      <input
        onChange={(e) => setImage2(e.target.files[0])}
        type="file"
        accept="image/*"
      />
      <input
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        type="text"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        type="text"
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
        type="text"
      />

      <select onChange={(e) => setSize(e.target.value)}>
        <option> Choose size</option>
        <option>s</option>
        <option>m</option>
        <option>l</option>
      </select>
      <select onChange={(e) => setColor(e.target.value)}>
        <option> Choose color</option>
        <option>red</option>
        <option>blue</option>
        <option>green</option>
        <option>yellow</option>
        <option>brown</option>
        <option>black</option>
        <option>white</option>
        <option>gray</option>
      </select>
      <select onChange={(e) => setGender(e.target.value)}>
        <option> Choose gender</option>
        <option>male</option>
        <option>female</option>
      </select>
      <input
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="quantity"
        type="number"
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option> Choose category</option>
        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>

      <br />
      <button
        onClick={() => {
          handleSave();
          navigate("/product-list");
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProduct;
