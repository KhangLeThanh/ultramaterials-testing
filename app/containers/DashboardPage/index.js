/**
 *
 * DashboardPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDashboardPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import AdminPanel from '../../components/AdminEventPanel/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Ultrahack | Dashboard</title>
          <meta name="description" content="Description of DashboardPage" />
        </Helmet>
        <AdminPanel />
        <AdminPanel />
        <AdminPanel />
        <AdminPanel />
      </div>
    );
  }
}

DashboardPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  dashboardPage: makeSelectDashboardPage(),
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

const withReducer = injectReducer({ key: 'dashboardPage', reducer });
const withSaga = injectSaga({ key: 'dashboardPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DashboardPage);
