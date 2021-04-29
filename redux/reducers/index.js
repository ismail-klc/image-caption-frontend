import { combineReducers } from 'redux';
import authReducer from './authReducer';
import photoReducer from './photoReducer'

const rootReducer = combineReducers({
  authentication: authReducer,
  photos: photoReducer,
});

export default rootReducer;