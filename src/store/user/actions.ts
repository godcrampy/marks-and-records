import { UserActions, UserActionType } from "./types";

export function setUser(user: User): UserActionType {
  return {
    type: UserActions.SET_USER,
    payload: user,
  };
}

export function removeUser(): UserActionType {
  return {
    type: UserActions.REMOVE_USER,
  };
}
