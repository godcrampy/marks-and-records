import React from "react";

import "./NewMark.scss";

export interface NewMarkProps {
  adder: (message: string, metric: Metric) => void;
}

export interface NewMarkState {
  productivity: number;
  mood: number;
  message: string;
}

class NewMark extends React.Component<NewMarkProps, NewMarkState> {
  state = {
    productivity: 0,
    mood: 1,
    message: "",
  };
  handleProductivityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ productivity: +e.target.value });
  };
  handleMoodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ mood: +e.target.value });
  };
  handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ message: e.target.value });
  };
  handleMark = () => {
    this.props.adder(this.state.message, {
      mood: this.state.mood,
      work: this.state.productivity,
    });
    this.setState({ message: "" });
  };
  render() {
    return (
      <div className="NewMark" data-testid="NewMark">
        <p className="title is-4 purple">New Mark</p>
        <textarea
          className="textarea"
          value={this.state.message}
          onChange={this.handleMessageChange}
          placeholder="What's Up"
        ></textarea>
        <div className="field is-grouped is-grouped-multiline is-horizontal selector">
          <div className="field-label is-normal">
            <label className="label" htmlFor="productivity">
              Productivity
            </label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control is-expanded">
                <div className="select is-fullwidth">
                  <select
                    id="productivity"
                    value={this.state.productivity}
                    onChange={this.handleProductivityChange}
                  >
                    <option value={0} key={0}>
                      0
                    </option>
                    <option value={1} key={1}>
                      1
                    </option>
                    <option value={2} key={2}>
                      2
                    </option>
                    <option value={3} key={3}>
                      3
                    </option>
                    <option value={4} key={4}>
                      4
                    </option>
                    <option value={5} key={5}>
                      5
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="field-label is-normal">
            <label className="label" htmlFor="mood">
              Mood
            </label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control is-expanded">
                <div className="select is-fullwidth">
                  <select id="mood" value={this.state.mood} onChange={this.handleMoodChange}>
                    <option value={1} key={1}>
                      1
                    </option>
                    <option value={2} key={2}>
                      2
                    </option>
                    <option value={3} key={3}>
                      3
                    </option>
                    <option value={4} key={4}>
                      4
                    </option>
                    <option value={5} key={5}>
                      5
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <button onClick={this.handleMark} className="button is-primary">
            Mark
          </button>
        </div>
      </div>
    );
  }
}

export default NewMark;
