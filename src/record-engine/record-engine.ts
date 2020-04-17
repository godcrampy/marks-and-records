import Api from "./api/api";

class RecordEngine {
  public user: User;
  public api: Api;
  constructor(user: User) {
    this.user = user;
    this.api = new Api(user);
  }

  async getRecords(): Promise<DayRecord[]> {
    return this.api.fetchRecordsByLimit(7);
  }
}

export default RecordEngine;
