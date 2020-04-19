import user from "./user.sample";

const day1time1 = 1587131081609; // April 17 2020 19:14:41
const day1time2 = day1time1 + 1000 * 60 * 5; // April 17 2020 19:14:46
const day2time1 = 1587222195000; // April 18 2020 20:33:15
const day2time2 = day2time1 + 1000 * 60 * 5; // April 18 2020 20:33:15

const mark1: Mark = {
  message: "Had bath. Watermelon break. Gonna start #work on wiring redux to auth",
  owner: user.id,
  metric: { mood: 4, work: 0 },
  tags: [],
  time: day1time1,
};

const mark2: Mark = {
  message: "Completed redux with test. Gonna take #break",
  owner: user.id,
  metric: { mood: 3, work: 2 },
  tags: [],
  time: day1time2,
};

const mark3: Mark = {
  message: "Had bath. Watermelon break. Gonna start #work on wiring redux to auth",
  owner: user.id,
  metric: { mood: 4, work: 0 },
  tags: [],
  time: day2time1,
};

const mark4: Mark = {
  message: "Completed redux with test. Gonna take #break",
  owner: user.id,
  metric: { mood: 3, work: 2 },
  tags: [],
  time: day2time2,
};

const marks: Mark[] = [mark1, mark2, mark3, mark4];

export default marks;
