import React, { Component, PropTypes } from 'react';
import LazyLoad from 'react-lazy-load';

// Import Atom Components
import AnimateFadeIn    from '../../atoms/Animate/AnimateFadeIn.js';

import s from './Image.css';

export default class Hero extends Component {
  render() {

    const {
      className,
      children,
			src,
			alt,
			width,
			layout,
			height,
			caption,
      ...remainingProps,
    } = this.props;

    const classNames = [
      s.root,
      s ? s[s] : null,
			layout ? s[layout] : null,
      className,
    ].join(' ');

		const aspectRatio = height / width * 100;

		const aspectStyle = {
		  paddingTop: aspectRatio + '%'
		};


    return (
			<figure className={classNames}>
				<div className={s.aspectRatio} style={aspectStyle}>
					<div className={s.spinner}/>
					<picture className={s.picture}>
						<LazyLoad offset="500">
							<AnimateFadeIn>
			     			<img src={src} alt={alt} width={width} height={height}/>
							</AnimateFadeIn>
				    </LazyLoad>
					</picture>
				</div>

					{ caption ?
          		<figcaption className={s.caption}>{caption}</figcaption>
	          :
	            null
	        }
			</figure>
    )}
};

Hero.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
	size: PropTypes.oneOf([
    'left',
  ]),
};
