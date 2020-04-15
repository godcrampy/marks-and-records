import * as React from "react";
import firebase from "firebase";

export interface LandingPageProps {}

export interface LandingPageState {}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  handleAuth = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const db = firebase.firestore();

    const email = result.user?.email;
    const id = result.user?.uid;
    const name = result.user?.displayName;

    await db.collection("users").doc(id).set(
      {
        email,
        id,
        name,
      },
      { merge: true }
    );
  };
  render() {
    return (
      <div className="LandingPage">
        <button className="button" onClick={this.handleAuth}>
          Sign In
        </button>
      </div>
    );
  }
}

export default LandingPage;
