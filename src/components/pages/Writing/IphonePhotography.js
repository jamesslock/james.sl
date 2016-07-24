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

export default class IphonePhotography extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <article itemScope itemType="http://schema.org/BlogPosting">
        <Container>
					<PostHeader
						title="Getting back into iPhone photography"
						date="September 2014"
						publishedTime="2013-09-04T12:00:00+02:00"
						image="/img/iphone-only-polish-tatras.jpg"/>
				</Container>
				<Container>
          <AnimateSlideUp>
  					<Section className={s.post} itemProp="description">
  						<Container align="right" size="small">
                <p>They say the best camera is the one you have with you, in today’s age it’s very rare to be without your smartphone, I know I feel naked without mine and I rely on it more than any other object in my life.</p>

                <p>I’ve only really shot a handful of what I would consider good photos of my iPhone in the past, focusing far more on shooting with my Sony A7, but on several occasions without my camera or simply being too lazy to change lenses i’ve shot on my iPhone 5.</p>

                <p>I was recently in Stockholm for Hybrid Conf and although I had my main camera with me I found myself using it less and less, in fact Dan ended up using it more than me.</p>

                <p>It was only after spending some time with Dan Rubin at the conference and chatting extensively about photography he expressed his love for the capabilities of the iPhones camera and having seen his work in the past I put aside my main camera and decided to go #iPhoneOnly for the week.</p>

                <p><img src="/img/iphone-only-stockholm-oldtown.jpg" alt=""/>
                <img src="/img/iphone-only-stockholm-afar.jpg" alt=""/>
                <img src="/img/iphone-only-stockholm-harbour.jpg" alt=""/>
                <img src="/img/iphone-only-stockholm-swimming.jpg" alt=""/>
                <img src="/img/iphone-only-stockholm-church.jpg" alt=""/></p>

                <p>Venturing out to the Hybrid conf after party with Dan we arrived over an hour late due to stopping along the way and shooting some photos of Stockholm at night.</p>

                <p><img src="/img/iphone-only-stockholm-night.jpg" alt=""/>
                <img src="/img/iphone-only-stockholm-boat.jpg" alt=""/></p>

                <h2 id="iphonephotographytipsandtricks">iPhone photography tips and tricks</h2>

                <p>A few bits i’ve learnt along the way shooting with my iPhone 5, the majority applies to not just iPhone photography but photography as a whole which I covered in a recent post “How to take better travel photography photos” so I will stick with iPhone only tips and tricks here.</p>

                <p><img src="/img/iphone-only-morski-oko-steps.jpg" alt=""/>
                <img src="/img/iphone-only-venice-bridge.jpg" alt=""/>
                <img src="/img/iphone-only-morski-oko-walking.jpg" alt=""/></p>

                <h2 id="alwayscarryabatterypack">Always carry a battery pack</h2>

                <p>If theres one downside to the iPhone is that the battery life is pretty awful, combining photo taking with social media, messaging, calls and browsing you soon run out of battery, getting lost without directions and the ability to communicate can be a nightmare, I carry the Morphie juice pack with me at all times, and gives me several additional charges.</p>

                <h2 id="turnonthecameragrid">Turn on the camera grid</h2>

                <p>The camera grid really helps setup your shots easily allowing you to utilise the rule of thirds, using the grid will also allow you to avoid wonky photos by lining up various objects or the horizon.</p>

                <h2 id="neverusethezoom">Never use the zoom</h2>

                <p>Using the zoom will destroy the quality of the photo, instead get closer to the subject or area you wish to photograph.</p>

                <h2 id="usetwohands">Use two hands</h2>

                <p>Hold your phone like you would a camera to steady the camera this helps to avoid shake and blurring keeping the photos crisp.</p>

                <h2 id="takeseveralphotos">Take several photos</h2>

                <p>I always take several photos with slight changes, playing with exposure and focus points and positioning, you can later review the best one, far more effective than having to return to take the photo again as your single shot missed the mark.</p>

                <h2 id="keepthelensclean">Keep the lens clean</h2>

                <p>With my phone coming in and out of my pocket on a hourly basis and putting other crap in my pockets it can soon get dirty very easily.</p>

                <p><img src="/img/iphone-only-morski-oko-path.jpg" alt=""/>
                <img src="/img/iphone-only-prague-underground.jpg" alt=""/>
                <img src="/img/iphone-only-york.jpg" alt=""/></p>

                <h2 id="bestiphoneappsforphotography">Best iPhone apps for photography</h2>

                <h3 id="vscocam">VSCOcam</h3>

                <p>VSCOcam is my goto tool for iPhone photography, it has a split mode to allow you to select a focus point and an exposure point giving you far better control over the images you take. VSCO also has some great built in editing options, from the basics such as exposure and sharpening to some seriously sexy filters and more advanced image adjustments, 80% of the images in this post have been taken solely with VSCOcam and 100% edited within it.</p>

                <h3 id="cortexcam">Cortex Cam</h3>

                <p>A new app to my collection, it came highly recommended from Dan Rubin, and requires a steady hand, Cortex Cam will take a photo over several seconds combining the images together to avoid distortion and provide a much higher resolution of image, perfect for landscape shots where detail is a must.</p>

                <h3 id="mixture">Mixture</h3>

                <p>Mixture is another photo editing application, and has some very advanced features for tweaking images, including light leaks and some really other fun features to play with, I find it a little too overzealous for the majority of my photos but it does have some great uses.</p>

                <h3 id="perfectlyclear">Perfectly clear</h3>

                <p>Perfectly clear is a genius little application, it can auto optimise your images for a clearer better looking image instantly, and combined with a host of features for tweaking, I use this application for its ‘beautify’ option which has some seriously powerful skin softening features for iPhone portraits.</p>

                <h3 id="over">Over</h3>

                <p>Need to add awesome text over your images, Over is the application for that.</p>

                <h3 id="instagram">Instagram</h3>

                <p>I wouldn’t count Instagram as a photography application, It’s far more for editing and sharing, I do all my editing in VSCO as I find the results far better, but its well worth a mention as a tool to follow other photographers, learn and take inspiration. Oh and you should totally follow me - <a href="https://instagram.com/jamesslock">@jamesslock</a></p>

                <hr></hr>

                <p>I’ve taken some of my favourite photos on my iPhone 5 and its slowly becoming my goto camera for many of my travel photography shots, allowing me to keep my beloved 135mm lens on my main camera full time switching to my iPhone for anything requiring less focal range.</p>

                <p>With the iPhone 6 being released this week I expect the quality of mobile and iPhone photography to continue to push the limits of whats possible and accessible to everyone to start taking great photos.</p>

              </Container>
  	        </Section>
          </AnimateSlideUp>
				</Container>
      </article>
    )
  }
}
