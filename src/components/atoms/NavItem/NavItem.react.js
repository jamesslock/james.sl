import React, { Component, PropTypes } from 'react';

import css from './NavItem.css';

export default class NavItem extends Component {
  render() {

    const {
      className,
      children,
    } = this.props;

    const classNames = [
      css.root,
      css ? css[css] : null,
      className,
    ].join(' ');

    return (
      <li className={classNames}>
        {children}
      </li>
    )
  }
};

NavItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
