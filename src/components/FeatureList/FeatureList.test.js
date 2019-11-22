import React from 'react';
import { render } from '@testing-library/react';
import FeatureList from './FeatureList.jsx';

it('renders a feature list', () => {
  const features = [
    {
      "title": "Toilet",
      "presence": true,
      "subfeatures": []
    },
    {
      "title": "Shower",
      "presence": false,
      "subfeatures": [
        {
          "title": "Outdoor shower",
          "presence": false,
          "subfeatures": []
        }
      ]
    },
  ];
  const { container, getByText } = render(<FeatureList items={features} />);

  expect(container).toBeDefined();
  
  // Three list elements should be rendered
  expect(container.querySelectorAll('li').length).toBe(3);

  // One of those list elements should be collapsible
  expect(container.querySelectorAll('.feature-item--collapsible').length).toBe(1);
});

