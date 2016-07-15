import React, { Component, PropTypes } from 'react';

import styles from './Hero.css';

export default class Hero extends Component {
  render() {

    const {
      className,
      children,
      size,
      image,
      position,
      varient,
      ...remainingProps,
    } = this.props;

    const classNames = [
      styles.root,
      styles ? styles[styles] : null,
      size ? styles[size] : null,
      varient ? styles[varient] : null,
      className,
    ].join(' ');

    var backgroundImage = {
      backgroundImage: 'url(' + image + ')',
      backgroundPosition: position,
    }

    return (

      <div
        className={classNames}
        style={backgroundImage}
        {...remainingProps}
      >
        {children}
      </div>

    )}
};

Hero.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'huge',
    'full',
  ]),
  varient: PropTypes.oneOf([
    'image',
    'primary',
  ]),
  image: PropTypes.string,
};
