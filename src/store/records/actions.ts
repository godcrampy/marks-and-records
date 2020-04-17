import { RecordsActionType, RecordsActions } from "./types";

export function addRecords(records: DayRecord[]): RecordsActionType {
  return {
    type: RecordsActions.ADD_RECORDS,
    payload: records,
  };
}

export function removeRecords(): RecordsActionType {
  return {
    type: RecordsActions.REMOVE_RECORDS,
  };
}

export function addMark(mark: Mark): RecordsActionType {
  return {
    type: RecordsActions.ADD_MARK,
    payload: mark,
  };
}

export function removeMark(mark: Mark): RecordsActionType {
  return {
    type: RecordsActions.REMOVE_MARK,
    payload: mark,
  };
}
