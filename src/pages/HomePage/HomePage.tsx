import React from "react";

export interface HomePageProps {}

export interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  render() {
    return <div className="HomePage">Home</div>;
  }
}

export default HomePage;
