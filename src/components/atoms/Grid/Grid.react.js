import React, { Component, PropTypes } from 'react';

import css from './Grid.css';

export default class Grid extends Component {
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

Grid.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
