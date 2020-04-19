import React from "react";
import Highlight from "react-highlighter";

import "./MarkBox.scss";

export interface MarkProps {
  mark: Mark;
}

export interface MarkState {}

const scoreToClass = ["light", "red", "red", "yellow", "green", "green"];

class MarkBox extends React.Component<MarkProps, MarkState> {
  renderMetric = (score: number): JSX.Element => (
    <span className={scoreToClass[score]}>{score}</span>
  );
  epochToTime = (epoch: number): string => {
    const time = new Date(epoch);
    const hour = time.getHours();
    const minute = time.getMinutes();
    const hourString: string = hour < 10 ? `0${hour}` : hour.toString();
    const minuteString: string = minute < 10 ? `0${minute}` : minute.toString();
    return `${hourString}:${minuteString}`;
  };
  render() {
    return (
      <div className="MarkBox" data-testid="MarkBox">
        <p className="yellow">{this.epochToTime(this.props.mark.time)}</p>
        <p>
          <Highlight
            search={/(?:\s|^)#[A-Za-z0-9\-._]+(?:\s|$)/}
            matchStyle={{ color: "#c55be5", backgroundColor: "#2b2833" }}
          >
            {this.props.mark.message}
          </Highlight>
        </p>
        <p className="metrics">
          <b>
            Productivity: {this.renderMetric(this.props.mark.metric.work)}, Mood:{" "}
            {this.renderMetric(this.props.mark.metric.mood)}
          </b>
        </p>
      </div>
    );
  }
}

export default MarkBox;
