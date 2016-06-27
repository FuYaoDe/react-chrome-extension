import * as types from '../constants/SampleActionTypes';

export function update(data) {
  return {
    type: types.UPDATE,
    data,
  };
}
