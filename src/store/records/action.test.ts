import { RecordsActionType, RecordsActions } from "./types";
import { addRecords, removeRecords, addMark, removeMark } from "./actions";
import records from "../../samples/records.sample";
import marks from "../../samples/marks.sample";

test("returns addRecords action", () => {
  const recordsAction: RecordsActionType = addRecords(records);
  const expectedRecordsAction: RecordsActionType = {
    type: RecordsActions.ADD_RECORDS,
    payload: records,
  };

  expect(recordsAction).toStrictEqual(expectedRecordsAction);
});

test("returns removeRecords action", () => {
  const recordsAction: RecordsActionType = removeRecords();
  const expectedRecordsAction: RecordsActionType = {
    type: RecordsActions.REMOVE_RECORDS,
  };

  expect(recordsAction).toStrictEqual(expectedRecordsAction);
});

test("returns addMark action", () => {
  const recordsAction: RecordsActionType = addMark(marks[0]);
  const expectedRecordsAction: RecordsActionType = {
    type: RecordsActions.ADD_MARK,
    payload: marks[0],
  };

  expect(recordsAction).toStrictEqual(expectedRecordsAction);
});

test("returns removeMark action", () => {
  const recordsAction: RecordsActionType = removeMark(marks[0]);
  const expectedRecordsAction: RecordsActionType = {
    type: RecordsActions.REMOVE_MARK,
    payload: marks[0],
  };

  expect(recordsAction).toStrictEqual(expectedRecordsAction);
});
