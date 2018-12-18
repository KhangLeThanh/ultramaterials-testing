/**
 *
 * ChallengesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectChallengesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

const styles = {
  root: {
    textAlign: 'center',
  },
};

/* eslint-disable react/prefer-stateless-function */
export class ChallengesPage extends React.Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root} />;
  }
}

ChallengesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  challengesPage: makeSelectChallengesPage(),
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

const withReducer = injectReducer({ key: 'challengesPage', reducer });
const withSaga = injectSaga({ key: 'challengesPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(ChallengesPage);
