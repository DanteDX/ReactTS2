import { Dispatch } from 'redux';
import { productInterface } from "../reducers/index";
import { ActionTypes } from "./ActionTypes";


export interface AddProductDispatch{
  type: ActionTypes.AddProduct,
  payload: productInterface
}

export interface DeleteProductDispatch{
  type: ActionTypes.DeleteProduct,
  payload: number
}

export const AddEmployee = (info: productInterface) => (dispatch: Dispatch) => {
  dispatch<AddProductDispatch>({
    type: ActionTypes.AddProduct,
    payload: info
  })
};

export const DeleteEmployee = (productId: number) => (dispatch: Dispatch) => {
  dispatch<DeleteProductDispatch>({
    type: ActionTypes.DeleteProduct,
    payload: productId
  })
};