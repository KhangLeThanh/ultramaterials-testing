import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the eventPage state domain
 */

const selectEventPageDomain = state => state.get('eventPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EventPage
 */

const makeSelectEventPage = () =>
  createSelector(selectEventPageDomain, substate => substate.toJS());

export default makeSelectEventPage;
export { selectEventPageDomain };
