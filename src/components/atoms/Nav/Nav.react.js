import React, { Component, PropTypes } from 'react';

import css from './Nav.css';

export default class Nav extends Component {
  render() {

    const {
      className,
      children,
      varient,
    } = this.props;

    const classNames = [
      css.root,
      varient ? css[varient] : null,
      css ? css[css] : null,
      className,
    ].join(' ');

    return (
      <nav role='navigation' className={classNames}>
        <ul>
          {children}
        </ul>
      </nav>
    )
  }
};

Nav.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  varient: PropTypes.oneOf([
    'inline',
  ]),
};
