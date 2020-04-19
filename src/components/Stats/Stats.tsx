import React from "react";

import "./Stats.scss";

export interface StatsProps {
  weekly: Score;
  today: Score;
  weeklyTotal: number;
}

export interface StatsState {}

class Stats extends React.Component<StatsProps, StatsState> {
  render() {
    return (
      <div className="Stats" data-testid="Stats">
        <p className="title is-4 purple">Stats</p>
        <p className="yellow">Today</p>
        <p>
          <b>Productivity: {this.props.today.work}</b>
        </p>
        <p>
          <b>Mood: {this.props.today.mood}</b>
        </p>
        <p className="yellow">Weekly</p>
        <p>
          <b>Productivity: {this.props.weeklyTotal}</b>
        </p>
        <p>
          <b>Daily Average: {this.props.weekly.work}</b>
        </p>
        <p>
          <b>Mood: {this.props.weekly.mood}</b>
        </p>
      </div>
    );
  }
}

export default Stats;
