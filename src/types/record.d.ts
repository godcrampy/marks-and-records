type DayRecord = {
  // Record is already defined
  date: string;
  owner: string;
  time: number; // unix epoch of first mark
  marks: Mark[];
  score: Score;
};

type Score = {
  mood: number; // double
  work: number; // int
};
