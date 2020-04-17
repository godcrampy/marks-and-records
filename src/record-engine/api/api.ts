import firebase from "firebase";

class Api {
  public user: User;
  public db: firebase.firestore.Firestore;
  constructor(owner: User) {
    this.user = owner;
    this.db = firebase.firestore();
  }

  async setRecord(record: DayRecord) {
    await this.db
      .collection("records")
      .doc(this.user.id + record.date.toString())
      .set(record, { merge: true });
  }

  async fetchRecords(): Promise<DayRecord[]> {
    const recordsRef = this.db.collection("records");
    const query = recordsRef.where("owner", "==", this.user.id);

    const doc = await query.orderBy("date", "desc").get();
    return doc.docs.map((doc) => {
      let data = doc.data();
      const date = data.date;
      const owner = data.owner;
      const marks: Mark[] = data.marks;
      const score: Score = data.score;
      let record: DayRecord = { date, owner, marks, score };
      return record;
    });
  }

  async fetchRecordsByLimit(startAfter: DayRecord, limit: number): Promise<DayRecord[]> {
    // Get limit records from start inclusive
    const recordsRef = this.db.collection("records");
    const query = recordsRef.where("owner", "==", this.user.id);

    const doc = await query.orderBy("date", "desc").startAt(startAfter).limit(limit).get();
    return doc.docs.map((doc) => {
      let data = doc.data();
      const date = data.date;
      const owner = data.owner;
      const marks: Mark[] = data.marks;
      const score: Score = data.score;
      let record: DayRecord = { date, owner, marks, score };
      return record;
    });
  }
}

export default Api;
