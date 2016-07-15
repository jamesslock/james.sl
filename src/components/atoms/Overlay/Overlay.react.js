import React, { Component, PropTypes } from 'react';

import css from './Overlay.css';

export default class Overlay extends Component {
  render() {

    const {
      className,
      children,
      ...remainingProps,
    } = this.props;

    const classNames = [
      css.root,
      css ? css[css] : null,
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

Overlay.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
