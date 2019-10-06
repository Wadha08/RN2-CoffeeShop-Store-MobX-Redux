import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "./types";
import axios from "axios";

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      dispatch(setCoffeeShopsLoading());
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const coffeeShops = res.data;

      dispatch({
        type: GET_COFFEESHOPS,
        payload: coffeeShops
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setCoffeeShopsLoading = () => {
  return {
    type: COFFEESHOPS_LOADING
  };
};
