/**
 *
 * PartnerPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import Quote from 'components/Quote';
import makeSelectPartnerPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const styles = theme => ({
  stats: {
    display: 'flex',
    flexDirection: 'row',
  },
  statsDiv: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statsRow: {
    display: 'grid',
    gridTemplate: 'auto / 130px 100px',
  },
  statsNumber: {
    fontSize: theme.spacing.unit * 7,
    textAlign: 'right',
    color: theme.palette.secondary.main,
  },
  statsText: {
    paddingLeft: theme.spacing.unit * 2.5,
    paddingTop: theme.spacing.unit * 1.5,
    textTransform: 'uppercase',
  },
  grid: {
    maxWidth: 900,
    margin: '0 auto',
  },
  page: {
    margin: theme.spacing.unit * 2,
  },
  contactsDiv: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    maxWidth: 250,
    margin: theme.spacing.unit,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  gridListDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tile: {
    margin: theme.spacing.unit,
    transition: 'transform 200ms ease-in -out',
    width: '124px',
    height: '94px',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class PartnerPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <Helmet>
          <title>Ultrahack | Partners</title>
          <meta name="description" content="Description of PartnerPage" />
        </Helmet>
        <div className={classes.grid}>
          <br />
          <Typography variant="h3" gutterBottom>
            What is Ultrahack?
          </Typography>
          {messages.textContent.whatIsUltrahack.map((text, index) => (
            <Typography key={`what-is-ultrahack-${index}`} paragraph>
              {text}
            </Typography>
          ))}
          <br />
          <div className={classes.statsDiv}>
            {messages.stats.map((value, index) => (
              <div className={classes.statsRow}>
                <Typography variant="h5" className={classes.statsNumber}>
                  {messages.stats[index].amount}
                </Typography>
                <Typography className={classes.statsText} paragraph>
                  {messages.stats[index].text}
                </Typography>
              </div>
            ))}
          </div>
          <br />
          <br />
        </div>
        <div className={classes.gridListDiv}>
          {messages.tileData.map(tile => (
            <img src={tile.img} alt={tile.title} className={classes.tile} />
          ))}
        </div>
        <br style={{ clear: 'both' }} />
        <br />
        <br />
        <div className={classes.grid}>
          <Typography variant="h3" gutterBottom>
            How Ultrahack can help your company
          </Typography>
          <Typography paragraph>
            {messages.textContent.howUltrahackHelps}
          </Typography>
          <br />
          {messages.textContent.testimonies.map(testimony => (
            <Quote author={testimony.testimony} text={testimony.source} />
          ))}
          <br />
          <br />
          <Typography variant="h3">Contact us</Typography>
          <div className={classes.contactsDiv}>
            {messages.contacts.map(contact => (
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={contact.image}
                  title={contact.fullName}
                />
                <CardHeader
                  title={contact.fullName}
                  subheader={contact.position}
                />

                <CardContent>
                  <Typography paragraph>{contact.email}</Typography>
                  <Typography paragraph>{contact.phone}</Typography>
                  <Typography paragraph>{contact.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

PartnerPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  partnerPage: makeSelectPartnerPage(),
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

const withReducer = injectReducer({ key: 'partnerPage', reducer });
const withSaga = injectSaga({ key: 'partnerPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(PartnerPage);
