import React from "react";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">{price}</p>
      </div>
    </div>
  );
}

export default Product;
