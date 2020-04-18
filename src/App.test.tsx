import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

import { rootReducer } from "./store";
import { setUser, removeUser } from "./store/user/actions";
import { Router } from "react-router-dom";
import user from "./samples/user.sample";

const store = createStore(rootReducer);

test("renders auth buttons without users", () => {
  const history = createBrowserHistory();
  const { getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  const signInButton = getByText(/sign in/i);
  const signUpButton = getByText(/sign up/i);
  expect(signInButton).toBeInTheDocument();
  expect(signUpButton).toBeInTheDocument();
});

test("renders auth buttons with users", () => {
  // * Test adding user
  store.dispatch(setUser(user));
  const history = createBrowserHistory();
  const { getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  const logoutButton = getByText(/logout/i);
  expect(logoutButton).toBeInTheDocument();
});

test("logs out user on logout", () => {
  // * Test adding user and then removing
  store.dispatch(setUser(user));
  const history = createBrowserHistory();
  const { getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
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

test("redirects to Landing Page if user is not present", () => {
  const history = createBrowserHistory();
  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  const landingPage = getByTestId("LandingPage");
  expect(landingPage).toBeInTheDocument();
});

test("redirects to HomePage on sign in", () => {
  const history = createBrowserHistory();
  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  const landingPage = getByTestId("LandingPage");
  expect(landingPage).toBeInTheDocument();

  // * sign in
  const user: User = {
    name: "John Doe",
    email: "john@doe.com",
    id: "john",
  };
  store.dispatch(setUser(user));
  const homePage = getByTestId("HomePage");
  expect(homePage).toBeInTheDocument();
});

test("redirects to LandingPage on log out", () => {
  // * sign in
  store.dispatch(setUser(user));
  const history = createBrowserHistory();
  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  const homePage = getByTestId("HomePage");
  expect(homePage).toBeInTheDocument();

  // * log out
  store.dispatch(removeUser());
  const landingPage = getByTestId("LandingPage");

  expect(landingPage).toBeInTheDocument();
});
