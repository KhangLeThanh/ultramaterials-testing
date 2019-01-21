/**
 *
 * ParticipantPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectParticipantPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ParticipantPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ultrahack | Participate</title>
          <meta name="description" content="Description of ParticipantPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ParticipantPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  participantPage: makeSelectParticipantPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'participantPage', reducer });
const withSaga = injectSaga({ key: 'participantPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ParticipantPage);
