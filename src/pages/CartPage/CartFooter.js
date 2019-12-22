import React, { Component } from 'react';
import List from '../../components/List/List';
import ListItem from '../../components/List/ListItem';
import PromoCodeForm from '../PromoCodeForm';
import Left from '../../components/Layout/Left';
import Center from '../../components/Layout/Center';
import Right from '../../components/Layout/Right';
import PriceLabel from '../../components/PriceLabel/PriceLabel';
import Separator from '../../components/Separator/Separator';
import { Button } from '../../components/Button';
import { calculateCart } from '../../utils';

class CartFooter extends Component {
  render() {
    const { cartItems } = this.props;
    const cartData = calculateCart(cartItems);
    return (
      <div className="cart-footer">
        <Left className="cart-footer-left align-items-start">
          <List className="cart-helpinfo">
            <ListItem className="needhelp-title text-bold">
              Need help or have questions?
            </ListItem>
            <ListItem className="needhelp-contact">
              Call Customer Service at 1-800-555-5555
            </ListItem>
            <ListItem className="needhelp-chat text-inderline">
              Chat with one of our stylists
            </ListItem>
            <ListItem className="needhelp-return-policy text-inderline">
              See return & exchange policy
            </ListItem>
          </List>
        </Left>
        <Center />
        <Right className="cart-footer-right">
          <div className="cart-calculation">
            <PromoCodeForm />
            <List className="flex-column">
              <ListItem className="cart-footer-item">
                <Left className="text-uppercase">Subtotal</Left>
                <Right>
                  <PriceLabel
                    price={Math.trunc(parseFloat(cartData.subTotal))}
                    currency="$"
                  />
                </Right>
              </ListItem>
              <ListItem className="cart-footer-item">
                <Left className="cart-footer-item-label text-uppercase">
                  Promotion Code <span className="text-bold p-5">JF-10</span>{' '}
                  Applied
                </Left>
                <Right>
                  <PriceLabel type="negative" price={37.0} currency="$" />
                </Right>
              </ListItem>
              {cartData.discount > 0 ? (
                <React.Fragment>
                  <ListItem className="cart-footer-item">
                    <Left className="cart-footer-item-label text-uppercase flex-column align-items-start">
                      Discount
                    </Left>
                    <Right>
                      <PriceLabel
                        type="negative"
                        price={cartData.discount+"%"}
                        currency="$"
                      />
                    </Right>
                  </ListItem>
                  <Separator />
                </React.Fragment>
              ) : null}
              {cartData.subTotal > 50 ? (
                <React.Fragment>
                  <ListItem className="cart-footer-item">
                    <Left className="cart-footer-item-label text-uppercase flex-column align-items-start">
                      <div>Estimated Shipping*</div>
                      <div className="text-100 font-size-12 d-inline">
                        You qualift for free shipping because your order is over{' '}
                        <PriceLabel
                          className="d-inline"
                          price={50}
                          currency="$"
                        />
                        *
                      </div>
                    </Left>
                    <Right>
                      <PriceLabel
                        type="negative"
                        price={cartData.shippingCost}
                        currency="$"
                      />
                    </Right>
                  </ListItem>
                  <Separator />
                </React.Fragment>
              ) : null}
              <ListItem className="cart-footer-item">
                <Left className="cart-footer-item-label text-uppercase flex-column align-items-start">
                  <div>Estimated Total</div>
                  <div className="text-100 font-size-12">
                    Tax will be applied during checkout
                  </div>
                </Left>
                <Right>
                  <PriceLabel
                    price={Math.trunc(parseFloat(cartData.totalCost))}
                    currency="$"
                  />
                </Right>
              </ListItem>
              <Separator size={9} />
              <div className="cart-footer-controls-container p-v-20">
                <div className="cart-footer-controls btn-group">
                  <Button
                    className="text-uppercase"
                    size="extra-large"
                    label="Continue Shipping"
                    type="link"
                  />
                  <Button size="extra-large" label="Checkout" type="primary" />
                </div>
              </div>
              <div className="flex flex-right p-v-20">
                <div className="cart-footer-message flex-row flex flex-right">
                  <img src="images/lock.jpg" className="p-10" />
                  <p>Secure checkout. Shopping is always safe & secure.</p>
                </div>
              </div>
            </List>
          </div>
        </Right>
      </div>
    );
  }
}

export default CartFooter;
