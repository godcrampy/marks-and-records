import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewMark from "./NewMark";

test("renders NewMark component", () => {
  const { getByTestId } = render(<NewMark adder={() => {}} />);

  const component = getByTestId("NewMark");
  expect(component).toBeInTheDocument();
});

test("renders textarea and dropdowns", () => {
  const { getByPlaceholderText, getByLabelText } = render(<NewMark adder={() => {}} />);

  const textArea = getByPlaceholderText("What's Up");

  expect(textArea).toBeInTheDocument();

  const productivityDropDown = getByLabelText("Productivity");
  const moodDropDown = getByLabelText("Mood");
  expect(productivityDropDown).toBeInTheDocument();
  expect(moodDropDown).toBeInTheDocument();
});

test("clears message on Mark add", () => {
  const { getByPlaceholderText, getByText, getByDisplayValue } = render(
    <NewMark adder={() => {}} />
  );
  let textArea = getByPlaceholderText("What's Up");
  const button = getByText("Mark");
  fireEvent.change(textArea, { target: { value: "Good Day" } });
  textArea = getByDisplayValue("Good Day");
  expect(textArea).toBeInTheDocument();

  fireEvent.click(button);
  textArea = getByDisplayValue("");
  expect(textArea).toBeInTheDocument();
});
