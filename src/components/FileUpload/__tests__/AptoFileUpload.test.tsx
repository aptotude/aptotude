import * as React from 'react';
import { render, cleanup, fireEvent, wait } from 'react-testing-library';
import { AptoFileUpload } from '../AptoFileUpload';

afterEach(() => {
  cleanup();
});

describe('AptoFileUpload', () => {
  it('Renders Component', () => {
    const { container } = render(<AptoFileUpload name="superName" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders Component with previous image', () => {
    const { container } = render(
      <AptoFileUpload
        previousPhotoUrl="http://foo.com/j.jpg"
        name="superName"
      />
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
        previousPhotoUrl="http://foo.com/j.jpg"
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
    const { container } = render(
      <AptoFileUpload
        onCancel={() => {
          hitCancel = true;
        }}
        previousPhotoUrl="http://foo.com/j.jpg"
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
    });
  });
});
