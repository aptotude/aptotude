import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoTableBody } from '../AptoTableBody';

afterEach(() => {
  cleanup();
});

describe('AptoTableBody', () => {
  it('Renders Component', () => {
    const { container } = render(
      <table>
        <AptoTableBody>
          <tr>
            <td>hi</td>
          </tr>
        </AptoTableBody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders extra classes', () => {
    const { container } = render(
      <table>
        <AptoTableBody className="foo">
          <tr>
            <td>hi</td>
          </tr>
        </AptoTableBody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
