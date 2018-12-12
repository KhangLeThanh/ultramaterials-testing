import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the frontPage state domain
 */

const selectFrontPageDomain = state => state.get('frontPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FrontPage
 */

const makeSelectFrontPage = () =>
  createSelector(selectFrontPageDomain, substate => substate.toJS());

export default makeSelectFrontPage;
export { selectFrontPageDomain };
