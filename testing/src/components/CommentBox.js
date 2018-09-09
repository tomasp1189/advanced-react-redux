import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
	state = { comment: '' };
	onChangeComment = event => {
		this.setState({ comment: event.target.value });
	};
	onSubmitForm = event => {
		event.preventDefault();

		this.props.saveComment(this.state.comment);

		this.setState({ comment: '' });
	};
	render() {
		return (
			<form onSubmit={this.onSubmitForm}>
				<h4>Add a Comment</h4>
				<textarea value={this.state.comment} onChange={this.onChangeComment} />
				<div>
					<button>Submit Comment</button>
				</div>
			</form>
		);
	}
}

export default connect(
	null,
	actions
)(CommentBox);
