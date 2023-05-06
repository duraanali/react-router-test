import React, {useContext} from "react";
import { Link } from "react-router-dom";

import {productContext} from "../App"


function ItemsList() {
 let value = useContext(productContext)

  return (
    <div className="items-list-wrapper">

      {value.map((product) => (
        <div className="item-card" key={product.id}>
          <Link to={`/product-list/${product.id}/productDetails`}>
            <img
              className="item-list-image"
              src={product.imageUrl}
              alt={product.name}
            />
            <p>{product.name}</p>
          </Link>
          <p>${product.price}</p>
        </div>
      ))}
      
    </div>
  );
}

export default ItemsList;
