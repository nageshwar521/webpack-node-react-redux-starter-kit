import React from 'react'

function CartHeader(props) {
  return (
    <div className="cart-header">
      <div className="cart-items-count">{props.totalCartItems} items</div>
      <div className="cart-size-header">Size</div>
      <div className="cart-quantity-header">Qty</div>
      <div className="cart-price-header">Price</div>
    </div>
  );
}

export default CartHeader;
