import "../../config.expose";
import Api from "./api";
import user from "../../samples/user.sample";
import records from "../../samples/records.sample";

const api = new Api(user);
const [record1, record2] = records;

test("can write and fetch records", async () => {
  await api.setRecord(record2);
  await api.setRecord(record1);
  const records = await api.fetchRecords();
  expect(records[0]).toEqual(record2);
});

test("fetches record chronologically ", async () => {
  await api.setRecord(record2);
  const records = await api.fetchRecords();
  expect(records[0]).toEqual(record2);
});

test("fetches records by range", async () => {
  const records = await api.fetchRecordsByRange(record1, 1);
  expect(records[0]).toEqual(record2);
});

test("fetches records by limit", async () => {
  const records = await api.fetchRecordsByLimit(2);
  expect(records.length).toEqual(2);
  expect(records[0]).toEqual(record2);
  expect(records[1]).toEqual(record1);
});
