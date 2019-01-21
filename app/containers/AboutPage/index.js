/**
 *
 * AboutPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Typography } from '@material-ui/core';
import makeSelectAboutPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const styles = {
  root: {
    maxWidth: '900px',
    margin: '0 auto',
  },
};

/* eslint-disable react/prefer-stateless-function */
export class AboutPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Helmet>
          <title>Ultrahack | About</title>
          <meta name="description" content="Description of PartnerPage" />
        </Helmet>
        <Typography variant="h3" gutterBottom>
          About us
        </Typography>
        {messages.aboutUs.map(paragraph => (
          <Typography paragraph>{paragraph}</Typography>
        ))}
      </div>
    );
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  aboutPage: makeSelectAboutPage(),
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

const withReducer = injectReducer({ key: 'aboutPage', reducer });
const withSaga = injectSaga({ key: 'aboutPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(AboutPage);
