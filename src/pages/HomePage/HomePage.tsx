import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { UserState } from "../../store/user/types";
import { RootState } from "../../store";
import { connect } from "react-redux";
import Feed from "../../components/Feed/Feed";
import NewMark from "../../components/NewMark/NewMark";
import { RecordsState } from "../../store/records/types";
import RecordEngine from "../../record-engine/record-engine";
import store from "../../store/store-spawn";

interface StateProps {
  user: UserState;
  records: RecordsState;
}

export interface HomePageProps extends RouteComponentProps, StateProps {}

export interface HomePageState {
  engine: RecordEngine;
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  state = {
    engine: new RecordEngine(this.props.user.user!, store),
  };
  componentDidMount() {
    this.state.engine.refresh();
  }
  addMark = (message: string, metric: Metric) => {
    const mark: Mark = {
      message,
      metric,
      owner: this.props.user.user?.id!,
      time: +new Date(),
      tags: message.match(/#\w+/g) || [],
    };
    this.state.engine.addMark(mark);
  };
  render() {
    return (
      <div className="HomePage" data-testid="HomePage">
        <div className="columns">
          <div className="column">
            <NewMark adder={this.addMark} />
          </div>
          <div className="column">
            <Feed records={this.props.records.records} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  user: state.user,
  records: state.records,
});

export default connect(mapStateToProps)(HomePage);
