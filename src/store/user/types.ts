/* istanbul ignore file */

export enum UserActions {
  SET_USER,
  REMOVE_USER,
}

export interface UserState {
  auth: boolean;
  user?: User;
}

interface SetUserAction {
  type: typeof UserActions.SET_USER;
  payload: User;
}

interface RemoveUserAction {
  type: typeof UserActions.REMOVE_USER;
}

export type UserActionType = SetUserAction | RemoveUserAction;
