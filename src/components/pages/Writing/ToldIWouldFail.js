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

export default class ToldIWouldFail extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <Post
        title="Always told I would fail"
        date="June 2014"
        publishedTime="2013-09-04T12:00:00+02:00"
        modifiedTime="2013-09-04T12:00:00+02:00"
        description="Back in December 2010 I received a tweet-enquiry from a talented designer, looking to rebrand his company. David ran a print design studio called Milk Design and was rebranding it to Simple as Milk, for which he needed a new website."
        url="the-start-of-something-more"
      >


				<Container align="right" size="small">
					<h2 id="sellinggreenonstreetcorners">Selling green on street corners</h2>

					<p>One of my earliest memories is of a kick-ass Action Man. This Action Man was the tits, seriously. He came with the most awesome guns ever and cost at least three times as much as the other action men on the shelf. I was about 5 or 6 at the time and directly under the desire to be him, I just had to own him.</p>

					<p>I’m pretty sure that back then my pocket money was about 50p a week, so by my calculations it would have taken more than 40 weeks to save up and buy this Action Man. I couldn’t wait that long, and like fuck was I going to go without sweets for 40 weeks!</p>

					<p>My memory is fuzzy on how I came up with this brilliant plan but I wanted to make money faster. I decided to start growing tomato plants, in our greenhouse in the garden, and sell them on for a profit – isn’t it funny how parents will buy you tomato seeds, grow bags and pots, yet not the kick-ass Action Man you actually want.</p>

					<p>I pitched a table outside our house with my <del>feeble</del> amazing tomato plants and a sign (drawn spectacularly in crayon) advertising my tomato plants for £1 each. Wouldn’t you know it, people actually started to buy them. I had a great sales pitch (my face), who doesn’t want to spend a pound to help a cute, innocent child selling home-grown products on the side of a road? Within just 3 days I had enough money to buy my Action Man.</p>

					<p>Little did I know that this experience would have been my first in ‘entrepreneurialism’. I could have reinvested this money to generate more but alas, I had to have the Action Man. Totally worth it.</p>

					<h2 id="sellingcracktokids">Selling crack to kids</h2>

					<p>I was one of those kids who turned up to school, forgot half his books, never had a pen and lost his timetable on the first day.</p>

					<p>Schools don’t promote or encourage entrepreneurialism and I think this is a huge hole in the educational system. There’s far too much emphasis put on fitting in and doing what’s expected of you. You’re supposed to just sit, listen, and then regurgitate information. If you do something different or have your own ideas then you’re that proverbial nail, by which I mean you get hammered and forced to fit in better.</p>

					<p>I fought back.</p>

					<p>I was at school during the Jamie Oliver shakeup with school dinners, where you could only order chips twice a week and the vending machines were emptied of all the best items. Now all we had were sugar-free, caffeine-free drinks. My school friends were an unfortunate combination of outraged and sugar-starved.</p>

					<p>Excellent, I thought, as I spotted my second gap in the market. I dumped my text books out of my bag and used what little money I had to stock up on multipacks of coke, crisps and sweets, before heading into school for what my headmaster later described to my mother as ‘a blatant disregard for rules and undermining school authority.’</p>

					<p>I started selling these sugar-laced goods at premium prices during lessons and lunch breaks, which ultimately lead to near expulsion. What a way to promote entrepreneurialism, dicks.</p>

					<blockquote>
						<p>“He’s such a smart boy, if only he would commit himself.”
						–Every teacher, ever.</p>
					</blockquote>

					<p>School never liked to reward initiative, especially mine when I decided against attending half my classes. My perspective college told me that I only needed 5 GCSEs, with a C grade, to get onto the course I wanted. So then what was the point in attending 10 separate subjects when I could focus on being better at the 5 I needed to get me to the next level? (Funny how since college, not once have I ever been asked about GCSE’s and I’ve never had to use Pythagorus either.)</p>

					<h2 id="leavinghome">Leaving home</h2>

					<p>I left home right after turning 18, not completely by choice, but apparently “sitting on the computer all day and not getting a real job” was not going to fly. So I left and spent months between friends' sofas and college.</p>

					<p>I found my way into a halfway house and onto the benefits system, where I met Carbon White. A truly beautiful 7% cider that sold for 80p a litre and made life the little bit more interesting. Living on £20 a week, after bills, and eating practically nothing was hard but I cheered myself up by spending long, cheap nights partying. Somehow managing to drag myself into college the next day.</p>

					<h2 id="findingmyfeet">Finding my feet</h2>

					<p>It wasn’t all bad, at college I fell in love with the web. With it’s perfect mix of creativity and geekiness.</p>

					<p>The web module of my course was my favourite, it meant that I grew easily bored of the others, but I spent more of my time learning and working with web technologies instead. I was focused and I worked hard.</p>

					<p>As with previous educational flaws, without the full range of modules it meant that my ‘college education’ fell by the wayside and I failed the course. I didn’t mind. I delved deeper into the world of web, something I loved, teaching myself from various online resources instead.</p>

					<p>At this point I was still wrapped up in the benefits system, now living in a flat share, on ‘job seekers’ allowance and housing benefit. I had stopped looking for work and focused all my time and effort on learning more about this industry that I loved. I learned new code and everything else that went with it.</p>

					<p>People complain that the downfall of British society are the people living on benefits, the ones reaping the rewards of others' hard work and sitting on their arses all day. I was one of those people, sitting on my arse, but I was developing a skill-set that has served me extremely well since.</p>

					<p>I lied to the job centre and told them that I was ‘actively looking for work’, I had to pretend. I dropped in a few CV’s as ‘proof’ but I wasn’t at all. There was no support or schemes available for people to learn new skills, especially web development, so I had to teach myself.</p>

					<p>The job centre just wanted to see results, not in personal achievements but in numbers that showed more people coming off the benefits system than entering it. It’s all well and good starting part-time work in a convenience store (I tried this for a while), but it’s not going to sustain you for life. These people only cared about the short term. I was thinking ahead, looking forward to my future, my life. Something they clearly gave zero fucks about.</p>

					<p>What if I had listened to them and taken their advice, like so many others have and do… would I still be the co-founder of a successful company now?</p>

					<h2 id="gettingoutofthesystem">Getting out of the system</h2>

					<p>6 months later I registered myself as freelance and started looking for small web projects. Then I landed a long-term contract working with a company which managed various in-house IT and web projects. The work wasn’t particularly fun but it enabled me to drag myself out of the system and into the world of work. Several months later I moved into a modest private apartment.</p>

					<p>At this point I was also taking on small freelance web projects during evenings and weekends, building up a small client base, a brand and a portfolio.</p>

					<p>I still struggled to pay all my bills on a monthly basis, many were late, but I managed it. Over time this all got easier and I soon managed to put away a little each month in savings.</p>

					<p>I had built this life for myself, a career. It wasn’t easy but I did it, with very little help from the education system. I wish that they’d listen to the voice of the people inside it, rather than stick to the outdated rules and guidelines that are clearly bullshit.</p>

					<p>Wanting that Action Man when I was 5 years old is probably my first memory for a reason. It was my first paycheque. It helped me to develop skills which got me further in life than any other.</p>

					<p>I am living proof that going against the system, even lying to travel further down my chosen path, led me to where I needed to be.</p>

					<p>Read ‘<a href="/writing/the-start-of-something-more/">The start of something more</a>’ to continue this story and read about how Simple as Milk became what it is today.</p>

				</Container>
      </Post>
    )
  }
}
