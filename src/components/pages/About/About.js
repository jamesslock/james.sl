import React, {Component} from "react";
import { Link } from 'react-router';

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';
import Hero       from '../../atoms/Hero/Hero.js';
import AnimateFadeIn    from '../../atoms/Animate/AnimateFadeIn.js';
import AnimateSlideRight    from '../../atoms/Animate/AnimateSlideRight.js';
import AnimateSlideUp    from '../../atoms/Animate/AnimateSlideUp.js';

// Import Molecules Components

// Import Organism Components

// Import Styles
import s from './About.css';

export default class About extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <div>
      <Hero size="large" title="About">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </Hero>

      <Section size="large">
        <Container>
          <AnimateSlideUp>
            <img src="/img/one-bag-nomad-30.jpg"/>
          </AnimateSlideUp>
        </Container>
      </Section>
      </div>
    )
  }
}
