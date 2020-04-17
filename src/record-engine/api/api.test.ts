import "../../config.expose";
import Api from "./api";

test("can write and fetch records", async () => {
  const user: User = {
    name: "John Doe",
    email: "john@doe.com",
    id: "john",
  };
  const api = new Api(user);
  const record: DayRecord = {
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
  await api.setRecord(record);
  const records = await api.fetchRecords();
  expect(records[0]).toEqual(record);
});

test("fetches record chronologically ", async () => {
  const user: User = {
    name: "John Doe",
    email: "john@doe.com",
    id: "john",
  };
  const api = new Api(user);
  const record: DayRecord = {
    date: +new Date() + 10, // The record of above test is still up
    owner: user.id,
    score: {
      mood: 3,
      work: 3,
    },
    marks: [
      { message: "cde", owner: user.id, metric: { mood: 3, work: 3 }, tags: [], time: +new Date() },
    ],
  };
  await api.setRecord(record);
  const records = await api.fetchRecords();
  expect(records[0]).toEqual(record);
});
