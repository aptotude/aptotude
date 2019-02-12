import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoForm } from '../Form';
import { SemanticUIStyle } from '../SemanticUIStyle';
import { AptoSearch } from './AptoSearch';
import { SearchProps } from 'semantic-ui-react';
import * as faker from 'faker';

const getData = () => {
  const data: any = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      title: faker.company.companyName(),
      date: faker.date.recent()
    });
  }
  return data;
};

class SearchComponentExample extends React.Component<
  any,
  {
    isLoading: boolean;
    results: any;
    value?: string;
  }
> {
  public state = {
    isLoading: false,
    results: [],
    value: ''
  };

  public handleResultSelect = (e: React.MouseEvent, data: SearchProps) => {
    this.setState({ value: data.result.title });
  };

  public handleSearchChange = (e: React.MouseEvent, data: SearchProps) => {
    this.setState({ isLoading: true, value: data.value });
    setTimeout(() => {
      if (this.state.value.length < 1) {
        return this.setState({
          isLoading: false,
          results: []
        });
      }
      this.setState({
        isLoading: false,
        results: getData()
      });
    }, 1000);
  };

  public render() {
    const { isLoading, value, results } = this.state;
    return (
      <AptoSearch
        loading={isLoading}
        results={results}
        value={value}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
      />
    );
  }
}

storiesOf('Search', module)
  .add('Default', () => {
    return (
      <React.Fragment>
        <SemanticUIStyle />
        <AptoForm>
          <AptoForm.Field>
            <label>Search Field</label>
            <SearchComponentExample />
          </AptoForm.Field>
        </AptoForm>
        <br />
        <br />
        This is a Semantic-UI component. You can see more examples{' '}
        <a href="https://react.semantic-ui.com/elements/input/">here</a>
      </React.Fragment>
    );
  })
;
