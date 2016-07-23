import React, {Component} from "react";

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';
import Hero       from '../../atoms/Hero/Hero.js';
import AnimateFadeIn    from '../../atoms/Animate/AnimateFadeIn.js';
import AnimateSlideRight    from '../../atoms/Animate/AnimateSlideRight.js';

// Import Molecules Components

// Import Organism Components

// Import Styles
import s from './Home.css';

export default class Home extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <div>
        <Hero
          size="full"
          title={["James ", <br/>, "Seymour-Lock"]}
        >
          <p>A genius, billionaire, playboy, philanthropist & pathological liar. Managing director of <a href="http://simpleasmilk.com" target="_blank" rel="noopener">Simple as Milk</a> and user experience engineer at <a href="https://unroll.me" target="_blank" rel="noopener">Unroll.Me</a>.</p>
        </Hero>
      </div>
    )
  }
}
