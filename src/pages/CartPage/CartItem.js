import React, { Component } from 'react';
import { titleCase } from '../../utils';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Label from '../../components/Label/Label';
import shallowCompare from 'react-addons-shallow-compare';

class CartItem extends Component {
  state = {
    cartItem: this.props.cartItem
  };
  getCartItemSize = (cartItem, className) => {
    const classes = [
      'cart-item-size',
      className,
      className ? 'flex-row align-items-center' : null
    ];
    return (
      <div className={classes.join(' ')}>
        <Label text="Size: " className="p-10 p-l-0" />
        <h3 className="cart-item-size-text">{cartItem.p_selected_size.code}</h3>
      </div>
    );
  };
  getCartItemQuantity = (cartItem, className) => {
    const classes = [
      'cart-item-quantity',
      className,
      className ? 'flex-row align-items-center' : null
    ];
    return (
      <div className={classes.join(' ')}>
        <Label text="Qty: " className="p-10 p-l-0" />
        <Input
          className="cart-item-quantity-input"
          value={cartItem.p_quantity}
          onChange={this.handleCartChange.bind(null, 'p_quantity')}
        />
      </div>
    );
  };
  handleCartChange = (cartProp, cartValue) => {
    const { cartItem } = this.state;
    if (cartItem[cartProp] !== cartValue) {
      let newCartItem = Object.assign({}, cartItem, {
        [cartProp]: +cartValue
      });

      this.setState(
        {
          cartItem: newCartItem
        },
        () => {
          // console.log('CartItem handleCartChange');
          // console.log(this.props)
          if (this.props.onCartChange) {
            this.props.onCartChange(cartProp, this.state.cartItem);
          }
        }
      );
    }
  };
  getCartItemPrice = (cartItem, className) => {
    const classes = [
      'cart-item-price',
      className,
      className ? 'flex-row m-10 m-l-0' : null
    ];
    return (
      <div className={classes.join(' ')}>
        <div className="cart-item-price-old">
          <span className="cart-item-price-currency">
            {cartItem.c_currency}
          </span>
          {cartItem.p_originalprice}
        </div>
        <div className="cart-item-price-new">
          <span className="cart-item-price-currency">
            {cartItem.c_currency}
          </span>
          {cartItem.p_price}
        </div>
      </div>
    );
  };
  getCartItemControls = (cartItem, className) => {
    const { onEditClick } = this.props;
    const classes = [
      'cart-item-controls',
      'btn-group',
      className,
      className ? 'm-20 m-b-0' : null
    ];
    return (
      <div className={classes.join(' ')}>
        <Button
          label="Edit"
          type="transparent"
          onClick={onEditClick.bind(null, cartItem)}
        />
        <div className="separator" />
        <Button
          label="Remove"
          type="transparent"
          iconProps={{ position: 'left', icon: 'IoIosClose' }}
        />
        <div className="separator" />
        <Button label="Save for Later" type="transparent" />
      </div>
    );
  };
  render() {
    const { cartItem } = this.state;
    const itemImage = `images/T${+cartItem.p_id}.jpg`;
    const itemName = cartItem.p_name;
    return (
      <div className="cart-item">
        <div className="cart-item-details">
          <div className="cart-item-image">
            <img src={itemImage} className="img-thumbnail" alt={itemName} />
          </div>
          <div className="cart-item-desc">
            <h3 className="cart-item-title">
              {cartItem.p_variation + ' ' + cartItem.p_name}
            </h3>
            <div className="cart-item-style">
              Style #: {cartItem.p_style.toUpperCase()}
            </div>
            <div className="cart-item-color">
              Colour: {titleCase(cartItem.p_selected_color.name)}
            </div>
            {this.getCartItemControls(cartItem)}
            {this.getCartItemSize(cartItem, 'cart-item-size-mobile')}
            {this.getCartItemQuantity(cartItem, 'cart-item-quantity-mobile')}
            {this.getCartItemPrice(cartItem, 'cart-item-price-mobile')}
          </div>
        </div>
        {this.getCartItemControls(cartItem, 'cart-item-controls-mobile')}
        {this.getCartItemSize(cartItem)}
        {this.getCartItemQuantity(cartItem)}
        {this.getCartItemPrice(cartItem)}
      </div>
    );
  }
}

export default CartItem;