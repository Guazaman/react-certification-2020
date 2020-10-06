import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import PrivateComponent from './Private.component';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

const privateWrapper = (
  <HashRouter>
    <PrivateComponent>
      <div>Some test component</div>
    </PrivateComponent>
  </HashRouter>
);

describe('Test private routes', () => {
  it('Should render the component', () => {
    useAuth.mockImplementation(() => {
      return {
        authenticated: true,
      };
    });
    const wrapper = render(privateWrapper);
    const mockComponent = wrapper.queryByText('Some test component');
    expect(mockComponent).not.toBeNull();
  });

  it('Should not render the component', () => {
    useAuth.mockImplementation(() => {
      return {
        authenticated: false,
      };
    });
    const wrapper = render(privateWrapper);
    const mockComponent = wrapper.queryByText('Some test component');
    expect(mockComponent).toBeNull();
  });
});
