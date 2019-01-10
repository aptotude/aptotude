import React from "react";
import { render, fireEvent } from "react-testing-library";
import { AptoTextArea } from "../AptoTextArea";

describe("AptoTextArea", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<AptoTextArea />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onChange", () => {
    const onChangeMock = jest.fn();
    const placeholderText = "Full Name";
    const { getByPlaceholderText } = render(
      <AptoTextArea onChange={onChangeMock} placeholder={placeholderText} />
    );
    const input = getByPlaceholderText(placeholderText);
    const newText = "Jane Doe";
    fireEvent.change(input, { target: { value: newText } });

    expect(onChangeMock.mock.calls[0][1].value).toBe(newText);
  });
});
