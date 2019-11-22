import React from 'react';
import { render } from '@testing-library/react';
import HCIcon from './HCIcon.jsx';

it('renders a toilet', () => {
  const { container, getByText } = render(<HCIcon type="toilet"/>);
  expect(container.querySelector('.hc-awesome-toilet')).toBeDefined();
});

it('renders a toilet with a absent bar', () => {
  const { container, getByText } = render(<HCIcon type="toilet" disabled/>);
  expect(container.querySelector('.hc-awesome-toilet')).toBeDefined();
  expect(container.querySelector('.hc-icon--disabled')).toBeDefined();
});