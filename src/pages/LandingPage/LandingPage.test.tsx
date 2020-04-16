import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../store";
import { setUser } from "../../store/user/actions";
import LandingPage from "./LandingPage";

const store = createStore(rootReducer);

test("renders auth buttons without user", () => {
  const { getByText } = render(
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );

  const signInButton = getByText(/sign in/i);
  const signUpButton = getByText(/sign in/i);
  expect(signInButton).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});

test("renders auth buttons with users", () => {
  // * Test adding user
  const user: User = {
    name: "John Doe",
    email: "john@doe.com",
    id: "john",
  };
  store.dispatch(setUser(user));
  const { getByText } = render(
    <Provider store={store}>
      <LandingPage />
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
      <LandingPage />
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
