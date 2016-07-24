import React, { Component, PropTypes } from 'react';

import s from './PostHeader.css';
import {verticalCenter} from 'global/helpers.css';

// Import Atom Components
import AnimateSlideRight    from '../../atoms/Animate/AnimateSlideRight.js';
import AnimateFadeIn    from '../../atoms/Animate/AnimateFadeIn.js';

export default class PostHeader extends Component {
  render() {

    const {
      className,
      children,
      title,
      image,
      date,
      publishedTime,
      ...remainingProps,
    } = this.props;

    const classNames = [
      s.root,
      s ? s[s] : null,
      className,
    ].join(' ');


    return (

      <header
        className={classNames}
        {...remainingProps}
      >
        <div className={s.titleAside}>
          <div className={verticalCenter}>
            <AnimateFadeIn>
              <time className={s.time}
                    pubDate
                    itemProp="datePublished"
                    dateTime={publishedTime}
                >
                {date}
              </time>
            </AnimateFadeIn>
            <AnimateSlideRight className={s.titleWrapper}>
              <h1 className={s.title}
                  itemProp="name"
              >
                {title}
              </h1>
            </AnimateSlideRight>
          </div>
        </div>
        <div className={s.imageAside}>
          <AnimateFadeIn className={s.imageBackground}>
            <img className={s.image} src={image} alt={title}/>
          </AnimateFadeIn>
        </div>
      </header>

    )}
};

PostHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
