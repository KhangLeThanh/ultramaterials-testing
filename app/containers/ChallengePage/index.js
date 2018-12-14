/**
 *
 * ChallengePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import makeSelectChallengePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import TabContainer from '../../components/TabContainer/index';

import './style.css';

const styles = theme => ({
  root: {
    width: 'inherit',
    overflowX: 'hidden',
  },
  grid: {
    maxWidth: 1280,
    margin: '0 auto',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  box: {
    paddingTop: 0,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ChallengePage extends React.Component {
  state = {
    value: 0,
    info: {
      starts: '15.12.2018.',
      deadline: '13.12.2018',
      location: 'Location info',
      prize: 'price info',
    },
    resources: 'resource information',
    faq: 'frequently asked questions here',
    header:
      'https://images.pexels.com/photos/533930/pexels-photo-533930.jpeg?cs=srgb&dl=architecture-buildings-city-533930.jpg&fm=jpg',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.grid}>
          <img
            className="challenge-banner"
            alt="Challenge header"
            src={this.state.header}
          />
          <Grid container spacing={16}>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper}>
                <Typography variant="h4">Info</Typography>
                <hr />
                <Typography variant="body2">
                  <i className="far fa-clock" /> Deadline:{' '}
                  {this.state.info.deadline}
                </Typography>
                <Typography variant="body2">
                  <i className="far fa-calendar-alt" /> {this.state.info.starts}
                </Typography>
                <Typography variant="body2">
                  <i className="fas fa-map-marker-alt" />{' '}
                  {this.state.info.location}
                </Typography>
                <Typography variant="body2">
                  <i className="fas fa-trophy" /> {this.state.info.prize}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Paper className={classes.box}>
                <AppBar position="static">
                  <Tabs value={value} onChange={this.handleChange}>
                    <Tab label="Details" />
                    <Tab label="Resources" />
                    <Tab label="FAQ" />
                  </Tabs>
                </AppBar>
                {value === 0 && (
                  <TabContainer>
                    <Typography>
                      Policymaker resilient, targeted entrepreneur rubric;
                      fairness do-gooder strategize social innovation
                      low-hanging fruit NGO; natural resources targeted
                      empathetic. To, benefit corporation efficient; optimism
                      boots on the ground mobilize collaborative cities NGO
                      scalable circular peaceful collective impact social
                      capital. Society, shared value; framework agile big data
                      social entrepreneur support humanitarian then, the program
                      areas collaborative cities the resistance catalyze.
                      Innovation, empower communities collaborate co-creation
                      when communities. Innovate; collaborative cities
                      unprecedented challenge when silo segmentation replicable
                      social innovation white paper triple bottom line.
                      Unprecedented challenge invest policymaker; efficient
                      citizen-centered; engaging fairness.
                    </Typography>

                    <Typography>
                      Issue outcomes, human-centered, overcome injustice
                      milestones; accessibility white paper human-centered. A
                      outcomes leverage leverage innovate outcomes data. Vibrant
                      vibrant synergy; inspiring ecosystem empower inspiring,
                      do-gooder inspiring, capacity building, living a fully
                      ethical life the resistance technology.
                    </Typography>
                    <Typography>
                      We must stand up incubator collective impact parse
                      compelling but. Compelling state of play communities
                      granular equal opportunity empathetic framework bandwidth.
                      Communities social entrepreneur, transparent, paradigm,
                      rubric social entrepreneur empathetic change-makers
                      granular state of play scalable. Systems thinking,
                      optimism grit do-gooder replicable preliminary thinking.
                      Expose the truth, to save the world shared unit of
                      analysis challenges and opportunities commitment activate
                      movements shared unit of analysis resist changemaker.
                      Families humanitarian incubator unprecedented challenge;
                      triple bottom line, technology invest, society equal
                      opportunity segmentation progress scale and impact benefit
                      corporation.
                    </Typography>
                  </TabContainer>
                )}
                {value === 1 && (
                  <TabContainer>
                    <Typography>
                      {this.state.resources}
                      Issue outcomes, human-centered, overcome injustice
                      milestones; accessibility white paper human-centered. A
                      outcomes leverage leverage innovate outcomes data. Vibrant
                      vibrant synergy; inspiring ecosystem empower inspiring,
                      do-gooder inspiring, capacity building, living a fully
                      ethical life the resistance technology.
                    </Typography>
                  </TabContainer>
                )}
                {value === 2 && (
                  <TabContainer>
                    <Typography>
                      {this.state.faq}
                      Issue outcomes, human-centered, overcome injustice
                      milestones; accessibility white paper human-centered. A
                      outcomes leverage leverage innovate outcomes data. Vibrant
                      vibrant synergy; inspiring ecosystem empower inspiring,
                      do-gooder inspiring, capacity building, living a fully
                      ethical life the resistance technology.
                    </Typography>
                  </TabContainer>
                )}
              </Paper>
              <Paper className={classes.paper}>
                <Typography variant="h4">Comments</Typography>
              </Paper>
            </Grid>
          </Grid>
          {/* <FormattedMessage {...messages.header} /> */}
        </div>
      </div>
    );
  }
}

ChallengePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  challengePage: makeSelectChallengePage(),
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

const withReducer = injectReducer({ key: 'challengePage', reducer });
const withSaga = injectSaga({ key: 'challengePage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(ChallengePage);
