/**
 *
 * Footer
 *
 */

import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

// import fa icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import PropTypes from 'prop-types';
// import styled from 'styled-components';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  link: {
    color: theme.palette.text.secondary,
    padding: '2px 5px',
    '&:hover': {
      backgroundColor: theme.palette.text.secondary,
      color: 'black',
    },
  },
});

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.flex}>
          <div className={classes.paper}>
            <Typography>© 2018 Futuretournaments.</Typography>
            <Typography>All Rights Reserved.</Typography>
          </div>
          <div className={classes.paper}>
            <Typography>About us</Typography>
            <Typography>Terms of Service</Typography>
            <Typography>Privacy Policy</Typography>
            <Typography>Cookie Policy</Typography>
            <Typography>Ultrahack Newsletter</Typography>
          </div>
          <div className={classes.paper}>
            <div className={classes.flex}>
              <a
                className={classes.link}
                href="https://www.facebook.com/ultrahackhq"
              >
                <FontAwesomeIcon size="2x" icon={faFacebookF} />
              </a>
              <a
                className={classes.link}
                href="https://twitter.com/ultrahackhq"
              >
                <FontAwesomeIcon size="2x" icon={faTwitter} />
              </a>
              <a
                className={classes.link}
                href="https://www.instagram.com/ultrahackhq/"
              >
                <FontAwesomeIcon size="2x" icon={faInstagram} />
              </a>
              <a
                className={classes.link}
                href="https://www.youtube.com/channel/UCCgGm0zJ_EXAhZFxWekYWyw"
              >
                <FontAwesomeIcon size="2x" icon={faYoutube} />
              </a>
              <a
                className={classes.link}
                href="https://www.linkedin.com/company-beta/10072149/"
              >
                <FontAwesomeIcon size="2x" icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
