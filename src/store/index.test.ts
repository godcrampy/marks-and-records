import { rootReducer } from ".";
import { createStore } from "redux";
import { UserState } from "./user/types";
import { setUser, removeUser } from "./user/actions";
import user from "../samples/user.sample";
import { RecordsState } from "./records/types";
import { addRecords, removeRecords, addMark, removeMark } from "./records/actions";
import records from "../samples/records.sample";
import marks from "../samples/marks.sample";
import _ from "lodash";

test("sets initial UserState values", () => {
  const store = createStore(rootReducer);
  const initialUserState: UserState = {
    auth: false,
  };
  // * Test initial state
  expect(store.getState().user).toEqual(initialUserState);
});

test("exports user reducers", () => {
  const store = createStore(rootReducer);
  // * Test adding user
  let expectedUserState: UserState = {
    auth: true,
    user,
  };
  store.dispatch(setUser(user));
  expect(store.getState().user).toEqual(expectedUserState);

  // * Test removing user
  expectedUserState = { auth: false };
  store.dispatch(removeUser());
  expect(store.getState().user).toEqual(expectedUserState);
});

test("sets initial RecordsState values", () => {
  const store = createStore(rootReducer);
  const initialRecordsState: RecordsState = {
    records: []
  }

  expect(store.getState().records).toStrictEqual(initialRecordsState);
});


const time: number = 1587313308391; // April 19 2020 21:51:48

test("adds records sequentially", () => {
  const store = createStore(rootReducer);
  store.dispatch(addRecords(records));
  _.reverse(records);
  expect(store.getState().records.records).toStrictEqual(records);

  // add another record
  let extraRecords = _.cloneDeep(records);
  extraRecords[1].time = records[0].time + 20;
  extraRecords[0].time = records[0].time + 10;

  store.dispatch(addRecords(extraRecords))

  _.reverse(extraRecords);
  expect(store.getState().records.records).toStrictEqual([...extraRecords, ...records]);
});

test("removes records", () => {
  const store = createStore(rootReducer);
  store.dispatch(addRecords(records));
  // _.reverse(records); Records already reverse above
  expect(store.getState().records.records).toStrictEqual(records);

  store.dispatch(removeRecords());
  expect(store.getState().records.records.length).toBe(0);
});

test("adds mark to new date", () => {
  const store = createStore(rootReducer);
  store.dispatch(addRecords(records));

  let mark: Mark = {
    message: "test",
    metric: { mood: 2, work: 5 },
    owner: user.id,
    tags: [],
    time,
  };

  store.dispatch(addMark(mark))
  expect(store.getState().records.records.length).toBe(3);
  expect(store.getState().records.records[0].marks[0]).toStrictEqual(mark);
});

test("adds mark to same date", () => {
  const store = createStore(rootReducer);
  store.dispatch(addRecords(records));
  let mark1: Mark = {
    message: "test",
    metric: { mood: 2, work: 5 },
    owner: user.id,
    tags: [],
    time: records[1].marks[0].time + 10,
  };

  store.dispatch(addMark(mark1))
  expect(store.getState().records.records.length).toBe(2);
  expect(store.getState().records.records[1].marks.length).toBe(2);
  expect(store.getState().records.records[1].marks[0]).toStrictEqual(mark1);

  let mark2: Mark = {
    message: "test",
    metric: { mood: 2, work: 5 },
    owner: user.id,
    tags: [],
    time: records[1].marks[0].time - 10,
  };

  store.dispatch(addMark(mark2))
  expect(store.getState().records.records.length).toBe(2);
  expect(store.getState().records.records[1].marks.length).toBe(3);
  expect(store.getState().records.records[1].marks[2]).toStrictEqual(mark2);
});

test("removes mark", () => {
  const store = createStore(rootReducer);
  store.dispatch(addRecords(records));
  store.dispatch(removeMark(marks[1]))
  expect(store.getState().records.records[0].marks.length).toBe(0);
});
