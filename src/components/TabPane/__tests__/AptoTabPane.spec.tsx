import React from 'react';
import { render } from 'react-testing-library';
import { AptoTabPane } from '../AptoTabPane';

describe('Tab Pane Component', () => {
  it('renders', () => {
    const props = {
      group: 1,
      index: 0,
      active: false
    };
    const {
      container
    } = render(
      <AptoTabPane {...props}>Stuff</AptoTabPane>
    );
    const node = container.querySelector('.AptoTabPane');
    expect(node!.className).toEqual('AptoTabPane');
    expect(node!.getAttribute('id')).toEqual(`AptoTabPane-${props.group}-${props.index}`);
    expect(node!.getAttribute('aria-labelledby')).toEqual(`AptoTabNav-${props.group}-${props.index}`);
    expect(node!.getAttribute('aria-hidden')).toEqual('true');
    expect(node!.getAttribute('role')).toEqual('tabpanel');
    expect(node!.innerHTML).toEqual('');
  });

  it('renders active', () => {
    const props = {
      group: 1,
      index: 0,
      active: true
    };
    const {
      container
    } = render(
      <AptoTabPane {...props}>Stuff</AptoTabPane>
    );
    const node = container.querySelector('.AptoTabPane');
    expect(node!.className).toEqual('AptoTabPane AptoTabPane--active');
    expect(node!.getAttribute('aria-hidden')).toEqual('false');
    expect(node!.innerHTML).toEqual('Stuff');
  });

  it('renders custom className', () => {
    const props = {
      group: 1,
      index: 0,
      active: true,
      className: 'foo'
    };
    const {
      container
    } = render(
      <AptoTabPane {...props} />
    );
    const node = container.querySelector('.AptoTabPane');
    expect(node!.className).toEqual('AptoTabPane AptoTabPane--active foo');
  });
});
