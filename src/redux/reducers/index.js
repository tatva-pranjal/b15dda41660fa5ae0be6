// import external libraries
import {combineReducers} from 'redux';

// import reducer
import commonReducer from './commonReducer';
import pageLoaderReducer from './pageLoaderReducer';

const appReducers = () =>
  combineReducers({
    common: commonReducer,
    pageLoader: pageLoaderReducer,
  });

export default appReducers;
