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

export default class BypassWifi extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <Post
        title="Bypass wifi time limits with a simple MAC address spoof"
        date="January 2016"
        publishedTime="2013-09-04T12:00:00+02:00"
        modifiedTime="2013-09-04T12:00:00+02:00"
        image="/img/bypasswifi.jpg"
        description="If you’re like me and spend a lot of time in airports or hotels, 30 minutes per day restrictions on free wifi is the bane of your existence."
        url="bypass-wifi-time-limit-restrictions"
      >

				<Container align="right" size="small">
          <p>If you’re like me and spend a lot of time in airports or hotels, 30 minutes per day restrictions on free wifi is the bane of your existence.</p>

          <p>30 minutes isn’t even enough time to catch up with that latest TV episode on Netflix, or reply to those emails you’ve been putting off for days. <em>(I know, first world problems right?!)</em></p>

          <p>Luckily for Mac users theres an incredibly simple way around around this.</p>

          <p>First open up Terminal (CMD + Space, search for terminal)</p>

          <p><code>ifconfig en0 | grep ether</code></p>

          <p><em>(Most mac’s use en0 for wifi, should you run into any issues try en1)</em></p>

          <p>Next you’ll need to enter a new spoof MAC address, a series of 6 sets of 2 random numbers/letters for example: <em>“a0:b2:c4:d6:e8:f0”</em></p>

          <p><code>sudo ifconfig en0 ether a0:b2:c4:d6:e8:f0</code></p>

          <p>This will require you to enter your password</p>

          <p>Lastly run:</p>

          <p><code>ifconfig en0 | grep ether</code></p>

          <p><img src="/img/Screen-Shot-2016-01-20-at-22-16-22.png" alt=""/></p>

          <p>If you're running OSX El Capitan, you'll need to additionally run:</p>
          <code>sudo /System/Library/PrivateFrameworks/Apple80211.framework/Resources/airport -z</code>

          <p>to force a wifi reset.</p>

          <p>and if all has gone well you'll be greeted with the output your new temporary mac address.</p>

          <p>Not worked? Make sure you your wifi is turned on and connected when you run the above commands.</p>

          <p>Still having issues? some OS versions have a few quirks, don’t worry, just run the following commands and all will be good.</p>

          <p><code>sudo /System/Library/PrivateFrameworks/Apple80211.framework/Resources/airport -z</code></p>

          <p><code>sudo ifconfig en0 ether a0:b2:c4:d6:e8:f0</code></p>

          <p><code>networksetup -detectnewhardware</code></p>

          <p>This will force your to disassociate the wifi device before changing your MAC address.</p>

          <p>Some people have reported issues when using odd numbers on their MAC address, so I would highly recommend sticking to even numbers such as <em>"a0:b2:c4:d6:e8:f0"</em></p>

          <p>Now manually making up a MAC address can get tedious, especially after the 5th time, so lets automate that. You can run the following to auto generate and update your mac address with the following:</p>

          <p><code>sudo openssl rand -hex 6 | sed 's/\(..\)/\1:/g; s/.$//' | xargs</code></p>

          <p><img src="/img/Screen-Shot-2016-01-20-at-22-26-37.png" alt=""/></p>

          <p>Now you can not only finish catching up on emails, you can also finish binge watching Jessica Jones. <strong>Happy free internet!</strong></p>
        </Container>
      </Post>
    )
  }
}
