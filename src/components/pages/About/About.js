import React, {Component} from "react";
import { Link } from 'react-router';

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';
import Hero       from '../../atoms/Hero/Hero.js';
import AnimateFadeIn    from '../../atoms/Animate/AnimateFadeIn.js';
import AnimateSlideUp    from '../../atoms/Animate/AnimateSlideUp.js';

// Import Molecules Components

// Import Organism Components

// Import Styles
import s from './About.css';
import {verticalCenter} from 'global/helpers.css';

export default class About extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <div>
        <Hero size="full" className={verticalCenter}>
          <Section size="large">
            <Container className={s.flex}>
              <Container size="small" align="left" className={verticalCenter}>
                <AnimateSlideUp>
                  <h1>James Seymour-Lock</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </AnimateSlideUp>
              </Container>
              <div className={s.aside}>
                <AnimateFadeIn>
                  <img src="/img/jamesMenu.jpg" />
                </AnimateFadeIn>
              </div>
            </Container>
          </Section>
        </Hero>
      </div>
    )
  }
}
