import React, { Component, PropTypes } from 'react';

import css from './GridItem.css';

export default class GridItem extends Component {
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

GridItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
