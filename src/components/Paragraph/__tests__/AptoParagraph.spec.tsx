import React from 'react';
import { AptoParagraph } from '../AptoParagraph';
import { render, cleanup } from 'react-testing-library';

describe('Paragraph Component', () => {
  afterEach(cleanup);

  it('Paragraph renders', () => {
    const { container } = render(<AptoParagraph />);

    const node = container.querySelector('p.AptoParagraph');
    expect(node!.className).toEqual('AptoParagraph');
  });

  it('Paragraph compact renders', () => {
    const { container } = render(<AptoParagraph compact />);

    const node = container.querySelector('p.AptoParagraph');
    expect(node!.className).toEqual('AptoParagraph AptoParagraph--compact');
  });
});
