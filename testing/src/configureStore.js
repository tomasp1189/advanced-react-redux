// configureStore.js

import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import createRootReducer from 'reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState, shouldLog) {
	const middleware = [async, stateValidator, routerMiddleware(history)];
	shouldLog && middleware.push(logger);
	const store = createStore(
		createRootReducer(history), // root reducer with router state
		preloadedState,
		compose(applyMiddleware(...middleware))
	);

	return store;
}
