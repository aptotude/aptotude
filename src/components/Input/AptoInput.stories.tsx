import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoInput } from './AptoInput';

interface State {
  name: string;
  phone: string;
  multiline: string;
  required: string;
  error: string;
  disabled: string;
}

class InputStories extends React.Component<{}, State> {
  constructor(props = {}) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      multiline: '',
      required: '',
      error: '',
      disabled: ''
    };
  }

  public handleChange = (name: string, value: any) => {
    this.setState({ ...this.state, [name]: value });
  };

  public render() {
    return (
      <div>
        <AptoInput
          value={this.state.name}
          onChange={this.handleChange.bind(this, 'name')}
          label="Field Label"
          placeholder="placeholder"
        />
        <AptoInput
          value={this.state.required}
          onChange={this.handleChange.bind(this, 'required')}
          required
          label="Required Field"
        />
        <AptoInput
          value={this.state.disabled}
          onChange={this.handleChange.bind(this, 'disabled')}
          disabled
          label="Disabled Field"
        />
        <AptoInput
          value={this.state.error}
          onChange={this.handleChange.bind(this, 'error')}
          error="Broken because reasons"
          label="Error Field"
        />
        <AptoInput
          value={this.state.multiline}
          onChange={this.handleChange.bind(this, 'multiline')}
          multiline={true}
          maxLength={40}
          label="Multiline Field"
        />
      </div>
    );
  }
}

storiesOf('Input', module).add('Default', () => <InputStories />);
