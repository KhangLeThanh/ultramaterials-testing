import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the challengesPage state domain
 */

const selectChallengesPageDomain = state =>
  state.get('challengesPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ChallengesPage
 */

const makeSelectChallengesPage = () =>
  createSelector(selectChallengesPageDomain, substate => substate.toJS());

export default makeSelectChallengesPage;
export { selectChallengesPageDomain };
