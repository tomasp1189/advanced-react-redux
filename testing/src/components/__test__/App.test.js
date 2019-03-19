import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const mountLoggedInWithRouter = route => {
	return mount(
		<Root
			initialState={{
				auth: true,
				router: {
					location: {
						pathname: route,
						search: '',
						hash: '',
						state: undefined,
						key: 'st0b6u'
					},
					action: 'PUSH'
				},
				comments: []
			}}
		>
			<App />
		</Root>
	);
};

it('should show a comment box', () => {
	const wrapped = mountLoggedInWithRouter('/post');
	wrapped.update();
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('should show a comment list', () => {
	const wrapped = mountLoggedInWithRouter('/');
	wrapped.find('a#nav-link-home').simulate('click', { button: 0 });
	wrapped.update();
	expect(wrapped.find(CommentList).length).toEqual(1);
});
