import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { person } from '@apto/icons';
import { AptoIcon } from '../AptoIcon';

afterEach(() => {
  cleanup();
});

describe('AptoIcon', () => {
  it('Renders', () => {
    const { container } = render(<AptoIcon icon={person} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('color', () => {
    it('renders white', () => {
      const { container } = render(<AptoIcon color="white" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders blue', () => {
      const { container } = render(<AptoIcon color="blue" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders orange', () => {
      const { container } = render(<AptoIcon color="orange" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders gray', () => {
      const { container } = render(<AptoIcon color="gray" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders lightGray', () => {
      const { container } = render(
        <AptoIcon color="lightGray" icon={person} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('circle color', () => {
    it('renders white', () => {
      const { container } = render(
        <AptoIcon circleColor="white" icon={person} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders blue', () => {
      const { container } = render(
        <AptoIcon circleColor="blue" icon={person} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders orange', () => {
      const { container } = render(
        <AptoIcon circleColor="orange" icon={person} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders gray', () => {
      const { container } = render(
        <AptoIcon circleColor="gray" icon={person} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
    it('renders lightGray', () => {
      const { container } = render(
        <AptoIcon circleColor="lightGray" icon={person} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('status', () => {
    it('warning', () => {
      const { container } = render(<AptoIcon status="warning" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('danger', () => {
      const { container } = render(<AptoIcon status="danger" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('size', () => {
    it('1', () => {
      const { container } = render(<AptoIcon size="1" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });
    it('2', () => {
      const { container } = render(<AptoIcon size="2" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });
    it('3', () => {
      const { container } = render(<AptoIcon size="3" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });
    it('4', () => {
      const { container } = render(<AptoIcon size="4" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });
    it('5', () => {
      const { container } = render(<AptoIcon size="5" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });
    it('6', () => {
      const { container } = render(<AptoIcon size="6" icon={person} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('renders circle', () => {
    const { container } = render(<AptoIcon circle icon={person} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders inline', () => {
    const { container } = render(<AptoIcon inline icon={person} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders extra class', () => {
    const { container } = render(<AptoIcon className="foooo" icon={person} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
