import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, cartChange] = useState(false);

  const cartClass = () => {
    if (inCart === true) {
      return "in-cart";
    } else {
      return "";
    };
  }

  const buttonText = () => {
    if(inCart === true) {
      return "Remove From Cart"
    } else {
      return "Add to Cart"
    }
  }

  function handleClick() {
    cartChange((inCart) => inCart = !inCart)
  }

  return (
    <li className={cartClass()}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText()}</button>
    </li>
  );
}

export default Item;
