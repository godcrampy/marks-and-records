import RecordEngine from "./record-engine";
import user from "../samples/user.sample";
import { createStore } from "redux";
import { rootReducer } from "../store";
import "../config.expose";
import records from "../samples/records.sample";

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

test("gets correct work value", () => {
  expect(RecordEngine.getWork(records[0])).toBe(10);
});

test("gets correct mood value", () => {
  expect(RecordEngine.getMood(records[0])).toBe(3.5);
});

test("gets correct weekly and daily stats", () => {
  const weeklyStats: Score = engine.getWeeklyStats();
  const dailyStats: Score = engine.getDailyStats();
  const weekTotal: number = engine.getWeeklyWork();

  expect(weeklyStats.mood).toBe(3.5);
  expect(weeklyStats.work).toBe(10);
  expect(dailyStats.work).toBe(10);
  expect(dailyStats.mood).toBe(3.5);
  expect(weekTotal).toBe(20);
});
