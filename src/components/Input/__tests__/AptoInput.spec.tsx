import React from "react";
import { render } from "react-testing-library";
import { AptoInput } from "../AptoInput";

describe("AptoInput", () => {
  it("renders", () => {
    const input = render(<AptoInput />);
    expect(input.baseElement).toMatchSnapshot();
  });
});
