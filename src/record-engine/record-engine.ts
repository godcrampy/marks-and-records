import Api from "./api/api";
import { addRecords, addMark, removeRecords } from "../store/records/actions";
import { Store } from "redux";
import { UserState } from "../store/user/types";
import { RecordsState } from "../store/records/types";
import _ from "lodash";

class RecordEngine {
  public user: User;
  public api: Api;
  public store: Store<{ user: UserState; records: RecordsState }>;
  constructor(user: User, store: Store) {
    this.user = user;
    this.store = store;
    this.api = new Api(user);
  }

  async refresh() {
    const fetchedRecords = await this.getRecords();
    this.store.dispatch(removeRecords());
    this.store.dispatch(addRecords(fetchedRecords));
  }

  async getRecords(): Promise<DayRecord[]> {
    return this.api.fetchRecordsByLimit(7);
  }

  async addMark(mark: Mark) {
    const date = new Date(mark.time).toDateString();
    this.store.dispatch(addMark(mark));
    const changedRecord: DayRecord = this.store.getState().records.records.find((r: DayRecord) => {
      return r.date === date;
    })!;
    await this.api.setRecord(changedRecord);
  }

  static getWork(record: DayRecord): number {
    if (record === undefined) return 0;
    const marksLength = record.marks.length;
    let work = 0;
    for (let i = 0; i < marksLength - 1; ++i) {
      work +=
        record.marks[i].metric.work *
        Math.round((record.marks[i].time - record.marks[i + 1].time) / (60 * 1000));
    }
    return work;
  }

  static getMood(record: DayRecord): number {
    if (record === undefined) return 0;
    const moods = record.marks.map((m) => m.metric.mood);
    return +_.mean(moods).toFixed(2);
  }

  getWeeklyStats(): Score {
    const records = this.store.getState().records.records.slice(0, 7);
    // get mood
    const weeklyWork = records.map((r: DayRecord) => RecordEngine.getWork(r));
    const weeklyMood = records.map((r: DayRecord) => RecordEngine.getMood(r));

    return {
      work: +_.mean(weeklyWork).toFixed(2),
      mood: +_.mean(weeklyMood).toFixed(2),
    };
  }

  getDailyStats(): Score {
    const record: DayRecord = this.store.getState().records.records[0];

    return {
      work: RecordEngine.getWork(record),
      mood: RecordEngine.getMood(record),
    };
  }

  getWeeklyWork(): number {
    const records = this.store.getState().records.records.slice(0, 7);
    const weeklyWork = records.map((r: DayRecord) => RecordEngine.getWork(r));
    return _.sum(weeklyWork);
  }
}

export default RecordEngine;
