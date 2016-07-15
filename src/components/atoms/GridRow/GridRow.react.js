import React, { Component, PropTypes } from 'react';

import css from './GridRow.css';

export default class GridRow extends Component {
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

GridRow.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
