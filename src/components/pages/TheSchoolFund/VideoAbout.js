import React, {Component} from 'react';
import YouTube from 'react-youtube';

import s from './TheSchoolFund.css';

export default class VideoABout extends Component {
  render() {
		const opts = {
      height: '720',
      width: '1280',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
				controls: 0,
				showinfo: 0,
				red: 0,
      }
    };

    return (
      <div className={s.videoAbout}>
				<YouTube
					videoId="9YhUSwjb_LI"
					opts={opts}
					onReady={this._onReady}
				/>
      </div>
    );
  }
}
