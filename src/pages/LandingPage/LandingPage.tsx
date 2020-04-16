import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

export interface LandingPageProps extends RouteComponentProps {}

export interface LandingPageState {}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  render() {
    return <div className="LandingPage">Landing Page</div>;
  }
}

export default LandingPage;
