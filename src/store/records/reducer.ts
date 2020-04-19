import { RecordsState, RecordsActionType, RecordsActions } from "./types";
import _ from "lodash";

const initialState: RecordsState = {
  records: [],
};

export function recordsReducer(state = initialState, action: RecordsActionType): RecordsState {
  switch (action.type) {
    case RecordsActions.ADD_RECORDS: {
      let oldRecords = _.cloneDeep(state.records);
      let newRecords: DayRecord[] = [...oldRecords, ..._.cloneDeep(action.payload)];
      newRecords = _.uniqBy(newRecords, (r: DayRecord) => r.date);
      const sortedRecords: DayRecord[] = _.orderBy(newRecords, ["time"], ["desc"]);
      return {
        records: sortedRecords,
      };
    }
    case RecordsActions.REMOVE_RECORDS: {
      return initialState;
    }
    case RecordsActions.ADD_MARK: {
      let mark: Mark = action.payload;
      let date: string = new Date(mark.time).toDateString();
      let newState = _.cloneDeep(state);
      let insertIndex: number = _.findIndex(newState.records, (r: DayRecord) => r.date === date);
      if (insertIndex === -1) {
        // not found, insert new record at index 0
        let newRecord: DayRecord = { date, marks: [mark], owner: mark.owner, time: mark.time };
        newState.records.unshift(newRecord);
        return newState;
      }
      let marks = newState.records[insertIndex].marks;
      // insert mark in correct position
      marks.push(mark);
      marks = _.orderBy(marks, ["time"], ["desc"]);
      newState.records[insertIndex].marks = marks;
      return newState;
    }
    case RecordsActions.REMOVE_MARK: {
      let mark: Mark = action.payload;
      let date: string = new Date(mark.time).toDateString();
      let deleteIndex: number = _.findIndex(state.records, (r: DayRecord) => r.date === date);
      if (deleteIndex === -1) return state;

      let newState = _.cloneDeep(state);
      let marks: Mark[] = newState.records[deleteIndex].marks;
      _.remove(marks, (m: Mark) => m.time === mark.time);
      newState.records[deleteIndex].marks = marks;
      return newState;
    }
    default: {
      return state;
    }
  }
}
