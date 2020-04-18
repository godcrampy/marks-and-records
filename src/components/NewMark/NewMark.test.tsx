import React from "react";
import { render } from "@testing-library/react";
import NewMark from "./NewMark";

test("renders NewMark component", () => {
  const { getByTestId } = render(<NewMark />);

  const component = getByTestId("NewMark");
  expect(component).toBeInTheDocument();
});

test("renders textarea and dropdowns", () => {
  const { getByPlaceholderText, getByLabelText } = render(<NewMark />);

  const textArea = getByPlaceholderText("What's Up");

  expect(textArea).toBeInTheDocument();

  const productivityDropDown = getByLabelText("Productivity");
  const moodDropDown = getByLabelText("Mood");
  expect(productivityDropDown).toBeInTheDocument();
  expect(moodDropDown).toBeInTheDocument();
});
