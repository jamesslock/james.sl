import React, { Component, PropTypes } from 'react';

import s from './Section.css';

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
      s.root,
      context ? s[context] : null,
      s ? s[s] : null,
      size ? s[size] : null,
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
    'tertiary',
		'grayDark'
  ]),
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'huge',
  ]),
};
