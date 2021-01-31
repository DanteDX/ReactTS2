import { Dispatch } from 'redux';
import { directorInterface } from "../reducers/index";
import { ActionTypes } from "./ActionTypes";


export interface AddDirectorDispatch{
  type: ActionTypes.AddDirector,
  payload: directorInterface
}

export interface DeleteDirectorDispatch{
  type: ActionTypes.DeleteDirector,
  payload: number
}

export const AddDirector = (info: directorInterface) => (dispatch: Dispatch) => {
  dispatch<AddDirectorDispatch>({
    type: ActionTypes.AddDirector,
    payload: info
  })
};

export const _AddDirector = (info: directorInterface) => ({
  type: ActionTypes.AddDirector,
  payload: info
});

export const DeleteDirector = (directorId: number) => (dispatch: Dispatch) => {
  dispatch<DeleteDirectorDispatch>({
    type: ActionTypes.DeleteDirector,
    payload: directorId
  })
};