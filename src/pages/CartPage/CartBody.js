import React, { Component } from 'react';
import CartItem from './CartItem';

class CartBody extends Component {
  renderItems = () => {
    const { cartItems = [] } = this.props;
    return (
      <div className="cart-items-container">
        {cartItems.map((cartItem, index) => this.renderItem(cartItem, index))}
      </div>
    );
  };
  renderItem = (cartItem, index) => {
    const { onEditClick, onCartChange } = this.props;
    const itemKey = cartItem.p_name + '_' + cartItem.p_id + '_' + index;
    return (
      <CartItem
        cartItem={cartItem}
        key={itemKey}
        onEditClick={onEditClick}
        onCartChange={onCartChange}
      />
    );
  };
  render() {
    return <div className="cart-body">{this.renderItems()}</div>;
  }
}

export default CartBody;