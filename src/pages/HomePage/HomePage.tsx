import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { UserState } from "../../store/user/types";
import { RootState } from "../../store";
import { connect } from "react-redux";
import Feed from "../../components/Feed/Feed";
import records from "../../samples/records.sample";

interface StateProps {
  user: UserState;
}

export interface HomePageProps extends RouteComponentProps, StateProps {}

export interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  render() {
    return (
      <div className="HomePage" data-testid="HomePage">
        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <Feed records={records} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  user: state.user,
});

export default connect(mapStateToProps)(HomePage);
