import { ActionTypes } from "../actions/ActionTypes";
import { directorInterface } from "./index";
import { DirectorActions } from "../actions/ActionTypes";

const initialState = [{
  directorName: "",
  directorId: 0,
  directorPosition: ""
}];

export const DirectorReducer = (state: directorInterface[] = initialState, action:DirectorActions) => {
  switch (action.type) {
    case ActionTypes.AddDirector:
      return [
        ...state,
        action.payload
      ]
    case ActionTypes.DeleteDirector:
      return state.filter(eachDirector => eachDirector.directorId !== action.payload);
    default:
      return state;
  }
}