import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';

export default history =>
	combineReducers({
		router: connectRouter(history),
		comments: commentsReducer,
		auth: authReducer
	});
