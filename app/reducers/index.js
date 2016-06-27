import { combineReducers } from 'redux';
import sample from './SampleReducer';
import config from './ConfigReducer';

export default combineReducers({
  sample,
  config
});
