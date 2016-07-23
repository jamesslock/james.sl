import React, { Component, PropTypes } from 'react';

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';
import AnimateFadeIn    from '../../atoms/Animate/AnimateFadeIn.js';
import AnimateSlideRight    from '../../atoms/Animate/AnimateSlideRight.js';

import s from './Hero.css';

export default class Hero extends Component {
  render() {

    const {
      className,
      children,
      title,
      size,
      ...remainingProps,
    } = this.props;

    const classNames = [
      s.root,
      s ? s[s] : null,
      size ? s[size] : null,
      className,
    ].join(' ');


    return (

      <div
        className={classNames}
        {...remainingProps}
      >
        <Section size="large">
          <Container>
            <AnimateSlideRight>
              { title ?
                  <h1 className={s.title}>{title}</h1>
                :
                  null
              }
            </AnimateSlideRight>
            { children ?
              <AnimateFadeIn>
                <div className={s.intro}>
                  {children}
                </div>
              </AnimateFadeIn>
            :
              null
            }
          </Container>
        </Section>
      </div>
    )}
};

Hero.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'full',
  ]),
};
