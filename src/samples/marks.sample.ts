import user from "./user.sample";

const mark1: Mark = {
  message: "abc",
  owner: user.id,
  metric: { mood: 4, work: 4 },
  tags: [],
  time: +new Date(),
};

const mark2: Mark = {
  message: "cde",
  owner: user.id,
  metric: { mood: 3, work: 3 },
  tags: [],
  time: +new Date() + 10,
};

const marks: Mark[] = [mark1, mark2];

export default marks;
