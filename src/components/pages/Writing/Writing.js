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
import s from './Writing.css';

export default class Writing extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <div>
        <Hero
          title="Writing"
        />

				<Section>
    			<Container>
            <AnimateSlideUp>
         			<ContentList>
                <ContentListItem
                  title="Bypass wifi time limits with a simple MAC address spoof"
                  description="If you’re like me and spend a lot of time in airports or hotels, 30 minutes per day restrictions on free wifi is the bane of your existence."
                  link="/writing/bypass-wifi-time-limit-restrictions"
                />
                <ContentListItem
                  title="Hack to Start podcast interview"
                  description="Hack to Start is a podcast focused on interesting people and the innovative ways they achieve success, interviewing a range of people from founders and designers through to marketing and growth people."
                  link="/writing/hack-to-start-podcast-interview"
                />
                <ContentListItem
                  title="My minimalist digital nomad backpack"
                  description="A new nightclub was opening locally and needed a photographer to shoot at the opening event. Having never done nightclub photography before, and with only a little experience shooting events for friends, conferences, and startup launches, I was unsure about jumping in at the deep end."
                  link="/writing/my-minimalist-digital-nomad-backpack"
                />
                <ContentListItem
                  title="Getting back into iPhone photography"
                  description="They say the best camera is the one you have with you, in today’s age it’s very rare to be without your smartphone, I know I feel naked without mine and I rely on it more than any other object in my life."
                  link="/writing/getting-back-into-iphone-photography"
                />
                <ContentListItem
                  title="A guide to taking better travel photography photos"
                  description="I have traveled to 14 countries so far, mostly Europe, but also Egypt, America and the Philippines. As a nomad photographer I have learnt the majority of my skills while on the move."
                  link="/writing/how-to-take-better-travel-photography-photos"
                />
                <ContentListItem
                  title="An old country with new eyes"
                  description="Travel is uniquely remarkable because it forces you out of your comfort zone, plunges you deep into the unknown, new experiences and new people."
                  link="/writing/an-old-country-with-new-eyes"
                />
                <ContentListItem
                  title="Six months since I sold everything and left to travel the world"
                  description="I thought I’d take this milestone opportunity to reflect on what I’ve learned so far, what I’ve enjoyed the most, what I wish I’d done differently and to share what I plan on doing next."
                  link="/writing/six-months-since-i-sold-everything-and-left-to-travel-the-world"
                />
								<ContentListItem
                  title="A foray into nightclub photography"
                  description="I’ve found that you really don’t need that much stuff to live and travel as a digital nomad. While planning the transition I was looking online for ‘the best travel x’ or ‘the top 10 must-have travel items’, and what I’ve learnt is that it’s bullshit."
                  link="/writing/a-foray-into-nightclub-photography"
                />
								<ContentListItem
                  title="The start of something more"
                  description="Back in December 2010 I received a tweet-enquiry from a talented designer, looking to rebrand his company. David ran a print design studio called Milk Design and was rebranding it to Simple as Milk, for which he needed a new website."
                  link="/writing/the-start-of-something-more"
                />
								<ContentListItem
                  title="Always told I would fail"
                  description="One of my earliest memories is of a kick-ass Action Man. This Action Man was the tits, seriously. He came with the most awesome guns ever and cost at least three times as much as the other action men on the shelf. I was about 5 or 6 at the time and directly under the desire to be him, I just had to own him."
                  link="/writing/always-told-i-would-fail"
                />
            	</ContentList>
            </AnimateSlideUp>
       		</Container>
    		</Section>
      </div>
    )
  }
}
