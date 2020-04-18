import Api from "./api/api";
import { addRecords } from "../store/records/actions";
import { Store } from "redux";

class RecordEngine {
  public user: User;
  public api: Api;
  public store: Store;
  constructor(user: User, store: Store) {
    this.user = user;
    this.store = store;
    this.api = new Api(user);
  }

  async initialize() {
    const fetchedRecords = await this.getRecords();
    this.store.dispatch(addRecords(fetchedRecords));
  }

  async getRecords(): Promise<DayRecord[]> {
    return this.api.fetchRecordsByLimit(7);
  }
}

export default RecordEngine;
