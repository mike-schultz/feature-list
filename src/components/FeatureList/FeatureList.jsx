import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem.jsx';
import './FeatureList.scss';

/**
  * @class FeatureList
  * @description Defines a list of FeatureItems. Acts as a recursive shell to iterate subfeatures.
  * @props {string} key - The title of the feature.
  * @props {number} level - The depth of the feature list if its nested, 0 otherwise.
 */
class FeatureList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const level = this.props.level || 0;
    const classState = 'feature-list' ;
    const attrs = {};
    if(level !== 0) {
      attrs['data-expanded'] = this.props.expanded;
    }

    // "No data"/loading state - for when the API has an error, or connection is slow.
    let noDataElement;
    if(this.props.items.length === 0) {
      noDataElement = <li class="feature-list__nodata"></li>;
    }
    return (
      <ul className='feature-list' {...attrs}>
        {this.props.items.map((item, index) => {
          return <FeatureItem key={`feature-item-${level}-${index}`} item={item} level={level+1}/>
        })}
        {noDataElement}
      </ul>
    );
  }
}

export default FeatureList;
