import React from "react";
import { render } from "@testing-library/react";
import MarkBox from "./MarkBox";
import marks from "../../samples/marks.sample";

test("renders Mark component", () => {
  const { getByTestId } = render(<MarkBox mark={marks[0]} />);

  const markBoxElement = getByTestId("MarkBox");
  expect(markBoxElement).toBeInTheDocument();
});

test("returns correct time from epoch", () => {
  const { getByText } = render(<MarkBox mark={marks[0]} />);

  const timeElement = getByText("19:14");
  expect(timeElement).toBeInTheDocument();
});
