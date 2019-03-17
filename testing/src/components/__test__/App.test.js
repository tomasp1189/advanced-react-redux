import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
	wrapped = shallow(
		<Root>
			<MemoryRouter>
				<App />
			</MemoryRouter>
		</Root>
	);
});

it('should show a comment box', () => {
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('should show a comment list', () => {
	expect(wrapped.find(CommentList).length).toEqual(1);
});
