import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import Navbar from "./Navbar";
import { createStore } from "redux";
import { rootReducer } from "../../store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { setUser } from "../../store/user/actions";
import user from "../../samples/user.sample";

const store = createStore(rootReducer);

test("renders auth buttons without users", () => {
  const history = createBrowserHistory();
  const { getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Navbar />
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
        <Navbar />
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
        <Navbar />
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

test("toggles hamburger", () => {
  const history = createBrowserHistory();
  const { queryAllByRole, container } = render(
    <Provider store={store}>
      <Router history={history}>
        <Navbar />
      </Router>
    </Provider>
  );
  const menu = getByLabelText(container, /menu/i);
  expect(menu).toBeInTheDocument();
  let buttons = queryAllByRole("button");
  expect(buttons.length).toBe(3);

  // hide auth buttons
  fireEvent.click(menu);

  buttons = queryAllByRole("button");
  expect(buttons.length).toBe(1);
});
