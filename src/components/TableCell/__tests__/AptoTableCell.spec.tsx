import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoTableCell } from '../AptoTableCell';

afterEach(() => {
  cleanup();
});

describe('AptoTableCell', () => {
  it('Renders Component', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <AptoTableCell>hi</AptoTableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders type th', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <AptoTableCell type="th">hi</AptoTableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders type td', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <AptoTableCell type="td">hi</AptoTableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders extra classes', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <AptoTableCell className="foo">hi</AptoTableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders scope col', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <AptoTableCell scope="col">hi</AptoTableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders scope row', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <AptoTableCell scope="row">hi</AptoTableCell>
          </tr>
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
            <tr>
              <AptoTableCell highlight="danger">hi</AptoTableCell>
            </tr>
          </tbody>
        </table>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('shows primary', () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <AptoTableCell highlight="primary">hi</AptoTableCell>
            </tr>
          </tbody>
        </table>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('shows warning', () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <AptoTableCell highlight="warning">hi</AptoTableCell>
            </tr>
          </tbody>
        </table>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('shows success', () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <AptoTableCell highlight="success">hi</AptoTableCell>
            </tr>
          </tbody>
        </table>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
