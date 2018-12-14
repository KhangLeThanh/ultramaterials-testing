/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: 'inherit',
  },
  button: {
    margin: theme.spacing.unit,
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'center',
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
  homeBanner: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage:
      'linear-gradient(black, black), url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/EvVhCC0deijtsl1b4/videoblocks-binary-computer-code-background-motion-graphic-animation-computer-generated-seamless-loop_r2orby0ng_thumbnail-full01.png)',
    background: {
      repeat: 'no-repeat',
      position: 'center',
      size: ['100%', '100%'],
    },
    backgroundBlendMode: 'saturation',
  },
  redBox: {
    backgroundColor: 'transparent',
    paddingTop: theme.spacing.unit * 12,
    paddingBottom: theme.spacing.unit * 14,
  },
  lightBox: {
    paddingTop: theme.spacing.unit * 12,
    paddingBottom: theme.spacing.unit * 14,
    backgroundColor: 'transparent',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.homeBanner}>
          <div className={classes.buttonBox}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Primary
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Secondary
            </Button>
          </div>
        </div>
        <div className={classes.redBox}>
          <div className={classes.grid}>
            <Grid container spacing={0}>
              <Grid item>
                <div className={classes.paper}>
                  <Typography variant="h4" gutterBottom color="inherit">
                    ARE YOU READY TO GET ULTRAHACKED?
                  </Typography>
                  <Typography paragraph>
                    We believe hackers have the power to change the world – and
                    find solutions to the biggest challenges in our time. But to
                    make this happen, we need to stand together. Our mission is
                    to build a community where the best talent and leading
                    industry partners could meet and collaborate towards future
                    innovations.
                  </Typography>
                  <Typography paragraph>
                    This is why Ultrahack goes beyond one event.
                  </Typography>
                  <Typography paragraph>
                    Innovation platform – Sign up to our platform to submit your
                    hackathon project, find new team members and get feedback.
                    It’s a meeting point for everybody: hackers, mentors and
                    industry partners. Sign up here.
                  </Typography>
                  <Typography paragraph>
                    Hackathon – We organize several hackathons across multiple
                    industries each year where best projects and teams are
                    selected in collaboration with our partners.
                  </Typography>
                  <Typography paragraph>
                    Accelerator – To make sure there is life after Ultrahack we
                    have decided to collaborate with accelerators including
                    Nestholma Accelerator that offers investments to promising
                    Ultrahack teams. Your team can now continue its project with
                    dedicated coaches in can-do spirit.
                  </Typography>
                  <Typography paragraph>
                    Long development runway for projects – Unlike in traditional
                    hackathons where coding starts at the event, we at Ultrahack
                    encourage teams to start working well before the event and
                    to get valuable feedback from our challenge partners along
                    the way. No need to wait until the hackathon weekend, start
                    to work on your project now!
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.lightBox}>
          <div className={classes.grid}>
            <div className={classes.paper}>
              <Typography variant="h4" gutterBottom>
                HACK CHALLENGES FROM LEADING INDUSTRIES
              </Typography>
              <Typography paragraph>
                Leading industries, public sector organizations and NGO’s
                present their challenges for you to hack. Kick off your project
                on our platform during the pre-game period and continue to the
                48-hour hackathon event.
              </Typography>
              <Typography paragraph>
                The pre-game period gives you more time to develop your
                solution, get feedback, recruit new team members and get expert
                mentoring. At the hackathon event the pre-selected teams have 48
                hours to develop their solutions round-by-round and pitch them
                to partner judges and investors.
              </Typography>
              <Typography paragraph>
                Check out challenges and prizes, register to the platform and
                apply to the hackathon of your choice!
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapDispatchToProps);

export default compose(
  withStyles(styles),
  withConnect,
)(HomePage);
