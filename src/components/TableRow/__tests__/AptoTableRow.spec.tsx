import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoTableRow } from '../AptoTableRow';

afterEach(() => {
  cleanup();
});

describe('AptoTableRow', () => {
  it('Renders Component', () => {
    const { container } = render(
      <table>
        <tbody>
          <AptoTableRow>
            <td>hi</td>
          </AptoTableRow>
        </tbody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders extra class names', () => {
    const { container } = render(
      <table>
        <tbody>
          <AptoTableRow className="foo">
            <td>hi</td>
          </AptoTableRow>
        </tbody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('highlight', () => {
    it('shows danger', () => {
      const { container } = render(
        <table>
          <tbody>
            <AptoTableRow highlight="danger">
              <td>hi</td>
            </AptoTableRow>
          </tbody>
        </table>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('shows primary', () => {
      const { container } = render(
        <table>
          <tbody>
            <AptoTableRow highlight="primary">
              <td>hi</td>
            </AptoTableRow>
          </tbody>
        </table>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('shows warning', () => {
      const { container } = render(
        <table>
          <tbody>
            <AptoTableRow highlight="warning">
              <td>hi</td>
            </AptoTableRow>
          </tbody>
        </table>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('shows success', () => {
      const { container } = render(
        <table>
          <tbody>
            <AptoTableRow highlight="success">
              <td>hi</td>
            </AptoTableRow>
          </tbody>
        </table>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
