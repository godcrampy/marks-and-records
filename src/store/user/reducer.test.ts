import { setUser, removeUser } from "./actions";
import { userReducer } from "./reducer";
import { UserState } from "./types";

test("sets user", () => {
  const user: User = {
    email: "a@a.com",
    name: "John Doe",
    id: "xyz",
  };

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
