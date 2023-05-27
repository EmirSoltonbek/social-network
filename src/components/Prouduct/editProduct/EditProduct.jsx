import "./EditProduct.css";
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../../contexts/ProductContextProvider";

const EditProduct = () => {
  const navigate = useNavigate();
  const { getCategories, categories, oneProduct, getOneProduct, updateProduct } = useProduct();
  const [product, setProduct] = useState(oneProduct)
  console.log(oneProduct);

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
console.log(category)
  const { id } = useParams();

  useEffect(() => {
    getCategories();
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setImage1(product?.image1);
      setImage2(product?.image2);
      setTitle(product?.title);
      setDescription(product?.description);
      setPrice(product?.price);
      setSize(product?.size);
      setColor(product?.color);
      setGender(product?.gender);
      setQuantity(product?.quantity);
      setCategory(product?.category.id);
    }
  }, [oneProduct]);
console.log(product);
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
    if (image1) {
      newProduct.append("image1", image1);
    } 
    if(image2){
      newProduct.append("image2", image2);
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
        value={image1 || ""}
      />
      <input
        onChange={(e) => setImage2(e.target.files[0])}
        type="file"
        accept="image/*"
        value={image2 || ""}
      />
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
<select onChange={(e) => setCategory(e.target.value)} value={category}>
<option> Choose category</option>
{categories.map((item) => (
<option key={item.id} value={item.id}>
{item.title}
</option>
))}
</select><br />
  <button onClick={() => {
    handleSave();
    navigate('/product-list')
  }}>Save Changes</button>
</div>);
}

export default EditProduct;