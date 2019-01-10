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
    maxWidth: 1000,
    margin: '0 auto',
    paddingTop: theme.spacing.unit * 12,
    paddingBottom: theme.spacing.unit * 14,
  },
  cards: {
    flexGrow: 1,
    margin: '0 50px',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.primary.main,
    background: theme.palette.primary.dark,
    minHeight: 300,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ParticipantPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>Participate</title>
          <meta name="description" content="Description of ParticipantPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />

        <Typography variant="h3" gutterBottom>
          What our community says:
        </Typography>
        {messages.quotes.map(quote => (
          <div>
            <Typography paragraph>{quote.text}</Typography>
            <Typography paragraph>{quote.source}</Typography>
            <br />
          </div>
        ))}
        <Typography variant="h3" gutterBottom>
          Reasons to become an Ultrahacker
        </Typography>
        <div className={classes.cards}>
          <Grid container spacing={24}>
            {messages.cards.map(card => (
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h4" gutterBottom>
                    {card.header}
                  </Typography>
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
