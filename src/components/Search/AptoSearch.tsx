import React from 'react';
import './aptoSearch.scss';
import { Search, SearchProps as AptoSearchProps } from 'semantic-ui-react';
import { AptoIcon } from '../Icon';
import { searchIcon } from './SearchIcon';
import { AptoSpinner } from '../Spinner';

export { SearchProps as AptoSearchProps } from 'semantic-ui-react';

export class AptoSearch extends React.Component<AptoSearchProps> {
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
