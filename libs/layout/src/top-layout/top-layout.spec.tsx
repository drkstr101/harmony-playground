import React from 'react';
import { render } from '@testing-library/react';
import { BasicTopLayout } from './top-layout.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTopLayout />);
  const rendered = getByText('hello from TopLayout');
  expect(rendered).toBeTruthy();
});
