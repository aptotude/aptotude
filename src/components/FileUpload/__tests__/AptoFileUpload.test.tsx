import * as React from 'react';
import { render, cleanup, fireEvent, wait } from 'react-testing-library';
import { AptoFileUpload } from '../AptoFileUpload';

afterEach(() => {
  cleanup();
});

const Img = () => {
  return <div>some custom image thingy</div>;
};

describe('AptoFileUpload', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoFileUpload name="superName" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Custom Image Component', () => {
    const { container } = render(
      <AptoFileUpload value="foo.jpg" imageComponent={Img} name="superName" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Component with previous image', () => {
    const { container } = render(
      <AptoFileUpload value="http://foo.com/j.jpg" name="superName" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('toggles change', async () => {
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
});
