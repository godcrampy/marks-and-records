/* istanbul ignore file */

import user from "./user.sample";
import marks from "./marks.sample";

const record1: DayRecord = {
  date: +new Date(),
  owner: user.id,
  score: {
    mood: 4,
    work: 4,
  },
  marks: [marks[0]],
};

const record2: DayRecord = {
  date: +new Date() + 10, // The record of above test is still up
  owner: user.id,
  score: {
    mood: 3,
    work: 3,
  },
  marks: [marks[1]],
};

const records = [record1, record2];

export default records;
