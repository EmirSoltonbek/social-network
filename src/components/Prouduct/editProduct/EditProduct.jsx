import "./EditProduct.css";
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../../contexts/ProductContextProvider";

const EditProduct = () => {
  const navigate = useNavigate();
  const { oneProduct, getOneProduct, updateProduct } = useProduct();
  const [product, setProduct] = useState(oneProduct);

  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [size, setSize] = useState(product.size);
  const [color, setColor] = useState(product.color);
  const [gender, setGender] = useState(product.gender);
  const [image1, setImage1] = useState(null);
  const [quantity, setQuantity] = useState(product.quantity);

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setImage1(oneProduct?.image1);
      // setImage2(oneProduct.image2);
      setTitle(oneProduct?.title);
      setDescription(oneProduct?.description);
      setPrice(oneProduct?.price);
      setSize(oneProduct?.size);
      setColor(oneProduct?.color);
      setGender(oneProduct?.gender);
      setQuantity(oneProduct?.quantity);
    }
  }, [oneProduct]);

  function handleSave() {
    const newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("size", size);
    newProduct.append("color", color);
    newProduct.append("gender", gender);
    newProduct.append("quantity", quantity);
    if (image1) {
      newProduct.append("image1", image1);
    }

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
      {/* <input
        onChange={(e) => setImage2(e.target.files[0])}
        type="file"
        accept="image/*"
      /> */}
      <input
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        type="text"
        value={title}
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        type="text"
        value={description}
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
        type="text"
        value={price}
      />

      <select onChange={(e) => setSize(e.target.value)} value={size}>
        <option> Choose size</option>
        <option>s</option>
        <option>m</option>
        <option>l</option>
      </select>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
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
      <select onChange={(e) => setGender(e.target.value)} value={gender}>
        <option> Choose gender</option>
        <option>male</option>
        <option>female</option>
      </select>
      <input
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="quantity"
        type="number"
        value={quantity}
        />
        <br />
        <button onClick={() => {
          handleSave();
          navigate('/product-list');
        }}>Save Changes</button>
      </div>
      );
      }
      
      export default EditProduct;