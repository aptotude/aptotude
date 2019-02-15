import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoTable } from '../AptoTable';

afterEach(() => {
  cleanup();
});

describe('AptoTable', () => {
  it('Renders Component', () => {
    const { container } = render(
      <AptoTable>
        <tbody>
          <tr>
            <td>hi</td>
          </tr>
        </tbody>
      </AptoTable>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders extra classes', () => {
    const { container } = render(
      <AptoTable className="foo">
        <tbody>
          <tr>
            <td>hi</td>
          </tr>
        </tbody>
      </AptoTable>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders striped', () => {
    const { container } = render(
      <AptoTable striped>
        <tbody>
          <tr>
            <td>hi</td>
          </tr>
        </tbody>
      </AptoTable>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders bordered', () => {
    const { container } = render(
      <AptoTable bordered>
        <tbody>
          <tr>
            <td>hi</td>
          </tr>
        </tbody>
      </AptoTable>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders borderless', () => {
    const { container } = render(
      <AptoTable borderless>
        <tbody>
          <tr>
            <td>hi</td>
          </tr>
        </tbody>
      </AptoTable>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders small', () => {
    const { container } = render(
      <AptoTable small>
        <tbody>
          <tr>
            <td>hi</td>
          </tr>
        </tbody>
      </AptoTable>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders hover', () => {
    const { container } = render(
      <AptoTable hover>
        <tbody>
          <tr>
            <td>hi</td>
          </tr>
        </tbody>
      </AptoTable>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders responsive', () => {
    const { container } = render(
      <AptoTable responsive>
        <tbody>
          <tr>
            <td>hi</td>
          </tr>
        </tbody>
      </AptoTable>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
