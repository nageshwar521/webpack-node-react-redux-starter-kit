let data = require('./cart.json');

const getCartData = () => {
  return data;
}

const updateCartData = (currentCartItem) => {
  let productsInCart = data.productsInCart;
  try {
    // console.log('currentCartItem');
    // console.log(currentCartItem);
    // console.log('data');
    // console.log(data);
    productsInCart = data.productsInCart.map(cartItem => {
      if (cartItem.p_id === currentCartItem.p_id) {
        return currentCartItem;
      }
      return cartItem;
    });
    // console.log('updatedCartData');
    // console.log(updatedCartData);
    data = { ...data, productsInCart };
    return {
      data,
      status: 'success',
      messgae: 'Shopping cart updated sussfully'
    };
  } catch (error) {
    return {
      data: updatedCartData,
      status: 'fail',
      messgae: error
    };
  }
}

const deleteCartData = (itemId) => {
  console.log('deleteCartData itemId');
  console.log(itemId);
  let updatedCartData = data;
  try {
    updatedCartData = data.filter(cartItem => cartItem.p_id !== itemId);
    return {
      data: updatedCartData,
      status: 'success',
      messgae: `${itemId} deleted successfully!`
    };
  } catch (error) {
    return {
      data: updatedCartData,
      status: 'fail',
      messgae: error
    };
  }
};

module.exports = { getCartData, updateCartData, deleteCartData };