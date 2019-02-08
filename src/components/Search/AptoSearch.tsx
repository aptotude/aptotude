import React from 'react';
import './aptoSearch.scss';
import { Search, SearchProps } from 'semantic-ui-react';
import { AptoIcon } from '../Icon';
import { searchIcon } from './SearchIcon';
import { AptoSpinner } from '../Spinner';

export class AptoSearch extends React.Component<SearchProps> {
  public render() {
    const { loading, ...rest } = this.props;
    return (
      <div className="AptoSearch">
        <Search input={{ icon: null }} {...rest} />
        {!loading && <AptoIcon icon={searchIcon} />}
        {loading && <AptoSpinner noOverlay={true} />}
      </div>
    );
  }
}
