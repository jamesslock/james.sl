import React, { Component, PropTypes } from 'react';

import css from './Container.css';

export default class Container extends Component {
  render() {

    const {
      className,
      children,
      size,
      ...remainingProps,
    } = this.props;

    const classNames = [
      css.root,
      css ? css[css] : null,
      size ? css[size] : null,
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

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'smallest',
    'full',
  ]),
};
