import * as types from '../constants/SampleActionTypes';

export function updateSystemVersion(systemVersion) {
  return {
    type: types.UPDATE_SYSTEM_VERSION,
    data: systemVersion,
  };
}
