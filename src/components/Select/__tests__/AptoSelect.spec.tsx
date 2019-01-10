import React from "react";
import { render } from "react-testing-library";
import { AptoSelect } from "../AptoSelect";

const options = [
  { key: "Jane", value: "Jane" },
  { key: "Sally", value: "Sally" }
];

describe("AptoSelect", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <AptoSelect placeholder="Select a Person" options={[options]} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
