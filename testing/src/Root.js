import React from 'react';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from 'reducers';

const Root = ({ children, shouldLog, initialState = {} }) => {
	let middleware = shouldLog ? applyMiddleware(logger) : applyMiddleware();
	const store = createStore(reducers, initialState, middleware);
	return <Provider store={store}>{children}</Provider>;
};

export default Root;
