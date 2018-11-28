import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import AptoTabs from '../AptoTabs';
import AptoTab from '../../Tab/AptoTab';
import { HOME, END, RIGHT_ARROW, LEFT_ARROW } from '../../../utils/keycodes';

describe('Tab Component', () => {
  it('renders', () => {
    const {
      container
    } = render(
      <AptoTabs>
        <AptoTab title="Tab 1">Tab 1 Content</AptoTab>
        <AptoTab title="Tab 2">Tab 2 Content</AptoTab>
      </AptoTabs>
    );

    const node = container.querySelector('.AptoTabGroup');
    const nav = container.querySelector('.AptoTabGroup .AptoTabNav-wrapper .AptoTabNav');
    const panes = container.querySelector('.AptoTabGroup .AptoTabPane-wrapper');

    expect(node!.className).toEqual('AptoTabGroup');

    expect(nav!.className).toEqual('AptoTabNav');
    expect(nav!.getAttribute('role')).toEqual('tablist');
    expect(nav!.children.length).toEqual(2);
    expect(nav!.children[0].className).toEqual('AptoTabNav-item AptoTabNav-item--active');
    expect(nav!.children[1].className).toEqual('AptoTabNav-item');

    expect(panes!.className).toEqual('AptoTabPane-wrapper');
    expect(panes!.children.length).toEqual(2);
    expect(panes!.children[0].className).toEqual('AptoTabPane AptoTabPane--active');
    expect(panes!.children[1].className).toEqual('AptoTabPane');
  });

  it('sets initial active tab', () => {
    const onActive = jest.fn();

    const props = {
      activeIndex: 1
    };

    const {
      container
    } = render(
      <AptoTabs {...props}>
        <AptoTab title="Tab 1">Tab 1 Content</AptoTab>
        <AptoTab title="Tab 2">Tab 2 Content</AptoTab>
      </AptoTabs>
    );

    const nav = container.querySelector('.AptoTabGroup .AptoTabNav-wrapper .AptoTabNav');
    const panes = container.querySelector('.AptoTabGroup .AptoTabPane-wrapper');

    expect(nav!.children[1].className).toEqual('AptoTabNav-item AptoTabNav-item--active');
    expect(nav!.children[0].className).toEqual('AptoTabNav-item');
    expect(panes!.children[1].className).toEqual('AptoTabPane AptoTabPane--active');
    expect(panes!.children[0].className).toEqual('AptoTabPane');
  });

  it('renders custom className', () => {
    const {
      container
    } = render(
      <AptoTabs className="foo">
        <AptoTab title="Tab 1">Tab 1 Content</AptoTab>
        <AptoTab title="Tab 2">Tab 2 Content</AptoTab>
      </AptoTabs>
    );

    const node = container.querySelector('.AptoTabGroup');

    expect(node!.className).toEqual('AptoTabGroup foo');
  });

  it('toggles between tabs', () => {
    const onActive = jest.fn();

    const props = {
      onActive
    };

    const {
      container
    } = render(
      <AptoTabs {...props}>
        <AptoTab title="Tab 1">Tab 1 Content</AptoTab>
        <AptoTab title="Tab 2">Tab 2 Content</AptoTab>
      </AptoTabs>
    );

    const nav = container.querySelector('.AptoTabGroup .AptoTabNav-wrapper .AptoTabNav');
    const panes = container.querySelector('.AptoTabGroup .AptoTabPane-wrapper');

    expect(nav!.children[0].className).toEqual('AptoTabNav-item AptoTabNav-item--active');
    expect(nav!.children[1].className).toEqual('AptoTabNav-item');
    expect(panes!.children[0].className).toEqual('AptoTabPane AptoTabPane--active');
    expect(panes!.children[1].className).toEqual('AptoTabPane');

    fireEvent.click(nav!.children[1]);

    expect(nav!.children[1].className).toEqual('AptoTabNav-item AptoTabNav-item--active');
    expect(nav!.children[0].className).toEqual('AptoTabNav-item');
    expect(panes!.children[1].className).toEqual('AptoTabPane AptoTabPane--active');
    expect(panes!.children[0].className).toEqual('AptoTabPane');

    expect(onActive).toHaveBeenCalledWith(1);

    fireEvent.click(nav!.children[0]);

    expect(nav!.children[0].className).toEqual('AptoTabNav-item AptoTabNav-item--active');
    expect(nav!.children[1].className).toEqual('AptoTabNav-item');
    expect(panes!.children[0].className).toEqual('AptoTabPane AptoTabPane--active');
    expect(panes!.children[1].className).toEqual('AptoTabPane');

    expect(onActive).toHaveBeenCalledWith(0);
  });

  describe('keyboard interaction', () => {
    const onActive = jest.fn();
    const props = {
      onActive
    };
    const {
      container
    } = render(
      <AptoTabs {...props}>
        <AptoTab title="Tab 1">Tab 1 Content</AptoTab>
        <AptoTab title="Tab 2">Tab 2 Content</AptoTab>
      </AptoTabs>
    );
    const nav = container.querySelector('.AptoTabGroup .AptoTabNav-wrapper .AptoTabNav');

    it('home key', () => {
      if (nav) {
        fireEvent.keyDown(nav, {
          key: 'Home',
          keyCode: HOME,
          which: HOME
        });
      }
      expect(onActive).toHaveBeenCalledWith(0);
    });

    it('end key', () => {
      if (nav) {
        fireEvent.keyDown(nav, {
          key: 'End',
          keyCode: END,
          which: END
        });
      }
      expect(onActive).toHaveBeenCalledWith(1);
    });

    it('right arrow', () => {
      if (nav) {
        fireEvent.keyDown(nav, {
          key: 'Home',
          keyCode: HOME,
          which: HOME
        });
        fireEvent.keyDown(nav, {
          key: 'Right Arrow',
          keyCode: RIGHT_ARROW,
          which: RIGHT_ARROW
        });
      }
      expect(onActive).toHaveBeenCalledWith(1);
    });

    it('left arrow', () => {
      if (nav) {
        fireEvent.keyDown(nav, {
          key: 'End',
          keyCode: END,
          which: END
        });
        fireEvent.keyDown(nav, {
          key: 'Left Arrow',
          keyCode: LEFT_ARROW,
          which: LEFT_ARROW
        });
      }
      expect(onActive).toHaveBeenCalledWith(0);
    });
  });
});
