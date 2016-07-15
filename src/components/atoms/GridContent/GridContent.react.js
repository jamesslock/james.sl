import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import css from './GridContent.css';

export default class GridContent extends Component {
  render() {

    const {
      className,
      children,
      style,
      type,
      position,
      image,
      ...remainingProps,
    } = this.props;

    const classNames = [
      css.root,
      css ? css[css] : null,
      style ? css[style] : null,
      className,
    ].join(' ');

    var backgroundImage = {
      backgroundImage: 'url(' + image + ')',
      backgroundPosition: position,
    }

    return type === 'caseStudy' ?
        <Link
            className={classNames}
            style={backgroundImage}
            {...remainingProps}
        >
            {children}
        </Link>

        :

        <div
            className={classNames}
            style={backgroundImage}
            {...remainingProps}
        >
            {children}
        </div>

  }
};

GridContent.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.oneOf([
    'square',
  ]),
  varient: PropTypes.oneOf([
    'image',
  ]),
  image: PropTypes.string,
};
