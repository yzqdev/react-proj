import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Thumb from "../../../Thumb";
import { formatPrice } from "@/store/util";
import { addProduct } from "@/store/cart/actions";

const Product = ({ product, addProduct }) => {
  product.quantity = 1;
console.log(`%c产品质量`,`color:red;font-size:16px;background:transparent`)
  console.log(product)
  let formattedPrice = formatPrice(product.price, product.currencyId);

  let productInstallment;

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>or {product.installments} x</span>
        <b>
          {product.currencyFormat}
          {formatPrice(installmentPrice, product.currencyId)}
        </b>
      </div>
    );
  }

  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Free shipping</div>
      )}
      <Thumb
        classes="shelf-item__thumb"
        src={`products/${product.sku}_1.jpg`}
        alt={product.title}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {productInstallment}
        <div className='size'>{product.availableSizes.map((item ) => {
          return (<span>{item+','}</span>)
        })}</div>
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default connect(null, { addProduct })(Product);
