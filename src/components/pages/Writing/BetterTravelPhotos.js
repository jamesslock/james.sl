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

export default class BetterTravelPhotos extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <Post
        title="A guide to taking better travel photography photos"
        date="August 2014"
        publishedTime="2013-09-04T12:00:00+02:00"
        modifiedTime="2013-09-04T12:00:00+02:00"
        image="/img/morskie-oko-9.jpg"
        description="I have traveled to 14 countries so far, mostly Europe, but also Egypt, America and the Philippines. As a nomad photographer I have learnt the majority of my skills while on the move."
        url="how-to-take-better-travel-photography-photos"
      >

				<Container align="right" size="small">
          <p>I have traveled to 14 countries so far, mostly Europe, but also Egypt, America and the Philippines. As a nomad photographer I have learnt the majority of my skills while on the move.</p>

          <p>There is a huge variation in lighting conditions, subject matter, weather conditions and more when taking photos whilst travelling. This makes it very hard to specialise in a single subject matter because you want to to capture the whole journey. To embrace this, you have to wear many hats, being able to switch from street photography, to landscape photography and then jump into some portrait work. Luckily, I like to dabble, it keeps me excited, learning and constantly on my toes.</p>

          <p>I wanted to share some things I have learnt along the road with real world examples from my travels and my personal experiences.</p>

          <h2 id="whatthispostcovers">What this post covers</h2>

          <ul>
          <li>How I plan and research photography locations</li>
          <li>General tips and advice</li>
          <li>Technical advice on equipment and settings</li>
          <li>Essential skills for the travelling photographer</li>
          <li>How I set myself up for various photos</li>
          </ul>

          <h2 id="research">Research</h2>

          <p>Research is key, I always start with learning a little about the place I am visiting before I arrive. Whether its the country or the city, have a google around. I also guarantee there are 5 million blog posts titled “top photography spots in [country]” but if you’re looking for unique travel photos you won’t find them there. That said, they can still be great places to visit, even if it’s just to get that generic shot.</p>

          <p>Another handy thing I do is head over to 500px and put the town/city/country I’m visting into the search box, this gives me a ton of beautiful images by seriously talented photographers. Some also include geolocation tags, I’ve found this a great way to find additional awesome places to visit by photographers looking in far more unique locations.</p>

          <h2 id="donttakeacamera">Don’t take a camera</h2>

          <p>This might seem like a strange idea, after all you’re wanting to take photos but sometimes you have to step back and immerse yourself in your surroundings, taking them in and enjoying the travel. I will often spot a great photo opportunity, an interesting building or landscape while exploring and will drop a pin to return to at the perfect time to capture the shot.</p>

          <p>Of course if you’re out on a hiking trip or travelling somewhere you wont be able to return to, you will have your camera with you, but you don’t have to take it with you everywhere on a daily basis. It’s good to have a day off and view the world through your eyes rather than the viewfinder!</p>

          <h2 id="slowdown">Slow down</h2>

          <p>Much like above, I found this really hard at the beginning, easily getting too snap happy. Slow down, take everything in with your eyes, relax and enjoy the moment, take the time to seek out the best angles or perspectives, take notes and return when you feel the light would suit the situation to make the best photo. It’ll show though in your photography.</p>

          <h2 id="befriendlysayhello">Be friendly &amp; Say Hello</h2>

          <p>This is one of the things I’ve found hard, there is always an aura of apprehension when you point a camera at a stranger to take a photo in the street. Many have looked angry, some get shy and others really couldn’t give a shit. I’ve not really found much of a way around this besides smiling if they catch your eye before you take the photo, but some of the best photos are unsuspecting.</p>

          <p>When I’m looking to take more portrait shots, I tend to approach groups more than single people out as its less intimidating, although far more intimidating for myself. I make eye contact and say hello, preferably in the local language, then explain that I’m a photographer and ask if I can take their photo.</p>

          <p>Remember that some people could be having a bad day or on their way to work, so chat with them first, get to know a little about them, first it helps to choose the right type of photo and second it adds context to the photo caption, its your job to make them comfortable, smile and open up, you might also make a few friends.</p>

          <p>Some will oblige, others won’t, whilst some will just ignore you. Don’t take it to heart if they do and move on, and don’t forget to always say thank you.</p>

          <h2 id="getupearlygotobedlate">Get up early / go to bed late</h2>

          <p>Something I really suck at, but some of the best light and landscapes are taken at dawn and dusk, I use a handy sunrise/sunset application to work out the best times of the day to wake up and head out to capture a few beautiful photos.</p>

          <h2 id="equipmentpacktherightgear">Equipment - Pack the right gear</h2>

          <p>Hi. My name is James and I’m photography lens whore. The first step is admitting I have a problem.</p>

          <p>Many travel photography blogs stress the importance for having that single lens, quoting that “You will lose that important photo whilst changing lenses”. Well, I call bullshit on this! Sure you very well might miss out on a great photo, but I strongly believe that if there is a far better lens to use for that shot, then you should.</p>

          <p>I typically carry 3 lenses with me at all times depending on what I’m planning on doing or where I am going, for that I require my bag. Other times I will carry a single lens based on what type of photos I want to capture that day and ditch the bag, which totally results in looking like a tourist.</p>

          <h2 id="inspireyourself">Inspire yourself</h2>

          <p>I like to keep myself inspired to help push myself. I might settle down for a while, not think about taking any photos, and then some amazing photography pops up in my RSS or instagram feed which makes me feel inspired to get out there and create.</p>

          <p>I regularly check 500px and follow some great photographers that I admire, along with some kickass travel photographer blogs. I check instagram daily, that goes without saying!</p>

          <h2 id="getemotional">Get emotional</h2>

          <p>Get out there and root yourself within the local life, food markets, skateparks, kite schools or into the wilderness, get involved and fully immerse yourself. This will often help me come up with new ideas as I try to convey those emotions in the photos I take.</p>

          <p><img src="/img/tell-a-story.jpg" alt=""/>
          Homeless children living on the beach in the Philipines</p>

          <h2 id="offthebeatentrack">Off the beaten track</h2>

          <p>I’ve dived down dark back allys (kinky), climbed off bridges and down rocky passes just to see what is around the corner, often coming across some amazing photography opportunities I would have never found otherwise. Don’t be afraid to get dirty and explore!</p>

          <h2 id="essentials">Essentials</h2>

          <p>I won’t cover too many essentials, chances are you will already have them so will detail a few fun additions or changes I’ve made.</p>

          <p>Batteries a fairly obvious one, I typically only carry two, I’ve found it’s all I need and keeps weight down, I do have to charge every night.</p>

          <h2 id="tripod">Tripod</h2>

          <p>Having a tripod with you is awesome for long exposures or low light shots but they are awful bulky and heavy to carry around.</p>

          <p>I have used the Lollypod which is a super small lightweight tripod which can easily fit in any backpack it also extends to be fairly tall which is great. However due to its lightness I’ve found it to sway or even fall over in strong wind with a heavy lens attched.</p>

          <p>My tripod of choice is a Gorilla pod, small and incredibly versatile, easily fits in my bag and has the ability to grip onto any post or pole nearby. You can also still take amazing landscape shots with it from low to the ground.</p>

          <h2 id="lenses">Lenses</h2>

          <p>As I said, i’m a lens whore as dipicted here. I have favourite lenses for various shots and an everyday lens.</p>

          <p>Wide angle I love my 17-40mm! It is a joy to capture landscape shots with and I find having a seriously wide lens essential to my kit, especially when you’re unable to step back to get the whole picture in. Being able to shoot at 17-20mm has enabled me to get some of my favourite shots that I would have otherwise been unable to get.</p>

          <p>General purpose For me this was my 50mm Sigma, a perfect focal length on a full-frame camera, but it was large and bulky and had no autofocus support on my camera. So recently I switched to the seriously tiny Sony 35mm which is perfect for walking around without a bag avoiding knocking it against anything.</p>

          <p>Steve Huff recommends the 35mm as the perfect lens for every shot and <a href="http://www.stevehuffphoto.com/2011/06/09/why-shooting-with-just-a-35mm-lens-can-help-your-photography/">makes some great points</a>, but its just not for me as my only lens.</p>

          <p>If I could only have one lens with me I would have the 24-70mm zoom, which covers a great range for everything I do, even if it is a little bulky.</p>

          <p>Zoom or long focal length Not everything is within reach, sometimes you’re just unable to get close enough to get that shot.</p>

          <p>Zooms provide great flexibility, but are large and bulky. My favourite focal length is a 135mm prime, providing great image quality and a fairly decent reach. They are also lighter and smaller than the majority of primes especially if you grab an awesome vintage one.</p>

          <h2 id="thephotoitself">The photo itself</h2>

          <p>It’s worth remembering that there is no right or wrong way to take a photo, some of the greatest photos break many typical conventions.</p>

          <h3 id="simplify">Simplify</h3>

          <p>Some of my favourite photos are the simplest with the least distractions going on, bringing the image back to its most basic elements. Focussing on a single area or subject and zeroing in, shooting at a high aperture to avoid too much going on in the background - sometimes the most simple photos can be the most beautiful.</p>

          <h3 id="tellastorywithyourshots">Tell a story with your shots</h3>

          <p>Use the emotions you feel and the information you gather from talking with locals and subjects to tell a story with your photos, it will draw people into your photos and connect with them.</p>

          <p><img src="/img/morskie-oko-9.jpg" alt=""/>
          <img src="/img/morskie-oko-3.jpg" alt=""/>
          <img src="/img/morskie-oko-14.jpg" alt=""/>
          <img src="/img/morskie-oko-13.jpg" alt=""/>
          <img src="/img/morskie-oko-4.jpg" alt=""/></p>

          <h2 id="perspectives">Perspectives</h2>

          <p>Move around your subject or object, if its a building or landscape look for higher or lower ground to shoot from. It’s likely your current location isnt the best location to take the perfect photo, move around check out the various perspectives and take plenty of photos, you can always decide on your favourites later on.</p>

          <p><img src="/img/perspectives.jpg" alt=""/></p>

          <h2 id="lightshootintothesun">Light: Shoot into the sun</h2>

          <p>I absolutely love shooting into the sun, its a very different type of shot vs being taught to shoot away from the sun to make sure the photo is perfectly exposed. Shooting into the sun adds some great depth and a lovely faded wash over parts of the image.</p>

          <p><img src="/img/shoot-into-the-light.jpg" alt=""/></p>

          <h2 id="longexposure">Long exposure</h2>

          <p>Something I don’t do enough of and wish I did, creating silky smooth waters in landscapes, and wistful flowing waterfalls.</p>

          <p><img src="/img/morskie-oko-8.jpg" alt=""/></p>

          <h2 id="shootatnight">Shoot at night</h2>

          <p>Another favourite of mine, this goes hand in hand with long exposures, for dramatic landscapes when buildings come alive with lights and reflections across waters. If you shoot just as the sun has finished setting so there is still a slight glow coming up behind the buildings it really adds to the dynamic of the sky.</p>

          <p><img src="/img/shoot-at-night.jpg" alt=""/></p>

          <h2 id="emphasise">Emphasise</h2>

          <p>Find a single item within your frame to focus on and work on bringing it to life, using the “rule of thirds” to divide up the frame to emphasise the important elements of the image using the rest as “white space”.</p>

          <p>I love photos with sharp lines, straight lines, diagonals what ever, as long as they lead the viewers eyes through the photo.</p>

          <p><img src="/img/malmo.jpg" alt=""/></p>

          <h2 id="motion">Motion</h2>

          <p>Adding motion into your photography adds a new dynamic, photos are inherently very static, motion adds a sense of happening, from bustling streets to flowing water.</p>

          <p><img src="/img/motion-prague-underground.jpg" alt=""/></p>

          <h2 id="playwithhdr">Play with HDR</h2>

          <p>HDR allows for some really bold and beautiful photos; HDR is the process of combining several photos of various exposure levels in order to pull out highlights or dynamic sky’s.</p>

          <p><img src="/img/valencia-hdr.jpg" alt=""/></p>

          <p>Ultimately - keep on travelling, keep on seeing the world through your own eyes and experiences and begin to portray them through your lens. Most of all, have fun doing it!</p>
        </Container>
      </Post>
    )
  }
}
