import * as ActionTypes from '../constants/ConfigActionTypes';
const defaultConfigProps = {
  tabKey: 1,
  birthday: {
    date: '2016/06/25',
    color: 'black',
  },
  offWork: {
    time: '06:30',
    color: 'black',
  },
  dueDay: {
    date: '2016/06/27',
    time: '06:30',
    color: 'black',
  },
};

export default function config(state = defaultConfigProps, action) {
  switch (action.type) {
    case ActionTypes.CONFIG_UPDATE:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
