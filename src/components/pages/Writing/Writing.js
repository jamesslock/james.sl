import React, {Component} from "react";
import { Link } from 'react-router';

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';
import Hero       from '../../atoms/Hero/Hero.js';

// Import Molecules Components
import ContentList       from '../../molecules/ContentList/ContentList.js';
import ContentListItem       from '../../molecules/ContentList/ContentListItem.js';

// Import Organism Components

// Import Styles
import s from './Writing.css';

export default class Writing extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <div>
        <Hero>
          <Section size="large">
            <Container>
							<h1>Writing</h1>
						</Container>
          </Section>
        </Hero>
				<Section>
    			<Container>
       			<ContentList>
              <ContentListItem
                title="My minimalist digital nomad backpack"
                description="A new nightclub was opening locally and needed a photographer to shoot at the opening event. Having never done nightclub photography before, and with only a little experience shooting events for friends, conferences, and startup launches, I was unsure about jumping in at the deep end."
                link="/post"
              />
              <ContentListItem
                title="A foray into nightclub photography"
                description="I’ve found that you really don’t need that much stuff to live and travel as a digital nomad. While planning the transition I was looking online for ‘the best travel x’ or ‘the top 10 must-have travel items’, and what I’ve learnt is that it’s bullshit."
                link="/a-foray-into-nightclub-photography"
              />
          	</ContentList>
       		</Container>
    		</Section>
      </div>
    )
  }
}
