import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import { AptoInput } from "../AptoInput";

describe("AptoInput", () => {
  afterEach(cleanup);

  it("matches snapshot", () => {
    const { asFragment } = render(<AptoInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("can error", () => {
    const { asFragment } = render(<AptoInput error />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onChange", () => {
    const onChangeMock = jest.fn();
    const placeholderText = "Full Name";
    const { getByPlaceholderText } = render(
      <AptoInput onChange={onChangeMock} placeholder={placeholderText} />
    );
    const input = getByPlaceholderText(placeholderText);
    const newText = "Jane Doe";
    fireEvent.change(input, { target: { value: newText } });

    expect(onChangeMock.mock.calls[0][1].value).toBe(newText);
  });
});
