import * as React from "react";
import AuthButtons from "../../components/AuthButtons/AuthButtons";

export interface LandingPageProps {}

export interface LandingPageState {}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  render() {
    return (
      <div className="LandingPage">
        <AuthButtons />
      </div>
    );
  }
}

export default LandingPage;
