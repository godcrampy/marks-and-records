type DayRecord = {
  // Record is already defined
  owner: string;
  date: number; // unix epoch of first mark
  marks: Mark[];
  score: Score;
};

type Score = {
  mood: number; // double
  work: number; // int
};
