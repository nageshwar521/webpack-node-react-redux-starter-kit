import * as types from './types';
import axios from 'axios';
import config from '../config';

const fetchCartRequest = () => {
  return {
    type: types.FETCH_CART_REQUEST
  };
}

const fetchCartSuccess = (payload) => {
  return {
    type: types.FETCH_CART_SUCCESS,
    payload
  };
}

const fetchCartFailure = (error) => {
  return {
    type: types.FETCH_CART_SUCCESS,
    error
  };
}

export const fetchCart = () => {
  return dispatch => {
    dispatch(fetchCartRequest());
    axios
      .get(config.getCart)
      .then(response => {
        console.log('fetchCart');
        console.log(response);
        dispatch(fetchCartSuccess(response.data.productsInCart));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchCartFailure());
      });
  }
}

const updateCartRequest = () => {
  return {
    type: types.UPDATE_CART_REQUEST
  };
}

const updateCartSuccess = payload => {
  return {
    type: types.UPDATE_CART_SUCCESS,
    payload
  };
};

const updateCartFailure = error => {
  return {
    type: types.UPDATE_CART_SUCCESS,
    error
  };
};

export const updateCart = (cartItem) => {
  return (dispatch, getState) => {
    dispatch(updateCartRequest());
    axios
      .put(config.updateCart, {data: JSON.stringify(cartItem)})
      .then(response => {
        console.log('updateCart success');
        console.log(response);
        dispatch(updateCartSuccess(response.data.productsInCart));
        fetchCart()(dispatch, getState);
      })
      .catch(error => {
        console.log('updateCart error');
        console.log(error);
        dispatch(updateCartFailure());
      });
  };
};

export default {
  fetchCart,
  updateCart
};
