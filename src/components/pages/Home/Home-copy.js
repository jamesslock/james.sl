import React, {Component} from "react";
import { Link } from 'react-router';
import {Motion, StaggeredMotion, spring} from 'react-motion';

// Import Atom Components
import Section    from '../../atoms/Section/Section.js';
import Container  from '../../atoms/Container/Container.js';
import Hero       from '../../atoms/Hero/Hero.js';

// Import Molecules Components

// Import Organism Components

// Import Styles
import s from './Home.css';
import {verticalCenter} from 'global/helpers.css';

// Create menu items with apropriate button type
const NavigationItem = React.createClass({
  render: function(){
      return (
          <div>
            {this.props.name}
          </div>
      );
    }
});
// Create Nav item
const NavigationBuild = React.createClass({
    render: function(){
      return (
          <div>
            {this.props.mainNavigation.map(function(navigationData) {
              return (
                <NavigationItem
                  name={navigationData.name}
                  key={navigationData.name}
                />
              );
            })}
          </div>
      );
    }
});

export default class Home extends Component {

  componentDidMount() {
    document.body.scrollTop = 0; // Tells react to reset scroll position when changing pages.
  }

  render() {
    const headerNavigationData = [
        { 'name': 'James'},
        { 'name': 'Seymour-Lock'}
    ];

    return(
      <div>
        <Hero size="full" className={verticalCenter}>
          <Section>
            <Container>
              <NavigationBuild mainNavigation={headerNavigationData} />


              <StaggeredMotion
                defaultStyles={[{z: -100}]}
                styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                  return i === 0
                    ? {z: spring(0, {stiffness: 120, damping: 10})}
                    : {z: spring(prevInterpolatedStyles[i - 1].z, {stiffness: 120, damping: 10})}
                })}>
                {interpolatingStyles =>
                  <div>
                    {interpolatingStyles.map((value, i) =>
                      <h1
                        key={i}
                        style={{transform: `translateX(${value.z}px)`}}
                        className={[s.heroTitle].join(' ')}
                      >
                        James <br/>Seymour-Lock
                      </h1>
                    )}
                  </div>
                }
              </StaggeredMotion>
            </Container>
          </Section>
        </Hero>
      </div>
    )
  }
}
