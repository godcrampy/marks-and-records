import React from "react";
import { render } from "@testing-library/react";
import Record from "./Record";
import records from "../../samples/records.sample";

test("renders Record", () => {
  const { getByTestId } = render(<Record record={records[0]} />);

  const recordComponent = getByTestId("Record");
  expect(recordComponent).toBeInTheDocument();
});

test("renders MarkBox", () => {
  const { queryAllByTestId } = render(<Record record={records[0]} />);

  const markComponents = queryAllByTestId("MarkBox");
  expect(markComponents.length).toBe(records[0].marks.length);
});
