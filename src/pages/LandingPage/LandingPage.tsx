import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

export interface LandingPageProps extends RouteComponentProps {}

export interface LandingPageState {}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  render() {
    return (
      <div className="LandingPage" data-testid="LandingPage">
        <h1 className="title">A human approach to productivity and time logging</h1>
        <h1 className="subtitle">Please sign in/up to continue</h1>
      </div>
    );
  }
}

export default LandingPage;
