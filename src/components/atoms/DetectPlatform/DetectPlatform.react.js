import React, { Component, PropTypes } from 'react';
import styles from './DetectPlatform.css';

export default class DetectPlatform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      platform: 'unknown'
    }
  }

  componentDidMount() {
    let platform;
    const navigatorAgent = navigator.userAgent;
    const isOsx = (/Mac OS X ([d\.\_\d]+)/.exec(navigatorAgent));
    const isIphone = (/iPhone OS ([d\.\_\d]+)/.exec(navigatorAgent));
    const isIpad = (/OS ([d\.\_\d]+)/.exec(navigatorAgent));
    const isIos = (/iPhone|iPad|iPod OS ([d\.\_\d]+)/.exec(navigatorAgent));
    const isAndroid = (/Android ([d\.\_\d]+)/.exec(navigatorAgent));

    if (isOsx) {
      platform = 'osx';
    } else if (isIphone) {
      platform = 'iphone';
    } else if (isIpad) {
      platform = 'ipad';
    } else if (isAndroid) {
      platform = 'android';
    } else {
      platform = 'unknown';
    }

    this.setState ({
      platform: platform
    });
  }

  render() {

    const {
      className,
      children,
      os,
      device,
      ...remainingProps,
    } = this.props;
    const {platform} = this.state;

    return (
      <div>
      { platform === os ?
        <div>
          <h1>Selected Platform is {os}. Detecting your Platform is {this.state.platform}</h1>
          {children}
        </div>
      : !os ?
        <div>
          <h1>Fallback</h1>
          {children}
        </div>
      :
        null
      }
    </div>
    );

  }

};


DetectPlatform.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
