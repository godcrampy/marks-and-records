import React from "react";
import Record from "../Record/Record";

export interface FeedProps {
  records: DayRecord[];
}

export interface FeedState {}

class Feed extends React.Component<FeedProps, FeedState> {
  render() {
    return (
      <div className="Feed" data-testid="Feed">
        {this.props.records.map((r: DayRecord, i: number) => (
          <Record record={r} key={i} />
        ))}
      </div>
    );
  }
}

export default Feed;
