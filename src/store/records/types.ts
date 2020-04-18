/* istanbul ignore file */

export enum RecordsActions {
  ADD_RECORDS = "ADD_RECORDS",
  REMOVE_RECORDS = "REMOVE_RECORDS",
  ADD_MARK = "ADD_MARK",
  REMOVE_MARK = "REMOVE_MARK",
}

export interface RecordsState {
  records: DayRecord[];
}

interface AddRecordsAction {
  type: typeof RecordsActions.ADD_RECORDS;
  payload: DayRecord[];
}

interface RemoveRecordsAction {
  type: typeof RecordsActions.REMOVE_RECORDS;
}

interface AddMarkAction {
  type: typeof RecordsActions.ADD_MARK;
  payload: Mark;
}

interface RemoveMarkAction {
  type: typeof RecordsActions.REMOVE_MARK;
  payload: Mark;
}

export type RecordsActionType =
  | AddRecordsAction
  | RemoveRecordsAction
  | AddMarkAction
  | RemoveMarkAction;
