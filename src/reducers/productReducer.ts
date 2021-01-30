import { ActionTypes } from "../actions/ActionTypes";
import { productInterface } from "./index";
import { ProductActions } from "../actions/ActionTypes";

const initialState = [{
  productId: 0,
  productName: "",
  productOrigin: ""
}];

export const ProductReducer = (state: productInterface[] = initialState, action:ProductActions) => {
  switch (action.type) {
    case ActionTypes.AddProduct:
      return [
        ...state,
        action.payload
      ]
    case ActionTypes.DeleteProduct:
      return state.filter(eachEmployee => eachEmployee.productId !== action.payload);
    default:
      return state;
  }
}