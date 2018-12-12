import { fromJS } from 'immutable';
import frontPageReducer from '../reducer';

describe('frontPageReducer', () => {
  it('returns the initial state', () => {
    expect(frontPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
