import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootRudecer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootRudecer, applyMiddleware(...middlewares));

export default store;