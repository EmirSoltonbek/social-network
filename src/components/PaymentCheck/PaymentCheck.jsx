import React, { useEffect, useState } from 'react'
import { useCart } from '../../contexts/CartContextProvider'
import "./PaymentCheck.css"
import { useNavigate } from 'react-router';

const PaymentCheck = () => {
    const {cart} = useCart();
    const [ date, setDate] = useState('');
    const [month, setMonth]= useState('');
    const [year, setYear]= useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        setDate(new Date().getDate().toString());
        setMonth(new Date().getMonth().toString());
        setYear(new Date().getFullYear().toString());
    },[])
  return (
    <div className="payment-receipt">
      <h2 className="receipt-heading">Payment Receipt</h2>
      <div className="receipt-details">
        <div className="receipt-row">
          <span className="receipt-label">Order Number:</span>
          <span className="receipt-value">12</span>
        </div>
        <div className="receipt-row">
          <span className="receipt-label">Payment Date:</span>
          <span className="receipt-value">{date}.0{month}.{year}</span>
        </div>
        <div className="receipt-row">
          <span className="receipt-label">Payment Amount:</span>
          <span className="receipt-value"> {cart.totalPrice} som</span>
        </div>
        <div className="receipt-row">
          <span className="receipt-label">Payment Method:</span>
          <span className="receipt-value">Credit Card</span>
        </div>
      </div>
      <p className="receipt-message">Thank you for your payment!</p>
      <p className="receipt-note">Note: This is not a valid receipt. It is for demonstration purposes only.</p>
      <p onClick={()=>{navigate("/product-list")}} style={{backgroundColor:"grey",color:"white",padding:"5px 10px",borderRadius:"4px",cursor:"pointer", display:"inline-block"}}>GO BACK</p>
    </div>
  )
}

export default PaymentCheck