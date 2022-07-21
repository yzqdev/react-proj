import React, { Component, useState } from "react";
import PropTypes from "prop-types";

import Thumb from "./../../Thumb";
import { formatPrice } from "@/store/util";

const CartProduct = (props) => {
  let [product, setProduct] = useState(props.product);
  let [isMouseOver, setIsMouseOver] = useState(false);
  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  const handleOnIncrease = () => {
    const { changeProductQuantity } = props;
    product.quantity = product.quantity + 1;
    changeProductQuantity(product);
  };

  const handleOnDecrease = () => {
    const { changeProductQuantity } = props;

    product.quantity = product.quantity - 1;
    changeProductQuantity(product);
  };

  const { removeProduct } = props;

  const classes = ["shelf-item"];

  if (!!isMouseOver) {
    classes.push("shelf-item--mouseover");
  }

  return (
    <div className={classes.join(" ")}>
      <div
        className="shelf-item__del"
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
        onClick={() => removeProduct(product)}
      />
      <Thumb
        classes="shelf-item__thumb"
        src={`products/${product.sku}_2.jpg`}
        alt={product.title}
      />
      <div className="shelf-item__details">
        <p className="title">{product.title}</p>
        <p className="desc">
          {`${product.availableSizes[0]} | ${product.style}`} <br />
          Quantity: {product.quantity}
        </p>
      </div>
      <div className="shelf-item__price">
        <p>{`${product.currencyFormat}  ${formatPrice(product.price)}`}</p>
        <div>
          <button
            onClick={handleOnDecrease}
            disabled={product.quantity === 1}
            className="change-product-button"
          >
            -
          </button>
          <button onClick={handleOnIncrease} className="change-product-button">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired,
  changeProductQuantity: PropTypes.func.isRequired,
};
export default CartProduct;
