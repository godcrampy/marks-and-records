import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { UserState } from "../../store/user/types";
import { RootState } from "../../store";
import { connect } from "react-redux";
import AuthButtons from "../../components/AuthButtons/AuthButtons";

interface StateProps {
  user: UserState;
}

export interface HomePageProps extends RouteComponentProps, StateProps {}

export interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  render() {
    return (
      <div className="HomePage">
        Home
        <AuthButtons />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  user: state.user,
});

export default connect(mapStateToProps)(HomePage);
