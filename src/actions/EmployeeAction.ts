import { Dispatch } from 'redux';
import { employeeInterface } from "../reducers/index";
import { ActionTypes } from "./ActionTypes";


export interface AddEmployeeDispatch{
  type: ActionTypes.AddEmployee,
  payload: employeeInterface
}

export interface DeleteEmployeeDispatch{
  type: ActionTypes.DeleteEmployee,
  payload: number
}

export const AddEmployee = (info: employeeInterface) => (dispatch: Dispatch) => {
  dispatch<AddEmployeeDispatch>({
    type: ActionTypes.AddEmployee,
    payload: info
  })
};

export const DeleteEmployee = (employeeId: number) => (dispatch: Dispatch) => {
  dispatch({
    type: ActionTypes.DeleteEmployee,
    payload: employeeId
  })
};