import React, {Component} from "react";
import { Link } from 'react-router';

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';

// Import Molecules Components

// Import Organisms Components
import Post from '../../organisms/Post/Post.js';

// Import Styles
import s from './Writing.css';

export default class NomadBackpack extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <Post
        title="My minimalist digital nomad backpack"
        date="September 2013"
        publishedTime="2013-09-04T12:00:00+02:00"
        modifiedTime="2013-09-04T12:00:00+02:00"
        image="/img/stockholm-old-town-photoshoot-9.jpg"
        description="I’ve found that you really don’t need that much stuff to live and travel as a digital nomad."
        url="my-minimalist-digital-nomad-backpack"
      >
  			<Section>
  				<Container align="right" size="small">
            <p>I’ve found that you really don’t need that much stuff to live and travel as a digital nomad. While planning the transition I was looking online for ‘the best travel x’ or ‘the top 10 must-have travel items’, and what I’ve learnt is that it’s bullshit.</p>

  					<p>I don’t need a super, quick-dry, micro fibre towel or a solar powered iPhone charger, or any of the items listed in such blog posts. If I need a towel then I can pick one up easily from any country but in reality every AirBnb, hostel or hotel provide towels. Funnily enough, everywhere in the world also provides electricity to charge my iPhone too.</p>
  				</Container>
  				<aside className={s.aside}>

     			</aside>
  			</Section>
  			<Section>
  				<Container align="right" size="small">
  					<img src="/img/whats-in-my-backpack.jpg" alt="" className={s.imageRight}/>
  					<h2 id="sowhatdoicarry">So what do I carry?</h2>

  					<h3 id="backpack">Backpack</h3>

  					<p>I love my <a href="http://www.onabags.com/store/messengers-and-backpacks/the-camps-bay.html">ONA Camps Bay backpack</a>, we have a special bond. It’s been everywhere with me. It originally started out as a photography bag but with it’s secure clips, robust padding, compact size and seriously hard wearing, weather-sealed leather, it’s a great choice for travel.</p>

  					<p>I’ve lugged heavy bags around in the past. When I first started traveling, my bag was considerably heavier than it is now but you soon learn the lighter the better! You really don’t need all that travel crap; even when only traveling once or twice a month a heavy bag hurts and becomes an inconvenience. I started reducing my belongings along the way, keeping only the essentials I needed.</p>

  					<h2 id="breakdownofmytravelitems">Breakdown of my travel items</h2>

  					<h3 id="tech">Tech</h3>

  					<p>The important items for a digital nomads</p>

  					<ul>
  						<li>11" Macbook Air</li>
  						<li>iPad (Second generation)</li>
  						<li>iPhone 5</li>
  						<li>Mophie Juice Pack</li>
  						<li>Assorted cables &amp; converters</li>
  					</ul>

  					<h3 id="photography">Photography</h3>

  					<p>My photography equipment takes up half of my bag space, it’s the only stuff that I have no issue carrying. I enjoy shooting photos with a variety of lenses and so I’m willing to make the sacrifice, it helps that the rest of my items are so minimal.</p>

  					<ul>
  						<li>Sony A7 Camera</li>
  						<li>Canon f4 17-40mm L</li>
  						<li>Sony f2.8 30mm</li>
  						<li>Pentacon 135mm 2.8</li>
  						<li>Carl Zeiss Jena 30mm</li>
  						<li>128GB SD card</li>
  						<li>Black Rapid camera harness</li>
  						<li>Gorilla pod</li>
  					</ul>

  					<h2 id="clothing">Clothing</h2>

  					<p>I’ve found that you really don’t need a huge amount of clothes. I used to own hundreds of t-shirts but it’s easy enough to wash clothes every few days when needed. When no washing facilities are available I just wash them by hand in a sink, it takes very little time and is just as effective.</p>

  					<ul>
  						<li>1 pair of jeans</li>
  						<li>1 pair of trainers</li>
  						<li>3 tshirts</li>
  						<li>2 tank tops</li>
  						<li>1 board shorts</li>
  						<li>1 gym shorts</li>
  						<li>2 pairs of socks</li>
  						<li>5 pairs of boxers</li>
  						<li>1 hoody</li>
  						<li>1 hat</li>
  						<li>1 pair of flip-flops</li>
  					</ul>

  					<h2 id="othermiscellaneous">Other/miscellaneous</h2>

  					<ul>
  						<li>Pack of playing cards</li>
  						<li>Spare ear plugs</li>
  						<li>2 eBags</li>
  						<li>Toothbrush</li>
  						<li>Toothpaste</li>
  						<li>Rollon deodorant</li>
  					</ul>

  					<p>But that’s way more stuff than pictured above? All of my clothes, when folded together, fit within a single eBag. I can’t stress how amazing the eBags are, they’re pretty much like the Narnia of packing cubes; allowing me to squeeze so much into them.</p>

  					<p>The other eBag contains my cables and camera equipment, again tightly packed together to keep them safe and secure.</p>
  				</Container>
  			</Section>
  			<Section>
  				<Container size="small" align="right">
     				<img src="/img/stockholm-old-town-photoshoot-12.jpg" alt=""/>
     			</Container>
  				<div className={s.aside}>
  					<p>It’s worth mentioning that I’m obviously wearing some of the clothes in the list above (I tend not to walk around naked y'know) during flights I’ll also wear the heavier items (jeans, jacket, trainers) since they are the biggest to pack.</p>

  					<p>There is one other travel specific item I will swear by, Rohan travel socks. After a year of travel they are the only pair of socks that have lasted and are still going strong. I wish I’d bought more and plan to do so in the new year. Every other pair of socks have fallen apart in a month or two, these buggers last.</p>

  					<p>Whats in your backpack? tweet me <a href="https://twitter.com/jamesslock">@jamesslock</a></p>
  				</div>
        </Section>
      </Post>
    )
  }
}
