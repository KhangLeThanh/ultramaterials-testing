/**
 *
 * ChallengePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import TabContainer from '.../components/TabContainer/index';
import makeSelectChallengePage from './selectors';
import reducer from './reducer';
import saga from './saga';

import messages from './messages';

import './style.css';
import TabContainer from "../../components/TabContainer/index";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ChallengePage extends React.Component {
  state = {
    value: 0,
    info: {
      title: 'Challenge title',
      starts: '15.12.2018.',
      deadline: '13.12.2018',
      location: 'Location info',
      prize: 'price info',
      resources: 'resource information',
      assets: 'assets information',
    },
    details: 'A shit ton of Lorem Ipsum here okay',
    header:
      'https://images.pexels.com/photos/533930/pexels-photo-533930.jpeg?cs=srgb&dl=architecture-buildings-city-533930.jpg&fm=jpg',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <img
          className="challenge-banner"
          alt="Challenge header"
          src={this.state.header}
        />
        <Grid container spacing={16}>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <AppBar position="static">
                <Tabs value={value} onChange={this.handleChange}>
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
              </AppBar>
              {value === 0 && <TabContainer>Item One</TabContainer>}
              {value === 1 && <TabContainer>Item Two</TabContainer>}
              {value === 2 && <TabContainer>Item Three</TabContainer>}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
        </Grid>
        {/* <FormattedMessage {...messages.header} /> */}
      </div>
    );
  }
}

ChallengePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
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
