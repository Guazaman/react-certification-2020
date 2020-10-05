import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

it('Should render a Card Details', () => {
  const wrapper = render(<SearchBar />);
  expect(wrapper).not.toBeNull();

  const input = wrapper.getByPlaceholderText('Search…');
  fireEvent.change(input, { target: { value: 'test' } });

  expect(screen.getByDisplayValue('test')).toBeTruthy();
});
