import RecordEngine from "./record-engine";
import user from "../samples/user.sample";
import { createStore } from "redux";
import { rootReducer } from "../store";
import "../config.expose";

const store = createStore(rootReducer);
const engine = new RecordEngine(user, store);

test("gets records", async () => {
  const fetchedRecords = await engine.getRecords();

  expect(fetchedRecords.length).toBeGreaterThan(0);
});

test("dispatches records after fetching", async () => {
  await engine.refresh();

  expect(store.getState().records.records.length).toBeGreaterThan(0);
});
