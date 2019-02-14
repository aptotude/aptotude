import * as React from 'react';
import { render, cleanup, fireEvent, getByText } from 'react-testing-library';
import { AptoListItem } from '../AptoListItem';
import { person } from '@apto/icons';

afterEach(() => {
  cleanup();
});

describe('AptoListItem', () => {
  it('Renders', () => {
    const { container } = render(<AptoListItem>hi</AptoListItem>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders link', () => {
    const { container } = render(<AptoListItem link>hi</AptoListItem>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders empty', () => {
    const { container } = render(
      <AptoListItem empty>nothing found</AptoListItem>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders active', () => {
    const { container } = render(<AptoListItem active>active</AptoListItem>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders extra class', () => {
    const { container } = render(
      <AptoListItem className="fooo">extra classes</AptoListItem>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('clicks', () => {
    let called = false;
    const { container } = render(
      <AptoListItem
        onClick={() => {
          called = true;
        }}
      >
        clicky
      </AptoListItem>
    );
    fireEvent.click(getByText(container, 'clicky'));
    expect(called).toBeTruthy();
  });

  it('Renders icon', () => {
    const { container } = render(<AptoListItem icon={person}>hi</AptoListItem>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders icon options', () => {
    const { container } = render(
      <AptoListItem
        iconSize="5"
        iconColor="blue"
        iconStatus="warning"
        icon={person}
      >
        hi
      </AptoListItem>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders circle icon options', () => {
    const { container } = render(
      <AptoListItem
        iconSize="5"
        iconCircleColor="blue"
        iconCircle
        iconStatus="warning"
        icon={person}
      >
        hi
      </AptoListItem>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
