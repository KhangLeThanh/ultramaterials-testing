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
// import Quote from 'components/Quote';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Typography, Paper, withStyles, Grid } from '@material-ui/core';

import makeSelectParticipantPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ParticipantPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>Participate</title>
          <meta name="description" content="Description of ParticipantPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />

        {messages.quotes.map(quote => (
          <div>
            <Typography paragraph>{quote.text}</Typography>
            <Typography paragraph>{quote.source}</Typography>
            <br />
          </div>
        ))}

        <div className={classes.root}>
          <Grid container spacing={24}>
            {messages.cards.map(card => (
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <Typography variant="h4">{card.header}</Typography>
                  <Typography paragraph>{card.text}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

ParticipantPage.propTypes = {
  classes: PropTypes.object.isRequired,
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
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(ParticipantPage);
