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

export default class HacktostartPodcast extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <Post
        title="Hack to Start podcast interview"
        date="December 2014"
        publishedTime="2013-09-04T12:00:00+02:00"
        modifiedTime="2013-09-04T12:00:00+02:00"
        image="/img/hacktostart-1.png"
        description="James joins us to share how he learned to code, why he likes working with startups, and how he manages it all while travelling."
        url="hack-to-start-podcast-interview"
      >

				<Container align="right" size="small">
          <p><a href="http://hacktostart.com/">Hack to Start</a> is a podcast focused on interesting people and the innovative ways they achieve success, interviewing a range of people from founders and designers through to marketing and growth people.</p>

          <blockquote>
          <p>James joins us to share how he learned to code, why he likes working with startups, and how he manages it all while travelling.</p>
          </blockquote>

          <h2 id="whatiscoveredinthisepisode">What is covered in this episode</h2>

          <ul>
          <li>How James got into design and front-end development</li>
          <li>How Simple As Milk was founded and their reasons behind moving into a distributed team model</li>
          <li>How Simple as Milk stay productive while travelling</li>
          <li>How Simple as Milk land clients</li>
          <li>And more!</li>
          </ul>

          <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182692158&amp;color=00aabb"></iframe>

          <h2 id="someofthequestionstheyasked">Some of the questions they asked</h2>

          <p>1:04 Where are you from, what did you study and how did your passion for entrepreneurship start?</p>

          <p>3:27 In early 2014 you sold everything and left to travel the world. Why?</p>

          <p>4:43 How do you manage travel and work?</p>

          <p>8:20 You’re the co-founder of Simple as Milk. What is Simple as Milk and why did you start it?</p>

          <p>9:17 What’s the biggest challenge of running this kind of business? What are the biggest advantages?</p>

          <p>10:54 You guys have worked on some pretty awesome projects with companies like Unroll.me, Ghost, Assistly and more. How did do you land these clients and how did you get your first customers?</p>

          <h2 id="thanks">Thanks</h2>

          <p>It was a pleasure to take part and share my <a href="http://hacktostart.com/james-seymour-lock/">story</a> on the Hack to Start podcast, a huge thank you to the hosts <a href="https://twitter.com/francovarriano">Franco Varriano</a> and <a href="https://twitter.com/tylercopeland">Tyler Copeland</a> and of course their sponsors; SoundCloud, Ghost and Breather.</p>

          <p>Make sure to subscribe to them over on <a href="https://itunes.apple.com/ca/podcast/hacktostart/id929857801?mt=2">iTunes</a> and have a listen to their awesome podcasts.</p>
        </Container>
      </Post>
    )
  }
}
