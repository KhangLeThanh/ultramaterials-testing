/**
 *
 * AdminEventPanel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

import { PropTypes } from 'prop-types';

import {
  Typography,
  Grid,
  FormControl,
  Input,
  NativeSelect,
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 1,
  },
  panelRoot: {
    backgroundColor: 'rgba(35, 35, 42, 1)',
  },
  gridContainer: {
    paddingLeft: theme.spacing.unit * 1,
    width: '100%',
  },
  dataBox: {},
  formControl: {
    margin: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'row',
  },
  exportSelect: {
    border: '1px solid white',
    background: 'white',
    color: 'black',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

/* eslint-disable react/prefer-stateless-function */
class AdminEventPanel extends React.Component {
  state = {
    exportType: undefined,
    expanded: null,
    applications: {
      all: 0,
      approved: 0,
      rejected: 0,
    },
    projects: {
      all: 0,
      approved: 0,
      rejected: 0,
    },
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleExpansion = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          classes={{
            root: classes.panelRoot,
          }}
          expanded={expanded === 'panel1'}
          onChange={this.handleExpansion('panel1')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              {/* this.props.event.name */} Hack the Bay Area
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {/* this.props.event.role */}
              user role
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.gridContainer}>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={4}>
                  <div className={classes.dataBox}>
                    <Typography variant="h5">Applicants</Typography>
                    <Typography>All: {this.state.applications.all}</Typography>
                    <Typography>
                      Approved: {this.state.applications.approved}
                    </Typography>
                    <Typography>
                      Rejected: {this.state.applications.rejected}
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <div className={classes.dataBox}>
                    <Typography variant="h5">Projects</Typography>
                    <Typography>All: {this.state.projects.all}</Typography>
                    <Typography>
                      Approved: {this.state.projects.approved}
                    </Typography>
                    <Typography>
                      Rejected: {this.state.projects.rejected}
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <div className={classes.dataBox}>
                    <Typography variant="h5">Export data</Typography>
                    <FormControl className={classes.formControl}>
                      {/*
                  <InputLabel shrink htmlFor="export-native-label-placeholder">
                    Export CSV
                  </InputLabel> */}
                      <NativeSelect
                        className={classes.exportSelect}
                        value={this.state.exportType}
                        onChange={this.handleChange('exportType')}
                        input={
                          <Input
                            name="export"
                            variant="outlined"
                            id="export-native-label-placeholder"
                          />
                        }
                      >
                        <option value="">Select data to...</option>
                        <option value="ALL_EMAILS">
                          All participants emails
                        </option>
                        <option value="ACCEPTED_EMAILS">
                          All accepted participants emails
                        </option>
                        <option value="ALL_DATA">All participant info</option>
                      </NativeSelect>
                      <Button>Export</Button>
                    </FormControl>
                  </div>
                </Grid>
              </Grid>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

AdminEventPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminEventPanel);
