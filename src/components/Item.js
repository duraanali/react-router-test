import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import {productContext} from "../App"
// we will be importing and adding a lot of items to this component
function Item() {

  let value = useContext(productContext)

  const params = useParams();

  const selectedProduct = value.find(
    (product) => product.id === Number(params.itemID)
  );

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{selectedProduct.name}</h2>
          <h4>${selectedProduct.price}</h4>
          <p className="item-description">{selectedProduct.description}</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
