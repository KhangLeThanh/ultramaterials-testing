/**
 *
 * PartnerPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Typography } from '@material-ui/core';
import makeSelectPartnerPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const styles = {
  stats: {
    display: 'flex',
    flexDirection: 'row',
  },
  statsRow: {
    display: 'grid',
    gridTemplate: 'auto / 80px 100px',
  },
};

/* eslint-disable react/prefer-stateless-function */
export class PartnerPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Helmet>
          <title>Ultrahack | Partners</title>
          <meta name="description" content="Description of PartnerPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <div className={classes.stats} />
        <div className={classes.statsRow}>
          <Typography variant="h5">{messages.stats.community}</Typography>
          <Typography>community members</Typography>
        </div>
        <div className={classes.statsRow}>
          <Typography variant="h5">{messages.stats.participants}</Typography>
          <Typography>selected participants</Typography>
        </div>
        <div className={classes.statsRow}>
          <Typography variant="h5">{messages.stats.challenges}</Typography>
          <Typography>challenges</Typography>
        </div>
        <div className={classes.statsRow}>
          <Typography variant="h5">{messages.stats.solutions}</Typography>
          <Typography>solutions</Typography>
        </div>
        <div className={classes.statsRow}>
          <Typography variant="h5">{messages.stats.partners}</Typography>
          <Typography>industry partners</Typography>
        </div>
        <div className={classes.statsRow}>
          <Typography variant="h5">{messages.stats.mentors}</Typography>
          <Typography>mentors</Typography>
        </div>
        <div className={classes.statsRow}>
          {' '}
          <Typography variant="h5">{messages.stats.volunteers}</Typography>
          <Typography>volunteers</Typography>
        </div>
        <div className={classes.statsRow}>
          <Typography variant="h5">{messages.stats.organizers}</Typography>
          <Typography>organizers</Typography>
        </div>
      </div>
    );
  }
}

PartnerPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  partnerPage: makeSelectPartnerPage(),
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

const withReducer = injectReducer({ key: 'partnerPage', reducer });
const withSaga = injectSaga({ key: 'partnerPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(PartnerPage);
