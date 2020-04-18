/* istanbul ignore file */

import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { recordsReducer } from "./records/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  records: recordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
