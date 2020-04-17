import { RecordsState, RecordsActionType, RecordsActions } from "./types";
import _ from "lodash";

const initialState: RecordsState = {
  records: [],
};

export function recordsReducer(state = initialState, action: RecordsActionType): RecordsState {
  switch (action.type) {
    case RecordsActions.ADD_RECORDS: {
      let oldRecords = _.cloneDeep(state.records);
      const newRecords: DayRecord[] = [...oldRecords, ..._.cloneDeep(action.payload)];
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
    }
    default: {
      return state;
    }
  }
}
