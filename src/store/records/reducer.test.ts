import { recordsReducer } from "./reducer";
import { addRecords, removeRecords, addMark, removeMark } from "./actions";
import records from "../../samples/records.sample";
import _ from "lodash";
import user from "../../samples/user.sample";
import marks from "../../samples/marks.sample";

const time: number = 1587313308391; // April 19 2020 21:51:48

test("adds records sequentially", () => {
  let state = recordsReducer(undefined, addRecords(records));
  _.reverse(records);
  expect(state.records).toStrictEqual(records);

  // add another record
  let extraRecords = _.cloneDeep(records);
  extraRecords[1].time = records[0].time + 20;
  extraRecords[0].time = records[0].time + 10;
  extraRecords[1].date = "20 April 2020";
  extraRecords[0].date = "19 April 2020";

  state = recordsReducer(state, addRecords(extraRecords));

  _.reverse(extraRecords);
  expect(state.records).toStrictEqual([...extraRecords, ...records]);
});

test("doesn't add duplicate records", () => {
  let state = recordsReducer(undefined, addRecords(records));
  state = recordsReducer(state, addRecords(records));
  state = recordsReducer(state, addRecords(records));
  state = recordsReducer(state, addRecords(records));
  expect(state.records).toStrictEqual(records);
});

test("removes records", () => {
  let state = recordsReducer(undefined, addRecords(records));
  // _.reverse(records); Records already reverse above
  expect(state.records).toStrictEqual(records);

  state = recordsReducer(state, removeRecords());
  expect(state.records.length).toBe(0);
});

test("adds mark to new date", () => {
  let state = recordsReducer(undefined, addRecords(records));
  let mark: Mark = {
    message: "test",
    metric: { mood: 2, work: 5 },
    owner: user.id,
    tags: [],
    time,
  };

  state = recordsReducer(state, addMark(mark));
  expect(state.records.length).toBe(3);
  expect(state.records[0].marks[0]).toStrictEqual(mark);
});

test("adds mark to same date", () => {
  let state = recordsReducer(undefined, addRecords(records));
  let mark1: Mark = {
    message: "test",
    metric: { mood: 2, work: 5 },
    owner: user.id,
    tags: [],
    time: records[1].marks[0].time + 10,
  };

  state = recordsReducer(state, addMark(mark1));
  expect(state.records.length).toBe(2);
  expect(state.records[1].marks.length).toBe(2);
  expect(state.records[1].marks[0]).toStrictEqual(mark1);

  let mark2: Mark = {
    message: "test",
    metric: { mood: 2, work: 5 },
    owner: user.id,
    tags: [],
    time: records[1].marks[0].time - 10,
  };

  state = recordsReducer(state, addMark(mark2));
  expect(state.records.length).toBe(2);
  expect(state.records[1].marks.length).toBe(3);
  expect(state.records[1].marks[2]).toStrictEqual(mark2);
});

test("removes mark", () => {
  let state = recordsReducer(undefined, addRecords(records));
  state = recordsReducer(state, removeMark(marks[1]));
  expect(state.records[0].marks.length).toBe(0);
});
