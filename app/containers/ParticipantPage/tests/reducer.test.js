import { fromJS } from 'immutable';
import participantPageReducer from '../reducer';

describe('participantPageReducer', () => {
  it('returns the initial state', () => {
    expect(participantPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
