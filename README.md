## Feature List

This repository contains a FeatureList component the allows you to generate an expandable recursive list of features.

## Usage
The FeatureList only takes a single `items` property, which is an array of "Feature" objects.

```jsx
import FeatureList from 'feature-list-component';
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

const element = <FeatureList items={features} />
```

## Example
This repository contains a `create-react-app` boilerplate and can be run once installing dependencies `npm install`, and running the example with `npm run start`.