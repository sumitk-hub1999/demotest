import "./styles.css";

import AddCar from "./AddCar";

import Cart from "./Cart";
import { useState } from "react";
export default function App() {
  const [cartItems, setcartItems] = useState([]);
  const handleCartAddition = (car) => {
    console.log(car);
    const existingCar = cartItems.find(
      (i) => i.model === car.model && i.brand === car.brand
    );
    console.log(existingCar);
    if (existingCar) {
      console.log(existingCar);
      const updateCart = cartItems.map((i) => {
        i === existingCar ? { ...i, quantity: i.quantity + 1 } : i;
      });
      console.log(updateCart);
      setcartItems(updateCart);
    } else {
      setcartItems([...cartItems, { ...car }]);
    }
  };
  return (
    <div className="App">
      <AddCar handleCartAddition={handleCartAddition} />
      <Cart cartItems={cartItems} />
    </div>
  );
}
