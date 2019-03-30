import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
	const initialState = {
		auth: true,
		comments: ['Initial Comment #1', 'Initial Comment #2']
	};
	wrapped = mount(
		<Root initialState={initialState}>
			<MemoryRouter>
				<CommentList />
			</MemoryRouter>
		</Root>
	);
});

it('should render one <li> for each comment', () => {
	let comments = wrapped.find('li').length;

	expect(comments).toEqual(2);
});

it('should show the text for each comment', () => {
	let commentText = wrapped.render().text();
	expect(commentText).toContain('Initial Comment #1');
	expect(commentText).toContain('Initial Comment #2');
});
