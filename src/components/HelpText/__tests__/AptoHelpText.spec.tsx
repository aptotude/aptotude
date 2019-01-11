import React from 'react';
import { render } from 'react-testing-library';
import { AptoHelpText } from '../AptoHelpText';

describe('Help Text Component', () => {
  it('renders', () => {
    const { container } = render(<AptoHelpText>help me</AptoHelpText>);

    const node = container.querySelector('.AptoHelpText');
    expect(node!.className).toEqual('AptoHelpText');
    expect(node!.innerHTML).toEqual('help me');
  });

  it('renders error', () => {
    const { container } = render(<AptoHelpText error>help me</AptoHelpText>);

    const node = container.querySelector('.AptoHelpText');
    expect(node!.className).toEqual('AptoHelpText AptoHelpText--error');
  });

  it('renders inline', () => {
    const { container } = render(<AptoHelpText inline>help me</AptoHelpText>);

    const node = container.querySelector('.AptoHelpText');
    expect(node!.className).toEqual('AptoHelpText AptoHelpText--inline');
  });

  it('renders custom className', () => {
    const { container } = render(
      <AptoHelpText className="foo">help me</AptoHelpText>
    );

    const node = container.querySelector('.AptoHelpText');
    expect(node!.className).toEqual('AptoHelpText foo');
  });
});
