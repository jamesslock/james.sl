import React, { Component, PropTypes } from 'react';
import {Motion, spring} from 'react-motion';

import styles from './Animate.css';

export default class AnimateSlideRight extends Component {
  render() {

    const {
      className,
      children,
      ...remainingProps,
    } = this.props;

    const classNames = [
      styles.root,
      className,
    ].join(' ');


    return (
			<Motion
				defaultStyle={{
					translateX: -100,
					opacity: 0,
				}}
				style={{
					translateX: spring(0, {stiffness: 100, damping: 8}),
					opacity: spring(1, {stiffness: 50, damping: 30}),
				}}>

				{ value =>
					<div
						className={classNames}
						style={{
							transform: `translateX(${value.translateX}px)`,
							opacity: value.opacity
						}}>

						{children}

					</div>
				}
			</Motion>
    )}
};

AnimateSlideRight.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
