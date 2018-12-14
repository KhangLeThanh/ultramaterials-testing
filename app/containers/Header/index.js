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
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import injectReducer from 'utils/injectReducer';
import makeSelectHeader from './selectors';
import reducer from './reducer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
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
  sectionMobile: {},
});

/* eslint-disable react/prefer-stateless-function */
export class Header extends React.Component {
  state = {
    auth: false,
    mobile: false,
  };

  render() {
    const { classes } = this.props;
    const { auth, mobile } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <img
              src="https://ultrahack.org/images/uh-red.png"
              alt="Ultrahack logo"
              className={classes.sectionDesktop}
            />
            <div className={classes.sectionDesktop}>
              <Button color="inherit">Partnering</Button>
              <Button color="inherit">Participate</Button>
              <Button color="inherit">Volunteering</Button>
              <Button color="inherit">Challenges</Button>
              <Button color="inherit">About</Button>
            </div>

            <div className={classes.grow} />
            {auth ? null : (
              <Button color="inherit" className={classes.loginButton}>
                Login
              </Button>
            )}
            {mobile && (
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
            )}
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
