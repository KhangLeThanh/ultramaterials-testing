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

import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ClearIcon from '@material-ui/icons/Clear';
import {
  MenuList,
  MenuItem,
  Grow,
  ClickAwayListener,
  Popper,
  Paper,
} from '@material-ui/core';

import injectReducer from 'utils/injectReducer';
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
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolBar: {
    backgroundColor: 'transparent',
  },
  appBar: {
    backgroundColor: 'transparent',
  },
  menuButton: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
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
  popper: {
    zIndex: 2,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class Header extends React.Component {
  state = {
    auth: true,
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  renderLink = to => <Link to={to} />;

  render() {
    const { classes } = this.props;
    const { auth, open } = this.state;

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
            <div>
              <IconButton
                className={classes.menuButton}
                aria-label="Menu"
                buttonRef={node => {
                  this.anchorEl = node;
                }}
                aria-owns={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={this.handleToggle}
              >
                {open ? <ClearIcon /> : <MenuIcon />}
              </IconButton>
              <Popper
                className={classes.popper}
                open={open}
                anchorEl={this.anchorEl}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id="menu-list-grow"
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={this.handleClose}>
                        <MenuList>
                          <MenuItem
                            onClick={this.handleClose}
                            component={Link}
                            to="/partner"
                          >
                            Partner
                          </MenuItem>
                          <MenuItem
                            onClick={this.handleClose}
                            component={Link}
                            to="/participate"
                          >
                            Participate
                          </MenuItem>
                          <MenuItem
                            onClick={this.handleClose}
                            component={Link}
                            to="/volunteer"
                          >
                            Volunteer
                          </MenuItem>
                          <MenuItem
                            onClick={this.handleClose}
                            component={Link}
                            to="/challenges"
                          >
                            Challenges
                          </MenuItem>
                          <MenuItem
                            onClick={this.handleClose}
                            component={Link}
                            to="/about"
                          >
                            About
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
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
