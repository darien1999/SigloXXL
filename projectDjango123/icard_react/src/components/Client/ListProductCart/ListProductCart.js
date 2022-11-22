import React, { useState, useEffect }from "react";
import {Image, Button, Icon} from "semantic-ui-react";
import {map, forEach, remove} from "lodash";
import { useParams, useHistory} from "react-router-dom"
import { removeProductCartApi } from "../../../api/cart"
import "./ListProductCart.scss";

export function ListProductCart(props) {
    const { products, onReloadCart } = props;
    
    const removeProduct = (index) => {
        removeProductCartApi(index);
        onReloadCart();
    }
  return (
    <div className="list-product-car">
    {map(products, (product, index) => (
        <div key={index} className="list-product-cart__product">
            <div>
            <Image src={product.image} avatar />
            <span>{product.title.substring(0, 20)}</span>
            </div>
            <span>${product.price}</span>
            <Icon name="close" onClick={() => removeProduct(index)}/>
        </div>
        
    ))}

    <Button primary fluid>
        Realizar Pedido
    </Button>
    </div>
  )
}
