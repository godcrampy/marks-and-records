import React from "react";
import { render } from "@testing-library/react";
import Feed from "./Feed";
import records from "../../samples/records.sample";

test("renders Feed", () => {
  const { getByTestId } = render(<Feed records={records} />);

  const feed = getByTestId("Feed");
  expect(feed).toBeInTheDocument();
});

test("renders Records", () => {
  const { queryAllByTestId } = render(<Feed records={records} />);

  const recordComponents = queryAllByTestId("Record");
  expect(recordComponents.length).toBe(records.length);
});
