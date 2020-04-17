/* istanbul ignore file */

import user from "./user.sample";

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

const records = [record1, record2];

export default records;
