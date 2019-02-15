import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoTableHead } from '../AptoTableHead';

afterEach(() => {
  cleanup();
});

describe('AptoTableHead', () => {
  it('Renders Component', () => {
    const { container } = render(
      <table>
        <AptoTableHead>
          <tr>
            <th>heading</th>
          </tr>
        </AptoTableHead>
        <tbody>
          <tr>
            <td>hi</td>
          </tr>
        </tbody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders extra class names', () => {
    const { container } = render(
      <table>
        <AptoTableHead className="foo">
          <tr>
            <th>heading</th>
          </tr>
        </AptoTableHead>
        <tbody>
          <tr>
            <td>hi</td>
          </tr>
        </tbody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
