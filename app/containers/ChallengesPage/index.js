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
import { withStyles } from '@material-ui/core/styles';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Typography } from '@material-ui/core';
import makeSelectChallengesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import ChallengeCard from '../../components/ChallengeCard/index';

const styles = {
  root: {
    textAlign: 'left',
  },
  grid: {
    maxWidth: 900,
    margin: '0 auto',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 1200,
    flexWrap: 'wrap',
    margin: '0 auto',
  },
};

const challenge = {
  title: 'Challenge title',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio vel accusamus officia rem quod alias, velit, placeat fugiat eos harum officiis perspiciatis accusantium animi recusandae minus inventore tempore hic quam odit doloremque dolore? Placeat consequuntur necessitatibus, magni iure cum eum, error nisi sed ipsum eius quo? Porro provident iusto asperiores?',
  link: '/challenge',
  media:
    'https://www.standardmedia.co.ke/images/saturday/thumb_hwpk4gfklavs8g5a91d20395887.jpg',
  deadline: new Date(),
};

/* eslint-disable react/prefer-stateless-function */
export class ChallengesPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grid}>
          <Typography variant="h4">Challenges</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            debitis distinctio maxime! Voluptas blanditiis ipsa laudantium
            voluptate illum omnis ullam impedit odio non tenetur, doloribus vel
            ea, laborum provident vero corrupti sed autem rem ipsam voluptatem
            maiores tempore qui eveniet? Accusamus dolorum natus ipsum pariatur
            fuga incidunt eaque dignissimos aut voluptates, enim nostrum quod
            consequatur vero unde asperiores amet delectus sit aspernatur
            maiores rerum laboriosam quae modi tempore. Possimus magni vitae
            animi aliquam modi. Ipsa laboriosam eum blanditiis! Suscipit
            architecto eligendi, quos facere dignissimos dolorum quam in
            provident ea veritatis iste dolores reprehenderit modi ipsam sunt?
            Voluptatum architecto commodi inventore eveniet doloribus.
          </Typography>
        </div>
        <div className={classes.list}>
          <ChallengeCard {...challenge} />
          <ChallengeCard {...challenge} />
          <ChallengeCard {...challenge} />
          <ChallengeCard {...challenge} />
          <ChallengeCard {...challenge} />
          <ChallengeCard {...challenge} />
          <ChallengeCard {...challenge} />
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
