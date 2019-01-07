import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the participantPage state domain
 */

const selectParticipantPageDomain = state =>
  state.get('participantPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ParticipantPage
 */

const makeSelectParticipantPage = () =>
  createSelector(selectParticipantPageDomain, substate => substate.toJS());

export default makeSelectParticipantPage;
export { selectParticipantPageDomain };
