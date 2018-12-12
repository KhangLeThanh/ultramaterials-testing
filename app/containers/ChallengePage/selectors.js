import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the challengePage state domain
 */

const selectChallengePageDomain = state =>
  state.get('challengePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ChallengePage
 */

const makeSelectChallengePage = () =>
  createSelector(selectChallengePageDomain, substate => substate.toJS());

export default makeSelectChallengePage;
export { selectChallengePageDomain };
