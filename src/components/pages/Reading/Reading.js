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
import s from './Reading.css';

export default class Reading extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <div>
        <Hero>
          <Section size="large">
            <Container>
							<h1>Reading</h1>
						</Container>
          </Section>
        </Hero>
				<Section>
    			<Container>
            <ContentList>
              <ContentListItem
                title="Feuchtgebiete"
                link="/"
                description="Nach einer missglückten Intimrasur liegt die 18-jährige Helen auf der Inneren Abteilung von Maria Hilf. Dort widmet sie sich jenen Bereichen ihres Körpers, die gewöhnlich als unmädchenhaft gelten."
              />
            </ContentList>
       		</Container>
    		</Section>
      </div>
    )
  }
}
