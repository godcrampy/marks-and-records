import RecordEngine from "./record-engine";
import user from "../samples/user.sample";
import { createStore } from "redux";
import { rootReducer } from "../store";
import "../config.expose";

test("dispatches records after fetching", async () => {
  const store = createStore(rootReducer);
  const engine = new RecordEngine(user, store);
  await engine.refresh();

  expect(store.getState().records.records.length).toBeGreaterThan(0);
});
