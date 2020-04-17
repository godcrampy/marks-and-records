/* istanbul ignore file */

import user from "./user.sample";
import marks from "./marks.sample";

const day1 = 1587131081609; // April 17 2020 19:14:41
const day2 = 1587222195000; // April 18 2020 20:33:15

const record1: DayRecord = {
  date: new Date(day1).toDateString(),
  time: day1,
  owner: user.id,
  score: {
    mood: 4,
    work: 4,
  },
  marks: [marks[0]],
};

const record2: DayRecord = {
  date: new Date(day2).toDateString(), // The record of above test is still up
  time: day2,
  owner: user.id,
  score: {
    mood: 3,
    work: 3,
  },
  marks: [marks[1]],
};

const records = [record1, record2];

export default records;
