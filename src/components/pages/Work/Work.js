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
import s from './Work.css';

export default class Work extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <div>
      <Hero size="large" title="Work & Projects">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </Hero>

      <Section size="large">
        <Container>
					<ul className={s.list}>
						<li>
							<Image
								src="/img/demo.gif"
								width="800"
								height="600"
							/>
						</li>
						<li>
							<Image
								src="/img/desktop_hd.png"
								width="800"
								height="600"
							/>
						</li>
						<li>
							<Image
								src="/img/happyinbox.gif"
								width="800"
								height="600"
							/>
						</li>
						<li>
							<Image
								src="/img/animation5test.gif"
								width="800"
								height="600"
							/>
						</li>



     			</ul>

        </Container>
      </Section>
      </div>
    )
  }
}
