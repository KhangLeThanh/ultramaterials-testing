/**
 *
 * ChallengesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Helmet } from 'react-helmet';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Typography, withStyles } from '@material-ui/core';
import makeSelectChallengesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import ChallengeCard from '../../components/ChallengeCard/index';

const styles = theme => ({
  root: {
    textAlign: 'left',
  },
  headerSection: {
    margin: theme.spacing.unit * 2,
  },
  grid: {
    maxWidth: 900,
    margin: '0 auto',
  },
  listSection: {
    paddingTop: theme.spacing.unit * 8,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: 1200,
    flexWrap: 'wrap',
    margin: '0 auto',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ChallengesPage extends React.Component {
  state = {
    challengelist: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:1337/challenges');
      const challengelist = await response.json();
      this.setState({
        challengelist,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Helmet>
          <title>Ultrahack | Challenges</title>
        </Helmet>
        <div className={classes.headerSection}>
          <div className={classes.grid}>
            <Typography variant="h2" gutterBottom>
              Challenges
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              debitis distinctio maxime! Voluptas blanditiis ipsa laudantium
              voluptate illum omnis ullam impedit odio non tenetur, doloribus
              vel ea, laborum provident vero corrupti sed autem rem ipsam
              voluptatem maiores tempore qui eveniet? Accusamus dolorum natus
              ipsum pariatur fuga incidunt eaque dignissimos aut voluptates,
              enim nostrum quod consequatur vero unde asperiores amet delectus
              sit aspernatur maiores rerum laboriosam quae modi tempore.
              Possimus magni vitae animi aliquam modi. Ipsa laboriosam eum
              blanditiis! Suscipit architecto eligendi, quos facere dignissimos
              dolorum quam in provident ea veritatis iste dolores reprehenderit
              modi ipsam sunt? Voluptatum architecto commodi inventore eveniet
              doloribus.
            </Typography>
          </div>
        </div>
        <div className={classes.listSection}>
          <div className={classes.list}>
            {this.state.challengelist.map(challenge => (
              <span key={challenge.id}>
                <ChallengeCard {...challenge} />
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

ChallengesPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  challengesPage: makeSelectChallengesPage(),
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

const withReducer = injectReducer({ key: 'challengesPage', reducer });
const withSaga = injectSaga({ key: 'challengesPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(ChallengesPage);
