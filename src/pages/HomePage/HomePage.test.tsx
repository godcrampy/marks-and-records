import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../store";
import HomePage from "./HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const store = createStore(rootReducer);

test("renders home page", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );

  const homeText = getByText(/home/i);
  expect(homeText).toBeInTheDocument();
});
