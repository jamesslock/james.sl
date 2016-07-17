import React, { Component, PropTypes } from 'react';
import {Motion, spring} from 'react-motion';

import styles from './Animate.css';

export default class AnimateFadeIn extends Component {
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
					opacity: 0,
				}}
				style={{
					opacity: spring(1, {stiffness: 50, damping: 30}),
				}}>

				{ value =>
					<div
						className={classNames}
						style={{
							opacity: value.opacity
						}}>

						{children}

					</div>
				}
			</Motion>
    )}
};

AnimateFadeIn.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
