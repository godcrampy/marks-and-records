import React from "react";

import { Switch, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import { UserState } from "./store/user/types";
import { RootState } from "./store";
import { connect } from "react-redux";
import Navbar from "./components/Navbar/Navbar";

interface StateProps {
  user: UserState;
}

export interface AppProps extends StateProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          {this.props.user.auth && <Route path="/" component={HomePage} />}
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
