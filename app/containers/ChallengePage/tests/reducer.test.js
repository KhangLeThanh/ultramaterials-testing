import { fromJS } from 'immutable';
import challengePageReducer from '../reducer';

describe('challengePageReducer', () => {
  it('returns the initial state', () => {
    expect(challengePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
