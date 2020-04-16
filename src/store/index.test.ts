import { rootReducer } from ".";
import { createStore } from "redux";
import { UserState } from "./user/types";
import { setUser, removeUser } from "./user/actions";

test("sets initial state values", () => {
  const store = createStore(rootReducer);
  const initialUserState: UserState = {
    auth: false,
  };
  // * Test initial state
  expect(store.getState().user).toEqual(initialUserState);
});

test("exports user reducers", () => {
  const store = createStore(rootReducer);

  // * Test adding user
  const user: User = {
    name: "John Doe",
    email: "john@doe.com",
    id: "john",
  };
  let expectedUserState: UserState = {
    auth: true,
    user,
  };
  store.dispatch(setUser(user));
  expect(store.getState().user).toEqual(expectedUserState);

  // * Test removing user
  expectedUserState = { auth: false };
  store.dispatch(removeUser());
  expect(store.getState().user).toEqual(expectedUserState);
});