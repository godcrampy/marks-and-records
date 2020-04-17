import "../../config.expose";
import Api from "./api";

const user: User = {
  name: "John Doe",
  email: "john@doe.com",
  id: "john",
};
const api = new Api(user);

const record1: DayRecord = {
  date: +new Date(),
  owner: user.id,
  score: {
    mood: 4,
    work: 4,
  },
  marks: [
    { message: "abc", owner: user.id, metric: { mood: 4, work: 4 }, tags: [], time: +new Date() },
  ],
};

const record2: DayRecord = {
  date: +new Date() + 10, // The record of above test is still up
  owner: user.id,
  score: {
    mood: 3,
    work: 3,
  },
  marks: [
    {
      message: "cde",
      owner: user.id,
      metric: { mood: 3, work: 3 },
      tags: [],
      time: +new Date() + 10,
    },
  ],
};

test("can write and fetch records", async () => {
  await api.setRecord(record1);
  const records = await api.fetchRecords();
  expect(records[0]).toEqual(record1);
});

test("fetches record chronologically ", async () => {
  await api.setRecord(record2);
  const records = await api.fetchRecords();
  expect(records[0]).toEqual(record2);
});

test("fetch records by range", async () => {
  const records = await api.fetchRecordsByLimit(record1, 1);
  expect(records[0]).toEqual(record2);
});
