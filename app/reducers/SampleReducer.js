// import * as ActionTypes from '../constants/ActionTypes';
import * as ActionTypes from '../constants/SampleActionTypes';
const defaultProps = {};

export default function systemInfo(state = defaultProps, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_SYSTEM_VERSION:
      return {
        ...state,
        systemVersion: action.data,
      };
    default:
      return state;
  }
}
