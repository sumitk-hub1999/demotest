import React, { useState } from "react";

const AddCar = (props) => {
  const handleCartAddition = props.handleCartAddition;
  const [model, setmodel] = useState("");
  const [brand, setbrand] = useState("");
  const [quantity, setquantity] = useState(1);
  const QuantityArray = [1, 2, 3, 4];
  const AddToCart = () => {
    console.log(quantity);
    handleCartAddition({
      brand: brand,
      model: model,
      quantity: quantity
    });
    setmodel("");
    setbrand("");
    setquantity(1);
  };
  return (
    <div>
      <div>
        <h1>Brand</h1>
        <input
          type="text"
          value={brand}
          onChange={(e) => setbrand(e.target.value)}
        />
      </div>

      <div>
        <h1>Model</h1>
        <input
          type="text"
          value={model}
          onChange={(e) => setmodel(e.target.value)}
        />
      </div>

      <div>
        <h1>Quantity</h1>
        <select value={quantity} onChange={(e) => setquantity(e.target.value)}>
          {QuantityArray.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>

      <div>
        <button onClick={() => AddToCart()}>Submit</button>
      </div>
    </div>
  );
};

export default AddCar;
