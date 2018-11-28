import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import AptoTab from '../AptoTab';

describe('Tab Component', () => {
  it('renders', () => {
    const props = {
      tabGroupId: 1,
      tabIndex: 0,
      active: false,
      title: 'Tab'
    };
    const {
      container
    } = render(
      <AptoTab {...props} />
    );
    const node = container.querySelector('button.AptoTabNav-item');
    expect(node!.className).toEqual('AptoTabNav-item');
    expect(node!.getAttribute('id')).toEqual(`AptoTabNav-${props.tabGroupId}-${props.tabIndex}`);
    expect(node!.getAttribute('aria-controls')).toEqual(`AptoTabPane-${props.tabGroupId}-${props.tabIndex}`);
    expect(node!.getAttribute('aria-selected')).toEqual('false');
    expect(node!.getAttribute('role')).toEqual('tab');
    expect(node!.getAttribute('tabIndex')).toEqual('-1');
    expect(node!.innerHTML).toEqual('Tab');
  });

  it('renders active', () => {
    const props = {
      active: true
    };
    const {
      container
    } = render(
      <AptoTab {...props} />
    );
    const node = container.querySelector('button.AptoTabNav-item');
    expect(node!.className).toEqual('AptoTabNav-item AptoTabNav-item--active');
    expect(node!.getAttribute('aria-selected')).toEqual('true');
    expect(node!.getAttribute('tabIndex')).toEqual('0');
  });

  it('renders custom className', () => {
    const props = {
      className: 'foo'
    };
    const {
      container
    } = render(
      <AptoTab {...props} />
    );
    const node = container.querySelector('button.AptoTabNav-item');
    expect(node!.className).toEqual('AptoTabNav-item foo');
  });

  it('renders custom html title', () => {
    const props = {
      title: (
        <em>Some Title</em>
      )
    };
    const {
      container
    } = render(
      <AptoTab {...props} />
    );
    const node = container.querySelector('button.AptoTabNav-item');
    expect(node!.innerHTML).toEqual('<em>Some Title</em>');
  });

  it('fires activate on click', () => {
    const onActivate = jest.fn();
    const props = {
      onActivate
    };
    const {
      container
    } = render(
      <AptoTab {...props} />
    );
    const node = container.querySelector('button.AptoTabNav-item');
    if (node) {
      fireEvent.click(node);
    }
    expect(onActivate).toBeCalled();
  });
});
