import { _AddDirector } from "../actions/DirectorAction";
import store from "../store/store";


describe('Testing AddDiretor Action', function () {
  test('one', function () {
    let expectedState = [
      { directorName: "", directorId: 0, directorPosition: "" },
      { directorName: "Shadman", directorId: 999, directorPosition: "Director" }
    ];
    const info = {
      directorName: 'Shadman',
      directorId: 999,
      directorPosition: 'Director'
    };
    store.dispatch(_AddDirector(info));
    const newState = store.getState();
    expect(newState.directorsInformation).toStrictEqual(expectedState);
  })
});