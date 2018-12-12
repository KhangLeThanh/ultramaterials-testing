import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the partnerPage state domain
 */

const selectPartnerPageDomain = state => state.get('partnerPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PartnerPage
 */

const makeSelectPartnerPage = () =>
  createSelector(selectPartnerPageDomain, substate => substate.toJS());

export default makeSelectPartnerPage;
export { selectPartnerPageDomain };
