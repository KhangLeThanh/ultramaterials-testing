/**
 *
 * PrivacyPolicyPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class PrivacyPolicyPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ultrahack | Privacy Policy</title>
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

PrivacyPolicyPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'privacyPolicyPage', saga });

export default compose(
  withSaga,
  withConnect,
)(PrivacyPolicyPage);
