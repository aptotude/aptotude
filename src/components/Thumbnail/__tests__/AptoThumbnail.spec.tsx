import React from 'react';
import renderer from 'react-test-renderer';
import AptoThumbnail from '../AptoThumbnail';

test('Thumbnail renders', () => {
  const component = renderer.create(
    <AptoThumbnail />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Thumbnail with image renders', () => {
  const component = renderer.create(
    <AptoThumbnail>
        <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" />
    </AptoThumbnail>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
