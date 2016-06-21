import * as types from '../constants/SampleActionTypes';

export function updatinfo(data) {
  console.log("!!!!!!!!!!!!", data, types.UPDATE);
  return {
    type: types.UPDATE,
    data: data,
  };
}
