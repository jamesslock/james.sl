import React, { Component, PropTypes } from 'react';

import s from './Container.css';

export default class Container extends Component {
  render() {

    const {
      className,
      children,
      size,
      align,
      ...remainingProps,
    } = this.props;

    const classNames = [
      s.root,
      s ? s[s] : null,
      size ? s[size] : null,
      align ? s[align] : null,
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
  align: PropTypes.oneOf([
		'left',
    'right',
	]),
};
