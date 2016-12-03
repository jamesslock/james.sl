import React, { Component, PropTypes } from 'react';

import s from './ButtonGroup.css';

export default class ButtonGroup extends Component {
  render() {

    const {
      className,
      children,
      varient,
      ...remainingProps,
    } = this.props;

    const classNames = [
      s.root,
      varient ? s[varient] : null,
      s ? s[s] : null,
      className,
    ].join(' ');


    return (
			<div className={classNames}>
   			{children}
   		</div>
    )
  }
};

ButtonGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  varient: PropTypes.oneOf([
    'link',
    'outline',
  ]),
  onClick: PropTypes.func,
};
