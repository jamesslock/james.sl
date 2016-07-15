import React, { Component, PropTypes } from 'react';

import styles from './Section.css';

export default class Section extends Component {
  render() {

    const {
      className,
      children,
      context,
      size,
      ...remainingProps,
    } = this.props;

    const classNames = [
      styles.root,
      context ? styles[context] : null,
      styles ? styles[styles] : null,
      size ? styles[size] : null,
      className,
    ].join(' ');

    return (

      <div
        className={classNames}
        {...remainingProps}
      >
        {children}
      </div>

    )

  }
};

Section.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  context: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary'
  ]),
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'huge',
  ]),
};
