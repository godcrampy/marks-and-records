import { recordsReducer } from "./reducer";
import { addRecords, removeRecords } from "./actions";
import records from "../../samples/records.sample";
import _ from "lodash";

test("adds records sequentially", () => {
  let state = recordsReducer(undefined, addRecords(records));
  _.reverse(records);
  expect(state.records).toStrictEqual(records);

  // add another record
  let extraRecords = _.cloneDeep(records);
  extraRecords[1].time = records[0].time + 20;
  extraRecords[0].time = records[0].time + 10;

  state = recordsReducer(state, addRecords(extraRecords));

  _.reverse(extraRecords);
  expect(state.records).toStrictEqual([...extraRecords, ...records]);
});

test("removes records", () => {
  let state = recordsReducer(undefined, addRecords(records));
  // _.reverse(records); Records already reverse above
  expect(state.records).toStrictEqual(records);

  state = recordsReducer(state, removeRecords());
  expect(state.records.length).toBe(0);
});
