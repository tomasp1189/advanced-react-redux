// configureStore.js
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';

export default function configureStore(preloadedState, shouldLog) {
	const middleware = [async, stateValidator];
	shouldLog && middleware.push(logger);
	const store = createStore(
		reducers,
		preloadedState,
		compose(applyMiddleware(...middleware))
	);

	return store;
}
