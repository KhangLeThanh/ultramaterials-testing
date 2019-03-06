/**
 *
 * ParticipantPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Quote from 'components/Quote';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Link } from 'react-router-dom';
import { Typography, Paper, withStyles, Button } from '@material-ui/core';

import makeSelectParticipantPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const styles = theme => ({
  root: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  box: {
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 6,
    margin: theme.spacing.unit,
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
    maxWidth: 300,
    margin: 10,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.contrastText,
    padding: '2px 5px',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  listSection: {
    paddingTop: theme.spacing.unit * 8,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0 auto',
  },
  button: {
    textAlign: 'center',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ParticipantPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>Ultrahack | Participate</title>
          <meta name="description" content="Description of ParticipantPage" />
        </Helmet>
        <div className={classes.box}>
          <Typography variant="h4" gutterBottom>
            HACK CHALLENGES FROM LEADING INDUSTRIES
          </Typography>
          {messages.paragraphs.map(text => (
            <Typography paragraph>{text}</Typography>
          ))}

          <div className={classes.button}>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/challenges"
            >
              Go to challenges
            </Button>
          </div>
        </div>

        <div className={classes.box}>
          <Typography variant="h4" gutterBottom>
            Reasons to become an Ultrahacker
          </Typography>
          <div className={classes.listSection}>
            <div className={classes.list}>
              {messages.cards.map(card => (
                <Paper className={classes.paper}>
                  <Typography variant="h4" gutterBottom>
                    {card.header}
                  </Typography>
                  <Typography paragraph>{card.text}</Typography>
                </Paper>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.box}>
          <Typography variant="h4" gutterBottom>
            What our community says:
          </Typography>
          {messages.quotes.map(quote => (
            <div>
              <Quote author={quote.source} text={quote.text} />
            </div>
          ))}
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
