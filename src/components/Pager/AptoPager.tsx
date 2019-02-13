import React from 'react';
import classNames from 'classnames';
import { StandardTypes } from '../../utils/standardTypes';
import { AptoButton } from '../Button';
import './aptoPager.scss';

interface AptoPagerProps extends StandardTypes {
  current: number;
  total: number;
  onClick?: (page: number, event: React.MouseEvent) => void;
  linkCount?: number;
  pages?: boolean;
  nextPrev?: boolean;
}

const COMPONENT_PREFIX = 'AptoPager';

const getPagingRange = (
  current: number,
  { min = 1, total = 20, length = 5 } = {}
) => {
  if (length > total) {
    length = total;
  }
  let start = current - Math.floor(length / 2);
  start = Math.max(start, min);
  start = Math.min(start, min + total - length);
  return Array.from({ length }, (el, i) => start + i);
};

export class AptoPager extends React.Component<AptoPagerProps> {
  public static defaultProps = {
    pages: true,
    nextPrev: true,
    linkCount: 5
  };
  public clickHandler = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(Number(e.currentTarget.dataset.page), e);
    }
  };

  public render() {
    const {
      pages,
      nextPrev,
      total,
      current,
      linkCount,
      className
    } = this.props;
    const classes = classNames(COMPONENT_PREFIX, className);
    const links: number[] = getPagingRange(current, {
      total,
      length: linkCount
    });
    const prev = current > 1 ? current - 1 : null;
    const next = current < total ? current + 1 : null;

    return (
      <div className={classes}>
        <ul>
          {prev && nextPrev && (
            <li className="AptoPager--item AptoPager--prev">
              <AptoButton
                kind="link"
                type="button"
                onClick={this.clickHandler}
                data-page={prev}
              >
                &lt; Previous
              </AptoButton>
            </li>
          )}
          {pages &&
            links.map(l => (
              <li className="AptoPager--item" key={`${l}`}>
                {(l === current && (
                  <AptoButton
                    kind="link"
                    type="button"
                    className="activePage"
                    onClick={this.clickHandler}
                    data-page={l}
                  >
                    {l}
                  </AptoButton>
                )) || (
                  <AptoButton
                    kind="link"
                    type="button"
                    onClick={this.clickHandler}
                    data-page={l}
                  >
                    {l}
                  </AptoButton>
                )}
              </li>
            ))}
          {next && nextPrev && (
            <li className="AptoPager--item AptoPager--next">
              <AptoButton
                kind="link"
                type="button"
                onClick={this.clickHandler}
                data-page={next}
              >
                Next &gt;
              </AptoButton>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
