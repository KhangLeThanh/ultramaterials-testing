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
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
  withStyles,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemText,
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
  list: {
    width: 250,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class Header extends React.Component {
  state = {
    auth: true,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    const { auth } = this.state;

    const sideList = (
      <div className={classes.list}>
        <List>
          {[['Home', '/']].map(text => (
            <ListItem button component={Link} to={text[1]} key={text[0]}>
              <ListItemText primary={text[0]} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            ['Partnering', '/partner'],
            ['Participate', '/participate'],
            ['Volunteering', '/volunteer'],
            ['Challenges', '/challenges'],
            ['About', '/about'],
          ].map(text => (
            <ListItem button component={Link} to={text[1]} key={text[0]}>
              <ListItemText primary={text[0]} />
            </ListItem>
          ))}
        </List>
      </div>
    );

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
                onClick={this.toggleDrawer('right', true)}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="right"
                open={this.state.right}
                onClose={this.toggleDrawer('right', false)}
                onOpen={this.toggleDrawer('right', true)}
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('right', false)}
                  onKeyDown={this.toggleDrawer('right', false)}
                >
                  {sideList}
                </div>
              </SwipeableDrawer>
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
