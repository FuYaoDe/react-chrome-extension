// import * as ActionTypes from '../constants/ActionTypes';
import * as ActionTypes from '../constants/SampleActionTypes';
const defaultProps = {};

export default function info(state = defaultProps, action) {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return {
        ...state,
        info: action.data,
      };
    default:
      return state;
  }
}
