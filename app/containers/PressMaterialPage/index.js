/**
 *
 * PressMaterialPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';

import injectSaga from 'utils/injectSaga';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class PressMaterialPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ultrahack | Press Material</title>
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

PressMaterialPage.propTypes = {
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
const withSaga = injectSaga({ key: 'pressMaterialPage', saga });

export default compose(
  withSaga,
  withConnect,
)(PressMaterialPage);
