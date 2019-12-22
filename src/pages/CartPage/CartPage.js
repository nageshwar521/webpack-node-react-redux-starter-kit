import React, { Component } from 'react';
import CartHeader from './CartHeader';
import CartBody from './CartBody';
import CartFooter from './CartFooter';

const CartPage = props => {
  return (
    <div className="cart-content">
      <CartHeader {...props} />
      <CartBody {...props} />
      <CartFooter {...props} />
    </div>
  );
};

export default CartPage;
