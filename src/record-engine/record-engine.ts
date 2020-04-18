import Api from "./api/api";
import { addRecords, addMark } from "../store/records/actions";
import { Store } from "redux";
import { UserState } from "../store/user/types";
import { RecordsState } from "../store/records/types";

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
}

export default RecordEngine;
