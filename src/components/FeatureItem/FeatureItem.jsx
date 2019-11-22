import React, { Component } from 'react';
import FeatureList from '../FeatureList/FeatureList.jsx';
import HCIcon from '../HCIcon/HCIcon.jsx';
import './FeatureItem.scss';

/**
 * @class FeatureItem
 * @description Defines a li element that displays a feature of a campsite, whether it's
 * available, and optional subfeatures.
 * @props {string} item.title - the title of the feature
 * @props {boolean} item.presence - if the feature is available or not at the site
 * @props {array} item.subfeatures - if the feature has any subfeatures (empty array if none)
 */
class FeatureItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.toggleList = this.toggleList.bind(this);
  }
  render() {
    let childFeaturesElement;
    let expandElement;
    const {title, presence, subfeatures} = this.props.item;
    // Dynamically changing or logic level attributes.
    const attrs = {};
    // Static styling of the item
    const classNames = [
      (presence) ? 'feature-item--present' : 'feature-item--absent',
    ];

    if(subfeatures.length > 0) {
      expandElement = <div className="feature-item__toggle"></div>;
      childFeaturesElement = <FeatureList expanded={this.state.expanded} items={subfeatures} level={this.props.level + 1}/>
      classNames.push('feature-item--collapsible');
      // Add an expanded to the current element
      attrs['data-expanded'] = this.state.expanded;
    }

    return (
      <li className={['feature-item', ...classNames].join(' ')} {...attrs}>
        <header className="feature-item__header" onClick={this.toggleList}>
          {expandElement}
          <HCIcon type={iconLookup(title)} disabled={!presence}/>
          <div className="feature-item-header__title">{title}</div>
        </header>
        {childFeaturesElement}
      </li>
    );
  }
  toggleList() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }
}

/**
 * @function iconLookup 
 * @description Assuming that the API is a constraint and not modifying
 * it's results to pass the icon type, this function fuzzy matches a string 
 * (can be a sentence) with an icon.
 * @param {String} text - A string to search for keywords
 */
function iconLookup(text) {
  const iconRef = {
    'toilet': ['toilet'],
    'trash': ['trash', 'bin'],
    'shower': ['shower'],
    'pets': ['pets'],
    'signs-left-right': ['pack in, pack out']
  };
  return Object.keys(iconRef).find((icon) => {
    const result = iconRef[icon].some((token) => text.toLowerCase().includes(token)); 
    return result;
  }) || '';
}

export default FeatureItem;
