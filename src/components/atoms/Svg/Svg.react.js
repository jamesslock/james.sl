import React, { Component, PropTypes } from 'react';
import Isvg from 'react-inlinesvg';

import css from './Svg.css';

export default class Svg extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initiateXhrRequest: 'false',
    };
  }

  componentDidMount() {
    let initiateXhrRequest;
    this.setState ({
      initiateXhrRequest: 'true'
    });
  }

  render() {
    const {initiateXhrRequest} = this.state;

    const {
      className,
      children,
      image,
    } = this.props;

    const classNames = [
      css.root,
      css ? css[css] : null,
      className,
    ].join(' ');

    function createMarkup() { return {__html: '<noscript>' + '<img src="' + image + '"/>' + '</noscript>'}; };
    //function createMarkup() { return {__html: '<div>' + '<img src="/img/loading.gif"/>' + '</div>'}; };

    if (initiateXhrRequest === 'true') {
			return (
        <Isvg src={image} />
			);
    }
    else {
      return (
        <span dangerouslySetInnerHTML={createMarkup()}/>
      );
    }
  }
};

Svg.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  image: PropTypes.string,
};
