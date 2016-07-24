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

export default class Post extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <article itemScope itemType="http://schema.org/BlogPosting">
        <Container>
					<PostHeader
						title="Six months since I sold everything and left to travel the world"
						date="June 2014"
						publishedTime="2013-09-04T12:00:00+02:00"
						image="/img/walking-in-malmo.jpg"/>
				</Container>
				<Container>
          <AnimateSlideUp>
  					<Section className={s.post} itemProp="description">
  						<Container align="right" size="small">
                <p>It’s now been 6 months since <Link to="/writing/the-world-is-my-oyster/">I sold everything</Link> in the UK and left to travel the world, and so far it has been the most enjoyable and enlightening experience of my life.</p>

                <p>I thought I’d take this milestone opportunity to reflect on what I’ve learned so far, what I’ve enjoyed the most, what I wish I’d done differently and to share what I plan on doing next.</p>

                <p><img src="/img/walking-in-malmo.jpg" alt=""/></p>

                <h2 id="howlongistayedput">How long I stayed put</h2>

                <p>Unlike many awesome travellers I know and have been following online, I’m not jumping from country to country every few days. Instead, I’m spending at least 1 month at a time in each country or city. The main reason for this is convenience but also so that I can focus on working as much as exploring.</p>

                <p><img src="/img/working-in-berlin.jpg" alt=""/>
                <img src="/img/traveling-the-world-looking-back-6.jpg" alt=""/></p>

                <p>I’m still working full time while travelling, still running my company. I can focus better on work when I’m grounded, using days off and weekends to go out and have fun. I need 4-6 hours a day where I can sit down in a compatible environment, with good wifi so I can rock out some work and reply to emails, etc.</p>

                <p>With the exception of the 2 months I’m currently spending in Egypt, staying with <a href="https://ghost.org/">Ghost</a>-founder <a href="https://twitter.com/johnonolan">John O'Nolan</a>, I’ve lived solely in AirBnbs. While they’re not the cheapest option, they provide a good solid internet connection and a great working environment. Up until 3 months ago I had been travelling with my business partner David and our friend Chad, where our budget of £400/mo each gave us a good amount of options. You can find an AirBnb for that amount easily in most cities (apart from Oslo, that place is fucking expensive.)</p>

                <h2 id="budget">Budget</h2>

                <p>So let’s talk about budget. Since I’m still working full-time there hasn’t been much need to be a frugal traveller, although it is something I plan to have a go at, even if it’s just for the experience. Hostels look like fun…</p>

                <ul>
                <li>Accommodation £100/week</li>
                <li>Eating out £150/week</li>
                <li>Eating in £40/week</li>
                <li>Coffee £50/week</li>
                <li>Alcohol £100/week</li>
                <li>Local travel £40/week</li>
                <li>Activities £100/week</li>
                <li>Local SIM card £10/week</li>
                <li>Misc £50/week</li>
                </ul>

                <p><em>(Roughly £640/week)</em></p>

                <p><img src="/img/pulled-pork-in-copenhagen.jpg" alt=""/></p>

                <h2 id="countries">Countries</h2>

                <p>Since leaving the UK I’ve been to 6 countries and I’m in my last week of a two month stint in El Gouna, Egypt.</p>

                <p><img src="/img/posing-in-poland.jpg" alt=""/></p>

                <p>I learned to snowboard in Norway, I mountain biked in Poland, I shot an AK47 in the Chezch Republic, I learnt to Kiteboard in Egypt, I raved until 10am in Germany and puked up from drinking too much in Denmark.</p>

                <p><img src="/img/traveling-the-world-looking-back-17.jpg" alt=""/></p>

                <p><img src="/img/traveling-the-world-looking-back-5.jpg" alt=""/></p>

                <h2 id="documentingthejourney">Documenting the journey</h2>

                <p>When I set out, I planned to write about everything, creating a stream of posts for every country and taking hundreds of photos to share with the world, that just hasn’t happened. I’ve been far too busy enjoying myself and juggling the work/personal life balance, something I’m still learning along the way.</p>

                <p><img src="/img/traveling-the-world-looking-back-15.jpg" alt=""/>
                <img src="/img/traveling-the-world-looking-back-10.jpg" alt=""/></p>

                <p>I have over 40 draft blog post ideas that are waiting to be finished. I’m still very new to blogging and it’s only just starting to flow for me. This is something I hope to improve, I want to be able to write and share more with the world.</p>

                <p><img src="/img/traveling-the-world-looking-back-2.jpg" alt=""/></p>

                <h2 id="thingsivelearnedalongtheway">Things I’ve learned along the way</h2>

                <p>You don’t need everything you thought you did. Before leaving to travel I spent ages thinking about what to take and how it would fit in. I managed to slim everything down to just fit in one bag. I’ve chucked stuff out along the way, such as my Rode Mic for recording video, I got rid of anything I wasn’t using, it was just taking up space.</p>

                <p><img src="/img/traveling-the-world-looking-back-4.jpg" alt=""/></p>

                <p>I’ve also accumulated a few things including 2 new small camera lenses for every day use. The lenses I originally brought with me were too big and bulky for walking through crowded city streets. I sent back some snowboarding gear too, after my last month of snowboarding in Poland. I’ll no doubt pick that back up in the snowboarding season next year.</p>

                <p>I also have a new skateboard for reasons you may already read in my previous post <a href="finding-the-perfect-travel-partner/">here</a>: which is currently back in the UK as there’s no need for it in Egypt with all this sand!</p>

                <p><img src="/img/hanging-in-hamburg-1.jpg" alt=""/></p>

                <p>It turns out that I need far less clothes that I thought, you’re welcome ladies. So I ditched even more. I’m now down to 3 t-shirts, 4 pairs of boxers and 1 pair of socks. They can be easily hand-washed and dried in a single day, so it was overkill having too many. I never did wear my smart sexy black shirt…</p>

                <p>Online check-in’s are a God send. Fuck turning up 2 hours before a flight! I’ve got it down to 15 minutes - turn up, walk through security (I’ve got that down too) and straight onto the plane, no more hanging about in airports.</p>

                <p><img src="/img/traveling-the-world-looking-back-19.jpg" alt=""/></p>

                <h2 id="workingwhileontheroad">Working while on the road</h2>

                <p>Since I’m only really travelling at the most once a month, work has been fairly consistent or at least it was until Egypt, (damn heat, power-cuts and shoddy wifi).</p>

                <p><img src="/img/traveling-the-world-looking-back-18.jpg" alt=""/></p>

                <p>I’m keeping in contact with the team via Google Hangouts, Skype and Slack. All my clients are based in the U.S. anyway, so communication with them hasn’t changed. I still screw up meetings due to different time zones but I did that in the UK too.</p>

                <p><img src="/img/traveling-the-world-looking-back-8.jpg" alt=""/></p>

                <p>In most countries I’m 100x more productive than I was in the UK, kicking ass in the early morning so that I can go out and explore after lunchtime.</p>

                <h2 id="meetingpeople">Meeting people</h2>

                <p>I’ve met some awesome people while travelling, especially when the travel is based around a set sport like Snowboarding or Kiteboarding, plus hanging out with random people I met at bars or on Tinder.</p>

                <p><img src="/img/coffee-shops.jpg" alt=""/></p>

                <p>The first 5 months were spent travelling with 2 friends, so making new friends wasn’t top of the list. Meeting new people when you’re already a group of 3 guys is much harder, I’m sure you can imagine, as it made us far less approachable. When out solo it’s easier to strike up some interesting conversations.</p>

                <p><img src="/img/steel-panther.jpg" alt=""/></p>

                <p>I’ve lost count of the amount of times I’ve been asked about what I’m doing and why. It always makes for some fascinating conversations but the thing I take away from it the most is how lucky I am to do this. They all wish they could do the same and I tell them that they can, it just takes some work.</p>

                <p><img src="/img/traveling-the-world-looking-back-3.jpg" alt=""/></p>

                <h2 id="thenext6months">The next 6 months</h2>

                <p>So what’s next you ask? Well, I finish up in Egypt in a week and then I will be heading back to the UK for Sonisphere Festival and a friend’s wedding. After that I think I will be returning to Egypt for a month before heading to <a href="http://www.unknowncroatia.com/">Unknown festival</a> in Croatia. Then I’ll be touring the country and doing some more Kitesurfing around Croatia’s beautiful seas and coves.</p>

                <p><img src="/img/auschwitz-in-poland.jpg" alt=""/></p>

                <p>I’ve learned so much about the world and about different countries, but most of all, about <Link to="/writing/the-weight-of-things-owning-nothing-living-free/">myself</Link>. I’ve no plans to stop this journey any time soon.</p>

                <blockquote>
                <p>“Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. So throw off the bowlines, sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”
                </p>
                – Mark Twain
                </blockquote>

              </Container>
  	        </Section>
          </AnimateSlideUp>
				</Container>
      </article>
    )
  }
}
