/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles, AppBar, Toolbar, Button } from '@material-ui/core';

import injectReducer from 'utils/injectReducer';
import Drawer from 'components/Drawer/Loadable';
import makeSelectHeader from './selectors';
import reducer from './reducer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 'auto',
    backgroundColor: 'transparent',
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    height: '24px',
    [theme.breakpoints.up('md')]: {
      height: 'auto',
    },
  },
  toolBar: {
    backgroundColor: 'transparent',
  },
  appBar: {
    backgroundColor: 'transparent',
  },
  loginButton: {
    background: theme.palette.secondary,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
});

/* eslint-disable react/prefer-stateless-function */
export class Header extends React.Component {
  state = {
    auth: true,
  };

  render() {
    const { classes } = this.props;
    const { auth } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Link to="/">
              <img
                src="https://ultrahack.org/images/uh-red.png"
                alt="Ultrahack logo"
                className={classes.logo}
              />
            </Link>
            <div className={classes.sectionDesktop}>
              <Button component={Link} to="/partner">
                Partner
              </Button>
              <Button component={Link} to="/participate">
                Participate
              </Button>
              <Button component={Link} to="/volunteer">
                Volunteer
              </Button>
              <Button component={Link} to="/challenges">
                Challenges
              </Button>
              <Button component={Link} to="/about">
                About
              </Button>
            </div>
            <div className={classes.grow} />
            {auth ? (
              <Button
                className={classes.loginButton}
                component={Link}
                to="/dashboard"
              >
                <AccountCircle />
              </Button>
            ) : (
              <Button className={classes.loginButton}>Login</Button>
            )}
            <Drawer />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader(),
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

const withReducer = injectReducer({ key: 'header', reducer });

export default compose(
  withStyles(styles),
  withReducer,
  withConnect,
)(Header);
