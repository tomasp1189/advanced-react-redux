import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component {
	renderButton = () => {
		const { auth, changeAuth } = this.props;
		return (
			<button onClick={() => changeAuth(!auth)}>
				{auth ? 'Sign Out' : 'Sign In'}
			</button>
		);
	};
	renderHeader = () => {
		return (
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/post">Post A Comment</Link>
				</li>
				<li>{this.renderButton()}</li>
			</ul>
		);
	};
	render() {
		return (
			<div>
				{this.renderHeader()}
				<Route path="/post" component={CommentBox} />
				<Route exact path="/" component={CommentList} />
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { auth: state.auth };
}
export default connect(
	mapStateToProps,
	actions
)(App);
