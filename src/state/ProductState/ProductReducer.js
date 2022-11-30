import { actionTypes } from "./actionTypes";

export const initialstate = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};
