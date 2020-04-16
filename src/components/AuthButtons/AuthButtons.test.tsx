import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../store";
import AuthButtons from "./AuthButtons";
import { setUser } from "../../store/user/actions";

const store = createStore(rootReducer);

test("renders sign in if no user", () => {
  const { getByText } = render(
    <Provider store={store}>
      <AuthButtons />
    </Provider>
  );
  const signInButton = getByText(/sign in/i);
  const signUpButton = getByText(/sign in/i);
  expect(signInButton).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});

test("renders log out if user", () => {
  // * Test adding user
  const user: User = {
    name: "John Doe",
    email: "john@doe.com",
    id: "john",
  };
  store.dispatch(setUser(user));
  const { getByText } = render(
    <Provider store={store}>
      <AuthButtons />
    </Provider>
  );
  const logoutButton = getByText(/logout/i);
  expect(logoutButton).toBeInTheDocument();
});

test("logs out user on logout", () => {
  // * Test adding user and then removing
  const user: User = {
    name: "John Doe",
    email: "john@doe.com",
    id: "john",
  };
  store.dispatch(setUser(user));
  const { getByText } = render(
    <Provider store={store}>
      <AuthButtons />
    </Provider>
  );

  expect(store.getState().user.auth).toBe(true);

  fireEvent.click(getByText(/logout/i));

  expect(store.getState().user.auth).toBe(false);

  const signInButton = getByText(/sign in/i);
  const signUpButton = getByText(/sign in/i);
  expect(signInButton).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});
