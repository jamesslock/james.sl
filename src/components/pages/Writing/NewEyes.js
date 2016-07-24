import React, {Component} from "react";
import { Link } from 'react-router';

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';
import Hero       from '../../atoms/Hero/Hero.js';
import AnimateSlideUp    from '../../atoms/Animate/AnimateSlideUp.js';


// Import Molecules Components

// Import Organisms Components
import PostHeader from '../../organisms/PostHeader/PostHeader.js';

// Import Styles
import s from './Writing.css';
import {verticalCenter} from 'global/helpers.css';

export default class NewEyes extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <article itemScope itemType="http://schema.org/BlogPosting">
        <Container>
					<PostHeader
						title="An old country with new eyes"
						date="July 2014"
						publishedTime="2013-09-04T12:00:00+02:00"
						image="/img/an-old-country-with-new-eyes.jpg"/>
				</Container>
				<Container>
          <AnimateSlideUp>
  					<Section className={s.post} itemProp="description">
  						<Container align="right" size="small">
                <p>Travel is uniquely remarkable because it forces you out of your comfort zone, plunges you deep into the unknown, new experiences and new people.</p>

                <p>Travel can also be totally unremarkable if you don’t make the most of it, what I found from living in a single location was the decease of becoming complacent, leading a stale life, falling into the abyss of receptiveness, travel can and could be the same.</p>

                <p>I recently hit the 6 month milestone since I left to travel the world, i’m far from seeing the world, even a sliver of what it has to offer.</p>

                <p>But what I have done is dragged myself out of the abyss and into new challenging and exciting environments. I’m pushing myself to learn new skills, meet new people and try and interact with them in their native languages, which so far has been abysmal, yet fun.</p>

                <p>I’m writing this sitting in Huragada airport ready to embark to my next destination, which so happens to be back to the UK for a music festival and a friends wedding, I will be back in the UK for 3 weeks something that up until now I have been dreading.</p>

                <p>Dreading returning to that stale boring way of living I had before I left, but then I realised that its not necessarily the UK or Eastbourne (Where I decided before I left) but is in fact myself, I let myself fall into that stupor I let myself become complacent and repetitive.</p>

                <p>I will now be returning to the UK with fresh eyes, to take what I have learned from the 6 months of travel and apply it back in the country I was counting the days down to leave and dreading to return too.</p>

                <p>I will approach it how I approach any new country, treating it as a new learning experience, meeting new people and doing things that I would not normally think to do.</p>

                <p>Of course I will be meeting and spending time with old friends, but I have also returned to meet old friends in Egypt and Oslo, I won’t return to the stupor of complacency while there and will make sure to enjoy every moment.</p>

                <p>Something myself and the English have always had trouble with being optimistic, looking forward to the good, and after writing this i am suddenly full of interest, I no longer feel like I am embarking back to the place I needed so badly to leave, but instead returning with look upon the UK with fresh eyes and explore as if it was a new.</p>

                <p>After all I have nothing to worry about, I leave again in 3 weeks for my next destination.</p>
              </Container>
  	        </Section>
          </AnimateSlideUp>
				</Container>
      </article>
    )
  }
}
