import React, {Component} from "react";
import { Link } from 'react-router';

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';
import Hero       from '../../atoms/Hero/Hero.js';
import AnimateSlideUp    from '../../atoms/Animate/AnimateSlideUp.js';
import AnimateSlideRight    from '../../atoms/Animate/AnimateSlideRight.js';

// Import Molecules Components
import ContentList       from '../../molecules/ContentList/ContentList.js';
import ContentListItem       from '../../molecules/ContentList/ContentListItem.js';

// Import Organism Components

// Import Styles
import s from './Reading.css';
import {verticalCenter} from 'global/helpers.css';

export default class Reading extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <div>
      <Hero className={verticalCenter}>
        <Section size="large">
          <Container>
            <AnimateSlideRight>
              <h1 className={s.titleLarge}>Reading</h1>
            </AnimateSlideRight>
          </Container>
        </Section>
      </Hero>
				<Section>
    			<Container>
            <AnimateSlideUp>
              <ContentList>
                <ContentListItem
                  title="Feuchtgebiete"
                  link="/"
                  description="Nach einer missglückten Intimrasur liegt die 18-jährige Helen auf der Inneren Abteilung von Maria Hilf. Dort widmet sie sich jenen Bereichen ihres Körpers, die gewöhnlich als unmädchenhaft gelten."
                />
              </ContentList>
            </AnimateSlideUp>
       		</Container>
    		</Section>
      </div>
    )
  }
}
