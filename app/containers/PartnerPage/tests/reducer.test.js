import { fromJS } from 'immutable';
import partnerPageReducer from '../reducer';

describe('partnerPageReducer', () => {
  it('returns the initial state', () => {
    expect(partnerPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
