import React from "react";
import { render } from "react-testing-library";
import { AptoForm } from "../AptoForm";

const Form = () => (
  <div>
    <AptoForm.Field required>
      <label>Name</label>
      <AptoForm.Input />
    </AptoForm.Field>
  </div>
);

describe("AptoForm", () => {
  it("makes fields required", () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });
});
