import user from "./user.sample";

const day1 = 1587131081609; // April 17 2020 19:14:41
const day2 = 1587222195000; // April 18 2020 20:33:15

const mark1: Mark = {
  message: "abc",
  owner: user.id,
  metric: { mood: 4, work: 4 },
  tags: [],
  time: day1,
};

const mark2: Mark = {
  message: "cde",
  owner: user.id,
  metric: { mood: 3, work: 3 },
  tags: [],
  time: day2,
};

const marks: Mark[] = [mark1, mark2];

export default marks;
