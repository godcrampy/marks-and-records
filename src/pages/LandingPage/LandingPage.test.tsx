import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../store";
import LandingPage from "./LandingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const store = createStore(rootReducer);

test("renders landing page", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );

  const landingText = getByTestId("LandingPage");
  expect(landingText).toBeInTheDocument();
});
