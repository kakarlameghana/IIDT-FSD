import React, { useState } from "react";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple Juice",
      image: "apple.png",
      capacity: "250ml",
      price: 250,
      quantity: 2,
    },
    {
      id: 2,
      name: "Grapes Juice",
      image: "grapes.png",
      capacity: "250ml",
      price: 250,
      quantity: 1,
    },
  ]);

  const [savedItems, setSavedItems] = useState([]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  const handleSaveForLater = (item) => {
    const savedItemsCopy = [...savedItems, item];
    setSavedItems(savedItemsCopy);
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((i) => i.id !== itemId));
  };

  const calculateSubTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="shopping-cart">
      <div className = "header">
      <h1>Shopping Cart</h1>
      <div>
      <button onClick={handleRemoveAll} className="remove-all">
          Remove all
     </button>
      </div>
      </div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3 style={{paddingBottom:"0px"}}>{item.name}</h3>
              <p style={{marginTop:"-20px",textAlign:'left'}}>{item.capacity}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value, 10))
                }
              />
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            <div className="controls">
                <div>
                    <span>Rs: {item.price}</span>
                </div>
                <div>
                <button style={{color:"red",fontSize:"10px"}} onClick={() => handleSaveForLater(item)}>Save for later</button>
                </div>
                <div>
                <button style={{color:"blue",fontSize:"10px",textAlign:'right'}} onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
              
              
            </div>
          </li>
        ))}
      </ul>
      <hr style={{width:"75%",marginRight:"0px"}}/>
      <div className="sub-total" style={{marginLeft:"70%"}}>
        <div>
        <h3 style={{fontSize:"20px"}}>Sub-Total:</h3>
        <p style={{marginTop:"-20px",textAlign:'left',color:'grey',fontSize:"10px",fontWeight:"normal"}}>{cartItems.length} items</p>
        </div>
        <div>
        {calculateSubTotal()}
        </div>
      </div>
      <button style={{float:"right"}} className="checkout">Checkout</button>
      
    </div>
  );
};

export default ShoppingCart;