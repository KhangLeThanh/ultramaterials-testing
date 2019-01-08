import { fromJS } from 'immutable';
import challengesPageReducer from '../reducer';

describe('challengesPageReducer', () => {
  it('returns the initial state', () => {
    expect(challengesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
