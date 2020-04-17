import { setUser, removeUser } from "./actions";
import { UserActionType, UserActions } from "./types";
import user from "../../samples/user.sample";

test("returns SetUserAction", () => {
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
