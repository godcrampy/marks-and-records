import { setUser, removeUser } from "./actions";
import { UserActionType, UserActions } from "./types";

test("returns SetUserAction", () => {
  const user: User = {
    email: "a@a.com",
    name: "John Doe",
    id: "xyz",
  };
  const userAction: UserActionType = setUser(user);
  const expectedUserAction: UserActionType = {
    type: UserActions.SET_USER,
    payload: user,
  };
  expect(userAction).toStrictEqual(expectedUserAction);
});

test("returns RemoveUserAction", () => {
  const userAction: UserActionType = removeUser();
  const expectedUserAction: UserActionType = {
    type: UserActions.REMOVE_USER,
  };
  expect(userAction).toStrictEqual(expectedUserAction);
});
