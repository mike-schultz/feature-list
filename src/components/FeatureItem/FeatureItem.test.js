import React from 'react';
import { render } from '@testing-library/react';
import FeatureItem from './FeatureItem.jsx';

it('renders a feature item', () => {

  const item = {
    title: 'A Fancy Shower',
    subfeatures: [
      {
        "title": "Outdoor shower",
        "presence": false,
        "subfeatures": []
      }
    ],
    presence: true,
  }

  const { container, getByText } = render(<FeatureItem item={item} />);

  expect(container).toBeDefined();
  
  // Expect the element to render text
  expect(getByText('A Fancy Shower')).toBeInTheDocument();
  
  // Two list items should be rendered
  expect(container.querySelectorAll('li').length).toBe(2);

  // One of those list elements should be collapsible
  expect(container.querySelectorAll('.feature-item--collapsible').length).toBe(1);
});

