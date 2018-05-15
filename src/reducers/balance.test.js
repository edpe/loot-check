import balanceReucer from './balance';
import * as constants from '../actions/constants';

describe ('balanceReDucer', () => {
  it('sets a balance', () => {
    const balance = 10;

    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
      .toEqual(balance);
  })

});
