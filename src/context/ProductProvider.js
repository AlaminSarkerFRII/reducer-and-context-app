import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import {
  initialstate,
  ProductReducer,
} from "../state/ProductState/ProductReducer";
import { actionTypes } from "../state/ProductState/actionTypes";
// contaxt

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  // const [data, setData] = useState([]);

  // useReducer

  const [state, dispatch] = useReducer(ProductReducer, initialstate);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCH_START });
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        // setData(res.data.products);
        dispatch({
          type: actionTypes.FETCH_SUCCESS,
          payload: res.data.products,
        });
      })
      .catch(() => {
        dispatch({ type: actionTypes.FETCH_ERROR });
      });
  }, []);

  const value = {
    state,
    dispatch,
  };

  console.log(state);

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
