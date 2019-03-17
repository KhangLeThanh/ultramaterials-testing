/**
 *
 * ChallengePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import moment from 'moment';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import makeSelectChallengePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import TabContainer from '../../components/TabContainer/index';

import './style.css';

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
});
/* eslint-disable react/prefer-stateless-function */
export class ChallengePage extends React.Component {
  state = {
    value: 0,
    info: {
      starts: '15.12.2018.',
      deadline: '13.12.2018',
      location: 'Location info',
      prize: 'price info',
      title: 'Title Challenge',
    },
    resources: 'resource information',
    faq: 'frequently asked questions here',
    details: 'details information',
    header:
      'https://images.pexels.com/photos/533930/pexels-photo-533930.jpeg?cs=srgb&dl=architecture-buildings-city-533930.jpg&fm=jpg',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `http://localhost:1337/challenges/${this.props.match.params.id}`,
      );
      const challengelist = await response.json();
      this.setState({
        info: {
          starts: challengelist.date,
          deadline: challengelist.deadline,
          location: challengelist.location,
          prize: challengelist.prize,
          title: challengelist.title,
        },
        details: challengelist.details,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.grid}>
          <img
            className="challenge-banner"
            alt="Challenge header"
            src={this.state.header}
          />
          <div className={classes.gridContainer}>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={3}>
                <Paper className={classes.paper}>
                  <Typography className="title-challenge" variant="h4">
                    {this.state.info.title}
                  </Typography>
                  <hr />
                  <Typography variant="body2">
                    <i className="far fa-clock" /> Deadline:{' '}
                    {moment(this.state.info.deadline).format('MMM Do YY')}
                  </Typography>
                  <Typography variant="body2">
                    <i className="far fa-calendar-alt" />{' '}
                    {moment(this.state.info.starts).format('MMM Do YY')}
                  </Typography>
                  <Typography variant="body2">
                    <i className="fas fa-map-marker-alt" />{' '}
                    {this.state.info.location}
                  </Typography>
                  <Typography variant="body2">
                    <i className="fas fa-trophy" /> {this.state.info.prize}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Paper className={classes.box}>
                  <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                      <Tab label="Details" />
                      <Tab label="Resources" />
                      <Tab label="FAQ" />
                    </Tabs>
                  </AppBar>
                  {value === 0 && (
                    <TabContainer>
                      <Typography>{this.state.details}</Typography>
                    </TabContainer>
                  )}
                  {value === 1 && (
                    <TabContainer>
                      <Typography>
                        {this.state.resources}
                        Issue outcomes, human-centered, overcome injustice
                        milestones; accessibility white paper human-centered. A
                        outcomes leverage leverage innovate outcomes data.
                        Vibrant vibrant synergy; inspiring ecosystem empower
                        inspiring, do-gooder inspiring, capacity building,
                        living a fully ethical life the resistance technology.
                      </Typography>
                    </TabContainer>
                  )}
                  {value === 2 && (
                    <TabContainer>
                      <Typography>
                        {this.state.faq}
                        Issue outcomes, human-centered, overcome injustice
                        milestones; accessibility white paper human-centered. A
                        outcomes leverage leverage innovate outcomes data.
                        Vibrant vibrant synergy; inspiring ecosystem empower
                        inspiring, do-gooder inspiring, capacity building,
                        living a fully ethical life the resistance technology.
                      </Typography>
                    </TabContainer>
                  )}
                </Paper>
                <Paper className={classes.paper}>
                  <Typography variant="h4">Comments</Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>

          {/* <FormattedMessage {...messages.header} /> */}
        </div>
      </div>
    );
  }
}

ChallengePage.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  challengePage: makeSelectChallengePage(),
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

const withReducer = injectReducer({ key: 'challengePage', reducer });
const withSaga = injectSaga({ key: 'challengePage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(ChallengePage);
