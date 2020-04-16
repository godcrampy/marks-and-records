import { UserState, UserActionType, UserActions } from "./types";

const initialState: UserState = {
  auth: false,
};

export function userReducer(state = initialState, action: UserActionType): UserState {
  switch (action.type) {
    case UserActions.SET_USER: {
      return { auth: true, user: action.payload };
    }
    case UserActions.REMOVE_USER: {
      return { auth: false };
    }
    default:
      return state;
  }
}
