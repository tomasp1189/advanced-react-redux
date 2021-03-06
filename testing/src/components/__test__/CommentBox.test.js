import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<Root initialState={{ auth: true }}>
			<MemoryRouter>
				<CommentBox />
			</MemoryRouter>
		</Root>
	);
});

afterEach(() => {
	wrapped.unmount();
});

it('should have a text area and two buttons', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

describe('The textarea', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'test comment' }
		});
		wrapped.update();
	});
	it('should have a text area that user can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('test comment');
	});

	it('should empty the text area when form is submitted', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('test comment');

		wrapped.find('form').simulate('submit');
		wrapped.update();

		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});
