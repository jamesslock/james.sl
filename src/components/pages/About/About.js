import React, {Component} from "react";
import { Link } from 'react-router';
import Image    from '../../atoms/Image/Image.js';

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
				<p>
					I'm a data driven, and usability-focused engineer with ten years working in UI/UX & front-end development. In 2013 I sold everything I owned and left to travel the world, working remotely, learning from new cultures and living a minimalistic life and now living in New York City.
				</p>
				<p>
					Front-end developer & user experience engineer at Unroll.Me
				</p>
				<p>
					Co-founder & Managing Director of design/UX studio Simple as Milk which works with single person startups, YC Alumni, and VC-backed startups, right through to Fortune 500 enterprises.
				</p>
				<p>
					I'm a keen public speaker, speaking at a variety of conferences such as Hybrid Conf & providing input in design panels.
				</p>
				<p>
					Passionate about open source & charity work, currently contributing to Ghost.org & helping out as the technical lead at the fantastic charity The School Fund.
				</p>
			</Hero>

      <Section size="large">
        <Container>
          <Image
            src="/img/one-bag-nomad-30.jpg"
            width="1400"
            height="934"
          />
        </Container>
      </Section>
      </div>
    )
  }
}
