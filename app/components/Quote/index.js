/**
 *
 * Quote
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    borderColor: theme.palette.secondary.main,
    borderStyle: 'solid',
    borderWidth: '0 0 0 5px',
    backgroundColor: theme.palette.primary.main,
    paddingLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
  },
});
/* eslint-disable react/prefer-stateless-function */
class Quote extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography paragraph>{this.props.author}</Typography>
        <Typography paragraphs>{this.props.text}</Typography>
      </div>
    );
  }
}

Quote.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(Quote);
