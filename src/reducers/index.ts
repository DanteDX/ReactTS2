import { combineReducers } from "redux";
import { EmployeeReducer } from "./employeeReducer";
import { ProductReducer } from "./productReducer";
import { DirectorReducer } from "./directorReducer/directorReducer";

export interface employeeInterface{
  employeeId: number;
  employeeName: string;
  employeeAge: number;
}

export interface productInterface{
  productId: number;
  productName: string;
  productOrigin: string;
}

export interface directorInterface{
  directorId: number;
  directorName: string;
  directorPosition: string;
}

export interface StoreState{
  employeesInformation: employeeInterface[];
  productsInformation: productInterface[];
  directorsInformation: directorInterface[];
}

export const rootReducer = combineReducers<StoreState>({
  employeesInformation: EmployeeReducer,
  productsInformation: ProductReducer,
  directorsInformation: DirectorReducer
});