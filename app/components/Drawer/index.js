/**
 *
 * Drawer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

import {
  withStyles,
  IconButton,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const styles = theme => ({
  menuButton: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class Drawer extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

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
    );
  }
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(Drawer);
