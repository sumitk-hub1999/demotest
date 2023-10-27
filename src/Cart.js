import React from "react";

const Cart = (props) => {
  const cartItems = props.cartItems;
  return (
    <div>
      <ul>
        {cartItems.map((i) => (
          <li>
            quantity:{i?.quantity},brand:{i?.brand},model:{i?.model}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
