import React from "react";
import Shoes from "./../shoes.json";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1 className="welcome">Welcome to My Products</h1>
      <div className="productContainer">
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Link key={keyName} className="link" to={`/product/${keyName}`}>
              <h4 className="productname">{shoe.name}</h4>
              <hr />
              <img src={shoe.img} height={150} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
