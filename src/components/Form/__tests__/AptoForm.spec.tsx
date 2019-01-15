import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { AptoForm } from '../AptoForm';

const Form = () => (
  <div>
    <AptoForm.Field required>
      <label>Name</label>
      <AptoForm.Input />
    </AptoForm.Field>
  </div>
);

describe('AptoForm', () => {
  afterEach(cleanup);

  it('makes fields required', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });
});
