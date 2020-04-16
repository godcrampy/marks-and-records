import * as React from "react";
import AuthButtons from "../../components/AuthButtons/AuthButtons";
import { RouteComponentProps } from "react-router-dom";

export interface LandingPageProps extends RouteComponentProps {}

export interface LandingPageState {}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  render() {
    return (
      <div className="LandingPage">
        Landing Page
        <AuthButtons />
      </div>
    );
  }
}

export default LandingPage;
