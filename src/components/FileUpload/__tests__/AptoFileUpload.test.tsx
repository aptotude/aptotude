import * as React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  wait,
  getByText
} from 'react-testing-library';
import { AptoFileUpload } from '../AptoFileUpload';

afterEach(() => {
  cleanup();
});

const Img = () => {
  return <div>some custom image thingy</div>;
};

class Foo extends React.Component<any> {
  public render() {
    return <div>{this.props.bar}</div>;
  }
}

const mockData = (files: any) => {
  return {
    dataTransfer: {
      files,
      items: files.map((file: any) => ({
        kind: 'file',
        type: file.type,
        getAsFile: () => file
      })),
      types: ['Files']
    }
  };
};

const dispatchEvt = (node: any, type: string, data: any) => {
  const event = new Event(type, { bubbles: true });
  Object.assign(event, data);
  fireEvent(node, event);
};

const flushPromises = (ui: any, container: any) => {
  return new Promise(resolve =>
    setImmediate(() => {
      render(ui, { container });
      resolve(container);
    })
  );
};

describe('AptoFileUpload', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoFileUpload name="superName" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Custom Image Function Component', () => {
    const { container } = render(
      <AptoFileUpload value="foo.jpg" imageComponent={Img} name="superName" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Custom Image Component Class', () => {
    const { container } = render(
      <AptoFileUpload
        value="foo.jpg"
        imageComponent={<Foo bar="foo" />}
        name="superName"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Component with previous image', () => {
    const { container } = render(
      <AptoFileUpload value="http://foo.com/j.jpg" name="superName" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('toggles remove', async () => {
    let hitRemove = false;
    const { container } = render(
      <AptoFileUpload
        onRemoveImage={() => {
          hitRemove = true;
        }}
        value="http://foo.com/j.jpg"
        name="superName"
      />
    );
    const btn = container.querySelector('.dropzone-change');
    if (btn) {
      fireEvent.click(btn);
    }
    await wait(() => {
      const el = container.querySelector('.dropzone');
      expect(el).not.toBeUndefined();
      expect(hitRemove).toBeTruthy();
    });
  });

  it('toggles cancel', async () => {
    let hitCancel = false;
    let old: string | null = null;
    const { container } = render(
      <AptoFileUpload
        onCancel={oldImage => {
          hitCancel = true;
          old = oldImage;
        }}
        value="http://foo.com/j.jpg"
        name="superName"
      />
    );
    const changeBtn = container.querySelector('.dropzone-change');
    if (changeBtn) {
      fireEvent.click(changeBtn);
    }
    await wait(async () => {
      const cancelBtn = container.querySelector('.dropzone-cancel');
      if (cancelBtn) {
        fireEvent.click(cancelBtn);
      }
    });

    await wait(() => {
      const el = container.querySelector('.dropzone-previousImage');
      expect(el).not.toBeUndefined();
      expect(hitCancel).toBeTruthy();
      expect(old).toEqual('http://foo.com/j.jpg');
    });
  });

  it('invoke onDragEnter when dragenter event occurs', async () => {
    const file = new File([JSON.stringify({ ping: true })], 'ping.json', {
      type: 'application/json'
    });
    const data = mockData([file]);
    const onDragEnter = jest.fn();

    const ui = (
      <AptoFileUpload
        onDragEnter={onDragEnter}
        accept="application/json"
        name="superName"
      />
    );

    const { container } = render(ui);
    const dropzone = container.querySelector('div');

    dispatchEvt(dropzone, 'dragenter', data);
    await flushPromises(ui, container);

    expect(onDragEnter).toHaveBeenCalled();
  });

  it('invoke onDrop when file dropped', async () => {
    const file = new File([JSON.stringify({ ping: true })], 'ping.json', {
      type: 'application/json'
    });
    const data = mockData([file]);
    const onDrop = jest.fn();

    const ui = (
      <AptoFileUpload
        onDrop={onDrop}
        accept="application/json"
        name="superName"
      />
    );

    const { container } = render(ui);
    const dropzone = container.querySelector('div');

    dispatchEvt(dropzone, 'drop', data);
    await flushPromises(ui, container);

    expect(onDrop).toHaveBeenCalled();

    await wait(() => {
      expect(getByText(container, 'ping.json')).toBeDefined();
    });
  });
});
