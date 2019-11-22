import React, { Component } from 'react';
import './HCIcon.scss';

/**
  * @class HCIcon
  * @description Defines a component wrapper for the features list.
  * This component has an added feature of display a "disabled" bar over the icon.
  * The font-family was taken from the hipcamp.com website.
  * @props {string} type - the type of icon to render.
  * @props {boolean} disabled - whether the icon is disabled or not.
 */
class HCIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let className = `hc-awesome-${this.props.type} hc-icon`;
    className += (this.props.disabled) ? ' hc-icon--disabled' : '';
    return (
      <span className={className}></span>
    );
  }
}

export default HCIcon;
