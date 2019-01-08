/**
 *
 * VolunteeringPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import { Typography, withStyles } from '@material-ui/core';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

const styles = theme => ({
  root: {
    width: 'inherit',
    paddingTop: theme.spacing.unit * 12,
    paddingBottom: theme.spacing.unit * 14,
  },
  grid: {
    maxWidth: 900,
    margin: '0 auto',
  },
  paper: {
    padding: theme.spacing.unit * 4,
    textAlign: 'left',
    color: theme.palette.text.primary,
  },
  link: {
    textDecoration: 'none',
    color: '#da0035',
    padding: '2px 5px',
    '&:hover': {
      backgroundColor: '#da0035',
      color: 'black',
    },
  },
  box: {
    backgroundColor: 'transparent',
  },
});
/* eslint-disable react/prefer-stateless-function */
export class VolunteeringPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Helmet>
          <title>Volunteering</title>
          <meta name="description" content="Description of VolunteeringPage" />
        </Helmet>
        <div className={classes.root}>
          <div className={classes.box}>
            <div className={classes.grid}>
              <div className={classes.paper}>
                <Typography variant="h4" gutterBottom>
                  Apply for volunteering!
                </Typography>
                <Typography paragraph>
                  Apply for volunteering! Would you like to take part in the
                  production of Ultrahack events? Eager to apply and acquire
                  your skills, meet like-minded peers and new friends, mingle
                  with startup teams and developers?
                  <a
                    className={classes.link}
                    href="https://ultrahack.typeform.com/to/uIIQyG"
                  >
                    Apply to volunteer at Ultrahack!
                  </a>
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.grid}>
              <div className={classes.paper}>
                <Typography variant="h4" gutterBottom>
                  Reasons to Volunteer
                </Typography>
                <Typography paragraph>[ Add reasons here ]</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

VolunteeringPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
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
const withSaga = injectSaga({ key: 'volunteeringPage', saga });

export default compose(
  withStyles(styles),
  withSaga,
  withConnect,
)(VolunteeringPage);
