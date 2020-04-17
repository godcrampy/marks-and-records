import { setUser, removeUser } from "./actions";
import { userReducer } from "./reducer";
import { UserState } from "./types";
import user from "../../samples/user.sample";

test("sets user", () => {
  const userAction = setUser(user);
  const state = userReducer(undefined, userAction);
  const expectedState: UserState = {
    auth: true,
    user,
  };

  expect(state).toStrictEqual(expectedState);
});

test("removes user", () => {
  const userAction = removeUser();
  const state = userReducer(undefined, userAction);
  const expectedState: UserState = {
    auth: false,
  };

  expect(state).toStrictEqual(expectedState);
});
