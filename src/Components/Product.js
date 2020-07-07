import React from "react";
import Shoes from "./../shoes.json";

function Product() {
  return (
    <div>
      <h1>Welcome to Product</h1>
      <div>
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <div key={keyName}>
              <h2>{shoe.name}</h2>
              <img src={shoe.img} height={150} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
