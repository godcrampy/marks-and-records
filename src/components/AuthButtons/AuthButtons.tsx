import * as React from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { UserActionType, UserState } from "../../store/user/types";
import { RootState } from "../../store";
import { setUser, removeUser } from "../../store/user/actions";

interface DispatchProps {
  setUser: (arg0: User) => UserActionType;
  removeUser: () => UserActionType;
}

interface StateProps {
  user: UserState;
}

interface ComponentProps {}

export interface AuthButtonsProps extends DispatchProps, StateProps, ComponentProps {}

export interface AuthButtonsState {
  auth: boolean;
}

class AuthButtons extends React.Component<AuthButtonsProps, AuthButtonsState> {
  componentDidMount = () => {
    this.setState({ auth: this.props.user.auth });
  };
  state = { auth: false };
  handleFirebaseAuth = async (): Promise<User> => {
    // * Firebase logic
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const db = firebase.firestore();

    const email = result.user?.email!;
    const id = result.user?.uid!;
    const name = result.user?.displayName!;
    const user: User = { email, name, id };

    await db.collection("users").doc(id).set(user, { merge: true });
    return user;
  };
  setUserState = (user: User) => {
    // * update state in redux
    this.props.setUser(user);
    this.setState({ auth: true });
  };
  handleSignIn = async () => {
    const user: User = await this.handleFirebaseAuth();
    this.setUserState(user);
  };
  handleLogout = async () => {
    // * remove user from state
    this.props.removeUser();
    this.setState({ auth: false });
  };
  render() {
    return (
      <div className="AuthButtons">
        {!this.state.auth ? (
          <div>
            <button className="button" onClick={this.handleSignIn}>
              Sign In
            </button>
            <button className="button" onClick={this.handleSignIn}>
              Sign Up
            </button>
          </div>
        ) : (
          <button className="button" onClick={this.handleLogout}>
            Logout
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  user: state.user,
});

const mapDispatchToProps: DispatchProps = {
  setUser,
  removeUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthButtons);
