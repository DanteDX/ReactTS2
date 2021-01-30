import { ActionTypes } from "../actions/ActionTypes";
import { employeeInterface } from "./index";
import { EmployeeActions } from "../actions/ActionTypes";

const initialState = [{
  employeeName: "",
  employeeId: 0,
  employeeAge: 0
}];

export const EmployeeReducer = (state: employeeInterface[] = initialState, action:EmployeeActions) => {
  switch (action.type) {
    case ActionTypes.AddEmployee:
      return [
        ...state,
        action.payload
      ]
    case ActionTypes.DeleteEmployee:
      return state.filter(eachEmployee => eachEmployee.employeeId !== action.payload);
    default:
      return state;
  }
}