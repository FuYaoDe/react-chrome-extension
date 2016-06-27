import * as types from '../constants/ConfigActionTypes';

export function updateConfig(data) {
  return {
    type: types.CONFIG_UPDATE,
    data
  };
}
