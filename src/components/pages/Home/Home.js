import React, {Component} from "react";

// Import Atom Components
import Section from '../../atoms/Section/Section.react.js';
import Container from '../../atoms/Container/Container.react.js';

// Import Molecules Components

// Import Organism Components

// Import Styles
import styles from './Home.css';

export default class Home extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    return(
      <div>
        <Section>
          <Container>
            <h1>Hello World</h1>
          </Container>
        </Section>
      </div>
    )
  }
}
