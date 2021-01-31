import React from 'react';
import { DirectorReducer } from "./directorReducer";
import { ActionTypes } from "../../actions/ActionTypes";
import { directorInterface } from "../index";

describe('Testing Director Reducer', () => {
  const initialState = [{
    directorName: "",
    directorId: 0,
    directorPosition: ""
  }];

  test('Testing Add Director', () => {
    let payload: directorInterface = {
      directorId: 999,
      directorName: 'Shadman Martin',
      directorPosition: 'CTO'
    };
    let newState = DirectorReducer(initialState, { type: ActionTypes.AddDirector, payload });
    let expectedState = [payload];
    expect(newState.slice(1, newState.length)).toEqual(expectedState);
  });

  test('Testing Delete Director', () => {
    let initialState: directorInterface[] = [
      { directorId: 1000, directorName: 'Shadman', directorPosition: 'CTO' },
      { directorId: 1001, directorName: 'Martin', directorPosition: "CEO" }
    ];
    let expectedState = [initialState[0]];
    let newState = DirectorReducer(initialState, { type: ActionTypes.DeleteDirector, payload: 1001 });
    expect(newState).toEqual(expectedState);
  });
})