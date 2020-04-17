type Mark = {
  time: number; // unix epoch
  message: string;
  metric: Metric;
  tags: string[];
  owner: string;
};

type Metric = {
  work: number;
  mood: number;
};
