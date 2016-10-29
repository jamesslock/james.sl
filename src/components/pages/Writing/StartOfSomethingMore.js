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

export default class StartOfSomethingMore extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <Post
        title="The start of something more"
        date="June 2014"
        publishedTime="2013-09-04T12:00:00+02:00"
        modifiedTime="2013-09-04T12:00:00+02:00"
        description="Back in December 2010 I received a tweet-enquiry from a talented designer, looking to rebrand his company. David ran a print design studio called Milk Design and was rebranding it to Simple as Milk, for which he needed a new website."
        url="the-start-of-something-more"
      >


				<Container align="right" size="small">
					<p>Back in December 2010 I received a tweet-enquiry from a talented designer, looking to rebrand his company. David ran a print design studio called Milk Design and was rebranding it to <a href="http://simpleasmilk.com">Simple as Milk</a>, for which he needed a new website.</p>

					<p>When the new site launched it reached 10,000 unique visits on the first day – more traffic than the previous site had received in it’s lifetime. This sparked the beginning of the biggest change in both mine and David’s lives.</p>

					<p>The new Simple as Milk site boasted the company’s web design skills, as well as print design, and soon the volume of web-related enquiries well exceeded that of print enquiries. It was at this point that I joined the Simple as Milk team, taking on this new increase in demand of web work.</p>

					<p>We worked 16 hour days, drank far too much Monster Energy and pretty much only ate Subway for convenience. We got fat but it was worth it.</p>

					<p>Simple as Milk continued to grow and moved into a new studio, I was no longer working from home in my PJ’s. The biggest change came from focusing on the world of startups, working with mainly US tech startups. It was about this time that we decided to drop print from our business services. Soon Kevin, Glen and Scott joined the team, and we produced work better and faster than ever.</p>

					<p>On January 1st, 2012, David and I incorporated Simple as Milk as a limited company, upgrading from a fun partnership to <del>serious</del> business partners.</p>

					<p>Today <a href="http://simpleasmilk.com">Simple as Milk</a> has a healthy revenue, amazing clients, and a kick ass team of 5 who are some of the best friends I could ever wish for.</p>

					<p>Simple as Milk was also <a href="https://thenetawards.com/vote/agency/simple-as-milk/">shortlisted</a> along with 5 others for “Agency of the year” in the 2014 net awards.</p>

					<p>Since being a key part of the company, I’ve spoken at London business conferences and various web conferences throughout the UK, sharing experiences that I’ve learned along the way.</p>

					<h2>The next stage</h2>
					<p>In January 2014, for personal and business reasons, we decided to take Simple as Milk on the road. We became a fully remote team, travelling the world while running the company at the same time. Continuing to work with awesome clients.</p>

					<p>A few years ago I could never have envisioned this being possible. I still work hard but more importantly I’m now able to relax, travel, and enjoy everything else that life has to offer at the same time.</p>

					<h2>Reflection</h2>
					<p>In my previous post ‘<a href="/writing/always-told-i-would-fail/">Always Told I Would Fail</a>’, I described the time I spent living in the benefit system. It all seems like a distant memory.</p>

					<p>I’ve now been paying tax for years, paying back into the system that I used to get to where I am today. It’s tax that I’m happy to pay, knowing that someone, somewhere, is wrapped up in the system and using it just like I did. I hope they’re also using it to develop the skills and knowledge needed to get out of it and into a better life, I kind of hope they’re reading this.</p>

					<p>Something that will always stay with me</p>

					<p>I remember venturing into the local Job Centre one day for my bi-weekly checkup. These checkups were to make sure that we weren’t just hoarding the government’s money, partying it away without any real incentive to find a job.</p>

					<p>I may have been hungover but I did want to work.</p>

					<p>Anyway, a man greeted me – I say ‘greeted’ though his tone was far from friendly, it revealed the monotony of his job, his daily routine, and showed that he had little interest in anything other than the clock ticking to lunchtime.</p>

					<p>We spoke about what type of job I was looking for, my experiences, what I wanted to achieve, etc. and he tried to sound vaguely interested.</p>

					<p>I told him I wanted to work in tech, that I’d studied web at college and that I honestly had very little interest in working at Tesco.</p>

					<p>He raised his eyebrows at this, and his voice. I will never forget what he told me, nor my reply.</p>

					<p>“Maybe you should lower your standards; not everyone gets their perfect job. I wanted to work in I.T. but took a job here.”</p>

					<p>I replied with: “Sorry, but I believe I’m better than that and I don’t want to settle.”</p>

					<p>I was young, I was naive, I was foolhardy… but I was right.</p>

					<p>I was lucky enough to know what I wanted to do, I worked hard, made the most of a restrictive system, found a way around every hurdle, and kept my eyes open for opportunities. Simple as Milk started as a rebrand project, it’s the one that changed my life.</p>

        </Container>
      </Post>
    )
  }
}
