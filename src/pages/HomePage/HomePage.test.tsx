import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../store";
import HomePage from "./HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const store = createStore(rootReducer);

test("renders home page", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );

  const homeText = getByTestId("HomePage");
  expect(homeText).toBeInTheDocument();
});

test("renders Feed", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );

  const feed = getByTestId("Feed");
  expect(feed).toBeInTheDocument();
});

test("renders NewMark component", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );

  const component = getByTestId("NewMark");
  expect(component).toBeInTheDocument();
});
