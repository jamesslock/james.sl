import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import s from './Button.css';

export default class Button extends Component {
  render() {

    const {
      className,
      active,
      href,
			to,
			target,
      children,
      context,
      size,
      style,
      varient,
      fullWidth,
      onClick,
      ...remainingProps,
    } = this.props;

    const classNames = [
      s.root,
      context ? s[context] : null,
      varient ? s[varient] : null,
      s ? s[s] : null,
      size ? s[size] : null,
      href ? s[href] : null,
			target ? s[target] : null,
			to ? s[to] : null,
      fullWidth ? s.fullWidth : null,
      className,
    ].join(' ');


    return (
      to ?

        <Link
          className={classNames}
          activeClassName={s.active}
          to={to}
          {...remainingProps}
        >
          {children}
        </Link>

      : href ?

				<a
					className={classNames}
					href={href}
					target={target}
					{...remainingProps}
				>
					{children}
				</a>

			:

        <button
          className={classNames}
          onClick={onClick}
          {...remainingProps}
        >
          {children}
        </button>

    )
  }
};

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  context: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'positive',
    'negative',
  ]),
  varient: PropTypes.oneOf([
    'link',
    'outline',
  ]),
  style: PropTypes.oneOf([
    'soft',
    'hard',
  ]),
  size: PropTypes.oneOf([
    'natural',
    'small',
    'large',
    'huge',
  ]),
  onClick: PropTypes.func,
};
