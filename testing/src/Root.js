import React from 'react';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import reducers from 'reducers';

const Root = ({ children, shouldLog, initialState = {} }) => {
	const middleware = [reduxPromise];
	shouldLog && middleware.push(logger);
	const enhancer = applyMiddleware(...middleware);
	const store = createStore(reducers, initialState, enhancer);
	return <Provider store={store}>{children}</Provider>;
};

export default Root;
