import React from 'react';
import './aptoErrorPage.scss';
import { AptoRow } from '../Row';
import { AptoCol } from '../Column';
import classNames from 'classnames';
import { AptoHeader } from '../Header';
import { AptoParagraph } from '../Paragraph';

interface AptoErrorPageProps {
  type?: '500' | '400' | '404' | '403';
  message?: string;
  title?: string;
}

const COMPONENT_PREFIX = 'AptoErrorPage';

export const AptoErrorPage = (props: AptoErrorPageProps) => {
  const { type, message, title } = props;

  const classes = classNames(
    COMPONENT_PREFIX,
    type && `${COMPONENT_PREFIX}--${type}`
  );

  let pageMessage = '';
  let pageTitle = '';

  if (type === '400') {
    pageTitle = 'Bad Request';
    pageMessage = 'Sorry, there was something ';
  } else if (type === '404') {
    pageTitle = 'Page Not Found';
    pageMessage = 'Sorry, but the page you were trying to view does not exist.';
  } else if (type === '403') {
    pageTitle = 'Unauthorized';
    pageMessage = 'Sorry, you do not have permission to view this page.';
  } else if (type === '500') {
    pageTitle = 'Internal Server Error';
    pageMessage = 'An internal server error occurred.';
  } else {
    pageTitle = 'Server Error';
  }

  if (message) {
    pageMessage = message;
  }

  if (title) {
    pageTitle = title;
  }

  return (
    <AptoRow align="center" className={classes}>
      <AptoCol>
        <AptoHeader type="2" transform={false}>
          {pageTitle}
        </AptoHeader>
        {pageMessage && <AptoParagraph>{pageMessage}</AptoParagraph>}
      </AptoCol>
    </AptoRow>
  );
};
