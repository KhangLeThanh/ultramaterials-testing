/**
 *
 * EventPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, Button } from '@material-ui/core';
import makeSelectEventPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import './styles.css';

const styles = theme => ({
  root: {
    width: 'inherit',
  },
  grid: {
    maxWidth: 1280,
    margin: '0 auto',
  },
  gridContainer: {
    padding: '0px 8px',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  box: {
    paddingTop: 0,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  button: {
    textAlign: 'center',
  },
  card: {
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  cardGrid: {
    margin: '0',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '50%',
  },
});
/* eslint-disable react/prefer-stateless-function */
export class EventPage extends React.Component {
  state = {
    info: {
      starts: '15.12.2018.',
      deadline: '13.12.2018',
      location: '91springboard Sector 1 Noida',
      prize: 'price info',
    },
    second_image:
      'https://ultrahack.org/images/challenges/uh2019s2-publicservices.jpg',
    header: 'https://ultrahack.org/images/challenges/open.jpeg',
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="banner-image">
          <div className={classes.grid}>
            <div className="wrapper-content-banner">
              <Typography variant="h2">HACK DELHI</Typography>
              <Typography variant="h3">
                <i className="far fa-calendar-alt" /> {this.state.info.starts}
              </Typography>
              <Typography variant="h3">
                <i className="fas fa-map-marker-alt" />{' '}
                {this.state.info.location}
              </Typography>
              <div className={classes.button}>
                <Button
                  className="button-event"
                  variant="contained"
                  color="secondary"
                  to="/sign-in"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-detail-event">
          <Grid container className={classes.cardGrid}>
            <Grid item sm={12}>
              <Hidden mdUp>
                <img
                  className="challenge-banner"
                  alt="Challenge header"
                  src={this.state.second_image}
                />
              </Hidden>
            </Grid>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
                <Hidden smDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://ultrahack.org/images/challenges/uh2019s2-publicservices.jpg" // eslint-disable-line max-len
                    title="Image title"
                  />
                </Hidden>
                <div className={classes.cardDetails}>
                  <CardContent className="info-event">
                    <Typography component="h1" variant="h1">
                      Info
                    </Typography>
                    <Typography component="p" variant="body2">
                      The event is HACK DELHI{' '}
                    </Typography>
                    <Typography component="p" variant="body2">
                      Deadline for you to join in the event is 13.12.2018. Do
                      not miss it
                    </Typography>
                    <Typography component="p" variant="body2">
                      {' '}
                      The event will be happen on 15.12.2018.
                    </Typography>
                    <Typography component="p" variant="body2">
                      {' '}
                      The event will be take place at 91 Spring Board, Noida
                      Sector 1 , India. Address - C2, Sector 1, Block C, Sector
                      1, Noida, Delhi{' '}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className="wrapper-detail-event">
          <Grid container className={classes.cardGrid}>
            <Grid item sm={12}>
              <Hidden mdUp>
                <img
                  className="challenge-banner"
                  alt="Challenge header"
                  src={this.state.header}
                />
              </Hidden>
            </Grid>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent className="left-text-event info-event">
                    <Typography component="h1" variant="h1">
                      Content
                    </Typography>
                    <Typography component="p" variant="body2">
                      HackDelhi is a hackathon organized in collaboration with
                      Ultrahack for hackers who have proved themselves in India
                      and looking to go international and beyond.
                    </Typography>
                    <Typography component="p" variant="body2">
                      This hackathon aims at bringing top 200+ hackers on one
                      stage and innovating new ideas for the challenges
                      provided. We are proud to present relevant global
                      challenges for your teams to hack, where winner(s) will
                      also get a chance to participate in Ultrahack Sprint I in
                      Finland, on May 24-26 2019, in Espoo, Finland.
                    </Typography>
                    <Typography component="p" variant="body2">
                      It’s time to get your team together and apply! Deadline
                      for applications: March 29, 2019. Stay tuned for more
                      updates on challenges and resources.
                    </Typography>
                  </CardContent>
                </div>
                <Hidden smDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://ultrahack.org/images/challenges/open.jpeg" // eslint-disable-line max-len
                    title="Image title"
                  />
                </Hidden>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className={classes.grid}>
          <div className="wrapper-faq-event">
            <Typography variant="h3" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Grid container spacing={16} className={classes.cardGrid}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <Typography
                    component="h5"
                    className="title-challenge"
                    variant="h4"
                  >
                    What is Hackathon
                  </Typography>
                  <hr />
                  <Typography component="p" variant="body2">
                    A hackathon (also known as a hack day, hackfest or codefest)
                    is a design sprint-like event in which computer programmers
                    and others involved in software development, including
                    graphic designers, interface designers, project managers,
                    and others, often including domain experts, collaborate
                    intensively on software projects.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <Typography
                    component="h5"
                    className="title-challenge"
                    variant="h4"
                  >
                    What is Hackathon
                  </Typography>
                  <hr />
                  <Typography component="p" variant="body2">
                    A hackathon (also known as a hack day, hackfest or codefest)
                    is a design sprint-like event in which computer programmers
                    and others involved in software development, including
                    graphic designers, interface designers, project managers,
                    and others, often including domain experts, collaborate
                    intensively on software projects.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={16} className={classes.cardGrid}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <Typography
                    component="h5"
                    className="title-challenge"
                    variant="h4"
                  >
                    What is Hackathon
                  </Typography>
                  <hr />
                  <Typography component="p" variant="body2">
                    A hackathon (also known as a hack day, hackfest or codefest)
                    is a design sprint-like event in which computer programmers
                    and others involved in software development, including
                    graphic designers, interface designers, project managers,
                    and others, often including domain experts, collaborate
                    intensively on software projects.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <Typography
                    component="h5"
                    className="title-challenge"
                    variant="h4"
                  >
                    What is Hackathon
                  </Typography>
                  <hr />
                  <Typography component="p" variant="body2">
                    A hackathon (also known as a hack day, hackfest or codefest)
                    is a design sprint-like event in which computer programmers
                    and others involved in software development, including
                    graphic designers, interface designers, project managers,
                    and others, often including domain experts, collaborate
                    intensively on software projects.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

EventPage.propTypes = {
  classes: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  eventPage: makeSelectEventPage(),
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

const withReducer = injectReducer({ key: 'eventPage', reducer });
const withSaga = injectSaga({ key: 'eventPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(EventPage);
