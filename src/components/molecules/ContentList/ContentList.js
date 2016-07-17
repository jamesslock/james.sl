import React, { Component, PropTypes } from 'react';

import s from './ContentList.css';

export default class ContentList extends Component {
  render() {

    const {
      className,
      children,
      ...remainingProps,
    } = this.props;

    const classNames = [
      s.root,
      s ? s[s] : null,
      className,
    ].join(' ');

    return (

      <ul
        className={classNames}
        {...remainingProps}
      >
        {children}
      </ul>

    )

  }
};

ContentList.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
