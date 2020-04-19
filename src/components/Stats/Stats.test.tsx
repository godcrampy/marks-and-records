import React from "react";
import { render } from "@testing-library/react";
import Stats from "./Stats";

test("renders Stats component", () => {
  const { getByTestId } = render(
    <Stats weekly={{ mood: 4, work: 5 }} today={{ mood: 4, work: 5 }} weeklyTotal={23} />
  );

  const statsElement = getByTestId("Stats");
  expect(statsElement).toBeInTheDocument();
});
