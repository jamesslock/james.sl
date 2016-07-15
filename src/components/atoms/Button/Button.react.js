import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// Import Atom Components
import Flag from '../../atoms/Flag/Flag.react.js';

import styles from './Button.css';
import flag from '../Flag/Flag.css';

export default class Button extends Component {
  render() {

    const {
      className,
      active,
      href,
      type,
      children,
      context,
      size,
      varient,
      fullWidth,
      onClick,
      ...remainingProps,
    } = this.props;

    const classNames = [
      styles.root,
      context ? styles[context] : null,
      varient ? styles[varient] : null,
      styles ? styles[styles] : null,
      size ? styles[size] : null,
      fullWidth ? styles.fullWidth : null,
      className,
    ].join(' ');

    return (
      href ?
        <Link
          className={classNames}
          to={href}
          {...remainingProps}
        >
          {children}
        </Link>
      :
        <button
          className={classNames}
          {...remainingProps}
        >
          {children}
        </button>

  )}
};

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  context: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'positive',
    'negative',
  ]),
  varient: PropTypes.oneOf([
    'link',
    'outline',
  ]),
  style: PropTypes.oneOf([
    'soft',
    'hard',
  ]),
  size: PropTypes.oneOf([
    'natural',
    'small',
    'large',
    'huge',
  ]),
  onClick: PropTypes.func,
};
