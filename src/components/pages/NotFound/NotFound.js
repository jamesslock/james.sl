import React, {Component} from "react";

// Import Atom Components
import Hero       from '../../atoms/Hero/Hero.js';

// Import Molecules Components

// Import Organism Components

// Import Styles
import s from './NotFound.css';

export default class NotFound extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <div>
        <Hero size="full" title="Page Not Found">
          <p>
            Well this is embarrassing, the page you are looking for has moved or been deleted. Sorry about that.
          </p>
        </Hero>
      </div>
    )
  }
}
