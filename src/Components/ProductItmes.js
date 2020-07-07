import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "./../shoes.json";

function ProductItems() {
  const { id } = useParams();
  const shoe = Shoes[id];
  if (!shoe) return <h2>Product not Found</h2>;
  return (
    <div>
      <h1>Welcome to ProductItems</h1>
      <div className="link">
        <h4 className="productname">{shoe.name}</h4>
        <hr />
        <img src={shoe.img} height={500} alt="shoe is losted" />
      </div>
    </div>
  );
}

export default ProductItems;
