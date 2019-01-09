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
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
    },
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  logos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  texts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.contrastText,
    padding: '2px 5px',
    '&:hover': {
      color: theme.palette.secondary.main,
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
            <div className={classes.text}>
              <Typography>© 2018 Futuretournaments.</Typography>
              <Typography>All Rights Reserved.</Typography>
            </div>
          </div>
          <div className={classes.paper}>
            <div className={classes.text}>
              <Typography>
                <a
                  className={classes.link}
                  href="https://ultrahack.org/about-us"
                >
                  About us
                </a>
              </Typography>

              <Typography>
                <a
                  className={classes.link}
                  href="https://ultrahack.org/terms-of-service"
                >
                  Terms of Service
                </a>
              </Typography>
              <Typography>
                <a
                  className={classes.link}
                  href="https://ultrahack.org/privacy-policy"
                >
                  Privacy Policy
                </a>
              </Typography>

              <Typography>
                <a
                  className={classes.link}
                  href="https://ultrahack.org/cookie-policy"
                >
                  Cookie Policy
                </a>
              </Typography>

              <Typography>
                <a
                  className={classes.link}
                  href="https://ultrahack.us11.list-manage.com/subscribe/?u=6b1ca44d06d111d99f84a0508&id=c37c1df784"
                >
                  Ultrahack Newsletter
                </a>
              </Typography>
            </div>
          </div>
          <div className={classes.paper}>
            <div className={classes.logos}>
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
