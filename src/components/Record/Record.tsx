import React from "react";
import MarkBox from "../MarkBox/MarkBox";

import "./Record.scss";

export interface RecordProps {
  record: DayRecord;
}

export interface RecordState {}

class Record extends React.Component<RecordProps, RecordState> {
  render() {
    return (
      <div className="Record" data-testid="Record">
        <p className="title is-5 purple">{this.props.record.date}</p>
        {this.props.record.marks.map((m: Mark, i: number) => (
          <MarkBox mark={m} key={i} />
        ))}
      </div>
    );
  }
}

export default Record;
