import React, { Component, PropTypes } from 'react';

import css from './Logo.css';
//import imageLogo from './Logo.svg';

export default class Logo extends Component {
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
      <img src='/img/Logo.svg' className={classNames} width="40" height="46" />
    )
  }
};

Logo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
