import React from 'react';
import { AptoThumbnail } from '../AptoThumbnail';
import { render } from 'react-testing-library';

describe('Thumbnail Component', () => {
  it('Thumbnail renders', () => {
    const { container } = render(<AptoThumbnail />);

    const node = container.querySelector('.AptoThumbnail');
    expect(node!.className).toEqual('AptoThumbnail');
  });

  it('Thumbnail with image renders', () => {
    const { container } = render(
      <AptoThumbnail>
        <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" />
      </AptoThumbnail>
    );

    const node = container.querySelector('.AptoThumbnail > img');
    expect(node).not.toEqual(null);
  });

  it('Custom className renders', () => {
    const { container } = render(<AptoThumbnail className="foo" />);

    const node = container.querySelector('.AptoThumbnail');
    expect(node!.className).toEqual('AptoThumbnail foo');
  });
});
