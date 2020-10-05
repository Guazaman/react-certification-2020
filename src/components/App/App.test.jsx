import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';

describe('Test the app renders', () => {
  it('should render the application container', () => {
    const container = render(<App />);
    expect(container).not.toBeNull();
  });
});
