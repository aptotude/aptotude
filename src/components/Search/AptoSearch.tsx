import React from 'react';
import './aptoSearch.scss';
import { Search, SearchProps } from 'semantic-ui-react';
import { AptoIcon } from '../Icon';
import { searchIcon } from './SearchIcon';
import { AptoSpinner } from '../Spinner';

interface AptoSearchProps {
  loading: boolean;
  results: any;
  value?: string;
  onResultSelect: (
    e: React.MouseEvent<HTMLDivElement>,
    data: SearchProps
  ) => void;
  onSearchChange: (e: React.MouseEvent<HTMLElement>, data: SearchProps) => void;
}

export class AptoSearch extends React.Component<AptoSearchProps> {
  public render() {
    const {
      loading,
      results,
      value,
      onResultSelect,
      onSearchChange
    } = this.props;
    return (
      <div className="AptoSearch">
        <Search
          loading={loading}
          results={results}
          value={value}
          onResultSelect={onResultSelect}
          onSearchChange={onSearchChange}
          input={{ icon: null }}
        />
        {!loading && <AptoIcon icon={searchIcon} />}
        {loading && <AptoSpinner noOverlay={true} />}
      </div>
    );
  }
}
