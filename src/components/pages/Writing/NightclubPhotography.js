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
import s from './Post.css';
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
						title="A foray into nightclub photography"
						date="April 2013"
						dateTime="2013-09-04T12:00:00+02:00"
						image="/img/nightclub-photography-53.jpg"/>
				</Container>
				<Container>
          <AnimateSlideUp>
  					<Section className={s.post} itemProp="description">
  						<Container align="right" size="small">
                <p>A new nightclub was opening locally and needed a photographer to shoot at the opening event. Having never done nightclub photography before, and with only a little experience shooting events for friends, conferences, and startup launches, I was unsure about jumping in at the deep end.</p>

                <p>However, after a chat with the owner and some of the club organisers, they decided that I would be a good fit. It probably also helped that I had no interest in monetary gain.</p>

                <p>The following information is some of the stuff that I’ve learned from this experience, and hopefully, it may help to prepare others who are looking to do the same.</p>

                <h2 id="preparation">Preparation</h2>

                <p>Preparation is something that I seriously suck at, such as charging batteries the night before. I always forgot, and then had that last minute scrabble to make sure I had all the power that I needed.</p>

                <p>Nightclub photography was something I had never done before, so I spoke to a few people to get some advice: “All your shit will get broken and you’ll likely be punched in the face”. Thanks Rick.</p>

                <p>I enjoy nothing more than buying new equipment and spending ages researching what I should buy. But I did many hours of that and most of it was pointless.</p>

                <p>It’s fairly important to decide on your shooting style before you go. I knew I wanted to create pictures with the pretty, funky lights everywhere (that’s totally what it’s called). More on that later…</p>

                <h2 id="equipment">Equipment</h2>

                <p>I spent a fair amount of time researching recommended equipment and there were tons of options, but ultimately you just need the basics.</p>

                <p>At the very least I had my Canon 5D mk2, Canon 17-40mm f4 L, a Yongnuo Speedlight YN460 II with a diffuser, 2x 32GB memory cards and enough batteries (for camera and flash) to power Ironman.</p>

                <p>I always use a UV filter on my lenses, and for nightclub photography I would highly recommend fitting one if you don’t. Sticky drinks + glass = disaster. A lens hood also really helps to protect the lens from any drink spills.</p>

                <p>Oh, I’d also highly recommend having your gear insured.</p>

                <h2 id="lenschoice">Lens Choice</h2>

                <p>I love my primes and would have loved to spend every night shooting with my 24mm, but a decent wide angle zoom has far more flexibility. No one wants to be changing lenses throughout the night, in the dark, and I had no plans to carry a second camera around. It would just flap about at my side and get broken.</p>

                <p>I found that the 17-40mm was perfect. Setting it to 35-40mm was best for portraits and head shots, zooming out to 24-30mm for doubles, and then 17-20mm for group and full body shots.</p>

                <p>If I had used my 24mm to shoot all night, then it’s likely the portraits would have made people look far wider than they are. And, trust me, making a girl look unnecessarily wide will never go down well!</p>

                <p>Also worth noting; the further away from the subject you are, then the more light, fog, smoke etc. that can get between you and the subject. This gives you the flexibility to get right up close and avoids washed-out photos.</p>

                <h3 id="speedlight">Speedlight</h3>

                <p>An external flashgun is essential (especially given the 5D’s lack of flash in general) and I happened to have mine mounted on an off-camera, braced with a synch cord. This allowed me to have a better grip when holding the camera, but it’s not a requirement.</p>

                <p>Any speed light will do. Mine only supported front curtain flash (going off as soon as you press the shutter), rather than era curtain flash (going off just before the photo taking finishes).</p>

                <p>Don’t forget a diffuser; I used a £5.99 one from Amazon which worked perfectly. Fuck paying £100 for a super fancy thing.</p>

                <p>Either will do and are important for creating interesting club style photos.</p>

                <h3 id="clothing">Clothing</h3>

                <p>So much advice on the web about what to wear but since this would be a club. I put on my favourite black shirt and dressed to <strike>impress</strike> disappoint.</p>

                <p>I would say that my pointy black shoes where a bad choice, the metal staircases and drinks spilt floors made for slippery surfaces where I would have appreciated something with far more grip.</p>

                <h2 id="howtokinda">How to… kinda</h2>

                <p>There was a huge amount of learning on the job. As I said earlier, I’m the least prepared person in the world. Jump in, hope for the best and either way, I learned a ton.</p>

                <h3 id="autofocus">Autofocus</h3>

                <p>Autofocus, yeah, that’s never going to work. Turn that shit off and go manual. After 10-15 shots of trying to see if I could actually get away with auto focus, it just wasn’t going to happen. It was either not focusing or focusing incorrectly. You’ll also look like a fucking tit standing there for several seconds trying to get a lock onto someone’s face. Don’t be that guy, I was for a few minutes, and then I quickly abandoned that method.</p>

                <h3 id="hyperfocalfocusing">Hyperfocal focusing</h3>

                <p>Read up on hyper focal focusing, a true fucking life saver when shooting in a club.</p>

                <p>It’s essentially some basic math (there’s an app for that), that allows you to work out the rough focusing distance in front of you, based on your aperture and lens length.</p>

                <p>Once you’ve worked out roughly what that is and memorised it for 3 focal lengths for me, 17mm 24mm and 38mm this covered enough range and overlay that my shots would always be in focus as long as I was roughly 0.5-1.5 meters away from the subject, or further back for group shots.</p>

                <ul>
                <li>f4+ 1-2 people</li>
                <li>f5+ 3 people</li>
                <li>f6+ 4 people</li>
                <li>f8+ groups</li>
                <li>f10+ venue shots</li>
                </ul>

                <p>Once you’ve got that down its stupidly simple to just walk around taking photos without worrying at all, get back to shooting and enjoying yourself.</p>

                <h2 id="settings">Settings</h2>

                <p>Remember that funky light effect I was talking about earlier? Well, that type of photography requires utilising the flash to freeze the subject with your shutter release. Then you have to drag-pull your camera to capture additional light, which creates the interesting backgrounds.</p>

                <p>For this method, I was shooting with the ISO fairly low, around 480-800, with the flash set to manual and on ¼th power, coupled with shooting at roughly ¼-1/8 shutter speed.</p>

                <p>I did get some really nice photos at 2s+. The right environment allowed for some cool light trails too, while twisting the camera or zooming in/out to pull the lights around the subject.</p>

                <p>Settings do of course vary throughout the night, mainly due to not really knowing what the fuck I was doing and from just playing around with it. Learning on the job is the most fun though.</p>

                <p>Essentially you’re looking for a shutter speed which is slow enough to capture the background lights of the club, but not so slow to cause your subject to blur or create ghosting.</p>

                <p>You can always adjust and tweak the settings throughout the night. This was something I had to do a lot of since the club had 3 floors, all with different lighting.</p>

                <p>Shoot in RAW. This will make editing a lot easier later on. But make sure you have enough storage!</p>

                <p>Shoot wider than you need, you can crop later, cutting peoples heads/hands of is not cool, and I did it plenty!</p>

                <h2 id="whattocapture">What to capture</h2>

                <p>Ask your client, talk to the club, promoters etc, find out if there is anything in particular photos they would like.</p>

                <p>I’m pretty sure they didn’t want the selfie of me holding the camera out at arms length surrounded by girls in a VIP area but I took one regardless, mostly at the instants of the girls but also remember that you’re not just there for the club you’re there for yourself to get awesome photos for your blog, portfolio or to get new clients etc.</p>

                <h2 id="girls">Girls</h2>

                <p>A pretty direct want from the club was to make sure there where plenty of photos of girls, the better looking the better. A fairly obvious business move. Showing tons of hot girls on their Facebook profile enjoying their club = hundreds of horny guys rolling up with pockets of cash. Marketing at its finest <em>sigh</em>.</p>

                <img src="/img/nightclub-photography-29.jpg" alt=""/>
                <img src="/img/nightclub-photography-13.jpg" alt=""/>
                <img src="/img/nightclub-photography-5.jpg" alt=""/>
                <img src="/img/nightclub-photography-34.jpg" alt=""/>
                <img src="/img/nightclub-photography-24.jpg" alt=""/>

                <h2 id="guys">Guys</h2>

                <p>It’d be totally sexist to just shoot girls all night, I planned to get a decent mix and the faces guys pull are seriously hilarious.</p>

                <img src="/img/nightclub-photography-38.jpg" alt=""/>
                <img src="/img/nightclub-photography-36.jpg" alt=""/>
                <img src="/img/nightclub-photography-48.jpg" alt=""/>
                <img src="/img/nightclub-photography-39.jpg" alt=""/>

                <h2 id="groups">Groups</h2>

                <p>This is when the super wide angle 17mm comes in so handy, fitting in 5+ people can prove a challenge in such a tight space.</p>

                <img src="/img/nightclub-photography-12.jpg" alt=""/>
                <img src="/img/nightclub-photography-11.jpg" alt=""/>
                <img src="/img/nightclub-photography-6.jpg" alt=""/>

                <p>Remember to be friendly to everyone, and to read body language. Avoid aggressive drunk guys and if someone doesn’t want their photo taken then just move on. Not everyone wants a camera shoved in their face. I found that a smile generally swayed many who seemed shy to let me take a photo regardless.</p>

                <img src="/img/nightclub-photography-25.jpg" alt=""/>
                <img src="/img/nightclub-photography-44-1.jpg" alt=""/>

                <p>You’ll also find there is more from the total opposite end of the scale. You’ll get poked, grabbed, jumped at, etc. by people who all want their photo taken. They’ll be girls who’ll want you to get in the photos with them, with expensive equipment in your hand this can be pretty nurve racking. But by this point the night was ramping up, I was enjoying the tequila and I didn’t seem to worry so much (Thats what insurance is for right?).</p>

                <p><em>Don’t forget to make sure you capture pictures of people having fun!</em></p>

                <img src="/img/nightclub-photography-4.jpg" alt=""/>
                <img src="/img/nightclub-photography-23.jpg" alt=""/>
                <img src="/img/nightclub-photography-28.jpg" alt=""/>
                <img src="/img/nightclub-photography-7.jpg" alt=""/>
                <img src="/img/nightclub-photography-2.jpg" alt=""/>
                <img src="/img/nightclub-photography-20.jpg" alt=""/>
                <img src="/img/nightclub-photography-50.jpg" alt=""/>

                <p>Models</p>

                <p>The club also hired some models for the night. Now, if you know me well enough, you’ll know that tattooed girls are my thing, so this was pretty awesome/somewhat nerve-racking given my lack of experience in nightclub photography. Ah well fuck it, <a href="/confidence-is-sexy/">confidence is sexy</a>.</p>

                <img src="/img/nightclub-photography-18.jpg" alt=""/>
                <img src="/img/nightclub-photography-47-1.jpg" alt=""/>
                <img src="/img/nightclub-photography-42.jpg" alt=""/>

                <p>The biggest issue with the models was that I had to fight my way across the dance floor to get to the V.I.P area where they where located. This happened to a well-lit area, resulting in no decent floor lights for sexy backgrounds. Plus, they had their backs against the wall.</p>

                <img src="/img/nightclub-photography-26.jpg" alt=""/>

                <p>When navigating dance floors keep the camera above your head, as this avoids any knocks and people tend to move out of the way for you.</p>

                <p>Either way, they had all the vodka and mixers at their tables, so I stayed there a while (Yes you can totally drink while doing this job).</p>

                <img src="/img/nightclub-photography-35.jpg" alt=""/>

                <h2 id="dj">DJ</h2>

                <p>I met <a href="http://www.djladylola.com/">DJ Lady Lola</a> early on in the night and we had a great chat about a ton of things. We then had several shots of tequila and more throughout the night.</p>

                <img src="/img/nightclub-photography-10.jpg" alt=""/>

                <p>Lola was DJ'ing the main room from the floor above, looking down. So, with access to the DJ booth, I could get some awesome wide venue shots of everyone dancing in it.</p>

                <img src="/img/nightclub-photography-31.jpg" alt=""/>
                <img src="/img/nightclub-photography-32.jpg" alt=""/>
                <img src="/img/nightclub-photography-41.jpg" alt=""/>

                <p>The DJ booth was dark but lit with various lights from the DJ decks and laptop screen, so this gave me the chance to play around with my settings and shot style.</p>

                <p>This is also where I captured my favourite photo of the night.</p>

                <img src="/img/nightclub-photography-53.jpg" alt=""/>
                <img src="/img/nightclub-photography-54.jpg" alt=""/>
                <img src="/img/nightclub-photography-43.jpg" alt=""/>

                <h2 id="thedancefloor">The dance floor</h2>

                <p>Although all the rooms where jam packed, the main room downstairs made for the best dace floor photos, as I was able to shoot from above on the DJ deck.</p>

                <img src="/img/nightclub-photography-30.jpg" alt=""/>
                <img src="/img/nightclub-photography-22.jpg" alt=""/>

                <p>I shot some test shots of the main dance floor early on before the club started to fill up. Later on in editing I spotted this guy rocking no socks and having a boogie all to himself, so I totally cropped him. <em>Amazeballs</em></p>

                <img src="/img/nightclub-photography-1.jpg" alt=""/>

                <h2 id="barstaff">Bar staff</h2>

                <p>Always good to get a few photos of the bar staff and they’re always up for some fun photos.</p>

                <img src="/img/nightclub-photography-3.jpg" alt=""/>

                <h2 id="postprocessing">Post processing</h2>

                <p>I really enjoy editing in Aperture, so I was really looking forward to the editing process and making all the images perfect. However, this is a very time consuming process and clubs want to get their photos up and online A.S.A.P. The shoot was on Friday and finished at 4am on Saturday morning, the club wanted the photos online by Monday evening. So, as you can imagine, this can be stressful.</p>

                <p>I grouped the photos into various lighting groups and worked on applying general tweaks and settings. I edited out the shit photos, cropping them tighter if they needed it, etc. I blurred edges and made a few tweaks to individual photos. I even removed a few pimples from people’s faces that were just far too obvious.</p>

                <p>It was only after shipping the photos off to the club, that I could then settle down to spend as much time as I wanted, fussing over every detail.</p>

                <h2 id="finalthoughts">Final thoughts</h2>

                <p>At the beginning I was pretty apprehensive. There was so much to check, settings to work out and the layout of the venue (this place was a maze, with back doors, back allies to go around, and up various floors to get to DJ booths, etc.) and remembering the security code to get into the staff room for batteries, etc.</p>

                <p><strong>The award for the best photo bomb of the night goes to this guy!</strong></p>

                <img src="/img/nightclub-photography-27.jpg" alt=""/>

                <p>It was more hard work than I had expected but also way more fun. I met loads of awesome people, I was forced into a few selfies with drunk partygoers, and I was pretty darn drunk by the end of the night.</p>

                <p>Best of all; I got paid… well kinda. I was offered the choice of our agreed fee or three bottles of the clubs biggest jack denials bottles. <em>I totally took the Jack Daniels</em>.</p>
              </Container>
  	        </Section>
          </AnimateSlideUp>
				</Container>
      </article>
    )
  }
}
