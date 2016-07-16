import React, { Component, PropTypes } from 'react';

import s from './Hero.css';

export default class Hero extends Component {
  render() {

    const {
      className,
      children,
      size,
      ...remainingProps,
    } = this.props;

    const classNames = [
      s.root,
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

    )}
};

Hero.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'large',
  ]),
};
