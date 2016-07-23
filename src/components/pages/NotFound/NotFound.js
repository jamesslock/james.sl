import React, {Component} from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';
import Hero       from '../../atoms/Hero/Hero.js';
import AnimateFadeIn    from '../../atoms/Animate/AnimateFadeIn.js';
import AnimateSlideRight    from '../../atoms/Animate/AnimateSlideRight.js';

// Import Molecules Components

// Import Organism Components

// Import Styles
import s from './NotFound.css';
import {verticalCenter} from 'global/helpers.css';

export default class NotFound extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <div>
        <Hero size="full" className={verticalCenter}>
          <Section>
            <Container>
              <AnimateSlideRight>
                <h1 className={s.heroTitle}>Page Not Found</h1>
              </AnimateSlideRight>
              <AnimateFadeIn>
                <p className={s.heroIntro}>
                  Well this is embarrassing, the page you are looking for has moved or been deleted. Sorry about that.
                </p>
              </AnimateFadeIn>
            </Container>
          </Section>
        </Hero>
      </div>
    )
  }
}
