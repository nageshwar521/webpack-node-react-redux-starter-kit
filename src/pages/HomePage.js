import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../store/actions';
import CartPage from './CartPage/CartPage';
import Modal from '../components/Modal/Modal';
import Label from '../components/Label/Label';
import CartDetails from './CartPage/CartDetails';

class HomePage extends Component {
  state = {
    isOpenProductModal: false,
    currentProduct: null,
    selectedColor: null,
    selectedSize: 0,
    selectedQuantity: 0
  };
  updateCartTimeout = null;
  componentDidMount() {
    this.props.fetchCart();
  }
  handleCloseProductModal = () => {
    this.setState({
      isOpenProductModal: false,
      currentProduct: null
    });
  };
  handleEditCart = product => {
    this.setState({
      isOpenProductModal: true,
      currentProduct: product
    });
  };
  getProductDetails = () => {
    const { currentProduct } = this.state;
    return (
      <CartDetails
        currentProduct={currentProduct}
        onCartChange={this.handleCartChange}
        onUpdateCart={this.handleUpdateCart}
      />
    );
  };
  handleCartChange = (cartProp, cartItem) => {
    console.log('handleCartChange');
    console.log(cartProp, cartItem);
    console.log(this.props);
    if (this.updateCartTimeout) clearTimeout(this.updateCartTimeout);
    this.updateCartTimeout = setTimeout(() => {
      this.props.updateCart(cartItem);
    }, 1000);
  };
  handleUpdateCart = () => {
    this.setState({
      isOpenProductModal: false,
      currentProduct: null
    });
  };
  getCartCount = () => {
    const { cartItems } = this.props;
    let cartCount = 0;
    cartItems.forEach(cartItem => {
      cartCount = cartCount + cartItem.p_quantity;
    });
    return cartCount;
  };
  renderLoading = () => {
    const { isFetchingCart, isUpdatingCart } = this.props;
    return (
      <div className="cart-loading">
        {isFetchingCart ? (
          <span className="loading-text">Loading...</span>
        ) : null}
        {isUpdatingCart ? (
          <span className="loading-text">Updating...</span>
        ) : null}
      </div>
    );
  };
  render() {
    const { isOpenProductModal } = this.state;
    const { isFetchingCart, isUpdatingCart } = this.props;
    const isLoading = [isFetchingCart, isUpdatingCart].some(item => !!item);
    return (
      <div className="cart-container">
        <div className="page-header flex flex-row align-items-center">
          <h1 className="page-title flex flex-1">Your shopping bag</h1>
          <div className="shopping-cart-count-mobile flex flex-row">
            <Label className="text-bold" text={this.getCartCount()} />
            <Label className="p-h-10 p-r-0" text="Items" />
          </div>
        </div>
        <CartPage
          {...this.props}
          totalCartItems={this.getCartCount()}
          onEditClick={this.handleEditCart}
          onCartChange={this.handleCartChange}
        />
        {isOpenProductModal ? (
          <Modal
            className="product-modal"
            onClose={this.handleCloseProductModal}
          >
            {this.getProductDetails()}
          </Modal>
        ) : null}
        {isLoading ? (
          <Modal className="loading-modal" closeButton={false}>
            {this.renderLoading()}
          </Modal>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
