import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';

const Root = ({ children, shouldLog, initialState = {} }) => {
	const store = configureStore(initialState, shouldLog);
	return <Provider store={store}>{children}</Provider>;
};

export default Root;
