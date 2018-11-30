/**
 *
 * TabContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import messages from './messages';


/* eslint-disable react/prefer-stateless-function */
class TabContainer extends React.Component {
  render() {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {this.props.children}
      </Typography>
    );
  }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContainer;
