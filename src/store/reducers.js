import * as types from "./types";

const initialState = {
  isFetchingCart: false,
  cartItems: [],
  fetchingCartError: null,
  isUpdatingCart: false,
  updatingCartSuccess: null,
  updatingCartError: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CART_REQUEST: {
      return Object.assign({}, state, {
        isFetchingCart: true
      });
    }
    case types.FETCH_CART_SUCCESS: {
      return Object.assign({}, state, {
        isFetchingCart: false,
        cartItems: action.payload
      });
    }
    case types.FETCH_CART_FAILURE: {
      return Object.assign({}, state, {
        isFetchingCart: false,
        fetchingCartError: action.error
      });
    }
    case types.UPDATE_CART_REQUEST: {
      return Object.assign({}, state, {
        isUpdatingCart: true
      });
    }
    case types.UPDATE_CART_SUCCESS: {
      return Object.assign({}, state, {
        isUpdatingCart: false,
        updatingCartSuccess: 'Cart updated successfully!'
      });
    }
    case types.UPDATE_CART_FAILURE: {
      return Object.assign({}, state, {
        isUpdatingCart: false,
        updatingCartError: action.error
      });
    }
    default:
      return state;
  }
};

export default reducers;
