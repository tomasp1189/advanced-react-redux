import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
	renderButton = () => {
		const { auth, changeAuth } = this.props;
		return (
			<button
				className={auth ? 'sign-out' : 'sign-in'}
				onClick={() => changeAuth(!auth)}
			>
				{auth ? 'Sign Out' : 'Sign In'}
			</button>
		);
	};
	renderHeader = () => {
		return (
			<ul>
				<li>
					<Link className="nav-link-home" to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className="nav-link-post" to="/post">
						Post A Comment
					</Link>
				</li>
				<li>{this.renderButton()}</li>
			</ul>
		);
	};
	render() {
		return (
			<div>
				{this.renderHeader()}
				<Switch>
					<Route path="/post" component={CommentBox} />
					<Route exact path="/" component={CommentList} />
				</Switch>
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
