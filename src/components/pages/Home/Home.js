import React, {Component} from "react";
import Helmet from "react-helmet";

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
        <Helmet
          title="James Seymour-Lock"
          meta={[
						{"name": "referrer", "content": "origin"},
						{"name": "description", "content": "Managing director of Simple as Milk and user experience engineer at Unroll.Me."}
          ]}
          link={[
						{"rel": "canonical", "href": "http://james.sl"}
					]}
        />
        <Hero
          size="full"
          title={["James ", <br/>, "Seymour-Lock"]}
        >
          <p>Managing partner of <a href="http://simpleasmilk.com" target="_blank" rel="noopener">Simple as Milk</a>, lead experience engineer at <a href="https://unroll.me" target="_blank" rel="noopener">Unroll.Me</a> & adviser for <a href="https://theschoolfund.org" target="_blank" rel="noopener">The School Fund</a>.</p>
        </Hero>
      </div>
    )
  }
}
