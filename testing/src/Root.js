import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from 'configureStore';

const Root = ({ children, shouldLog, initialState = {} }) => {
	const store = configureStore(initialState, shouldLog);
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>{children}</ConnectedRouter>
		</Provider>
	);
};

export default Root;
