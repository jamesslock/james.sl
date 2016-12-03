import React, { Component } from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

// Import Atom Components
import Container from '../../atoms/Container/Container.js'
import Section from '../../atoms/Section/Section.js'
import AnimateFadeInFast from '../../atoms/Animate/AnimateFadeInFast.js'
import AnimateFadeIn from '../../atoms/Animate/AnimateFadeIn.js'
import AnimateSlideRight from '../../atoms/Animate/AnimateSlideRight.js'


export default class Menu extends Component {
  render() {
    const { onLinkClick } = this.props;

    const Wrapper = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(255, 255, 255, 1);
      z-index: 10;
      display: flex;

      &:before {
        content: "Menu";
        position: absolute;
        top: 0;
        left: 0;
        font-family: serif;
        font-weight: 600;
        padding: 20px 15px;
      }
    `;

    const Nav = styled.nav`
      margin: 20% 0 5%;
      &:before,
      &:after {
        content: "";
        display: table;
      }
      &:after {
        clear: both;
      }
    `;

    const NavItem = styled.nav`
      display: block;
      width: 50%;
      float: left;
      padding: 2% 0;
      line-height: 1.2;
      font-size: responsive 30px 60px;
      font-range: 520px 1440px;
    `;

    return (
      <AnimateFadeInFast>
        <Wrapper>
          <Section>
            <Container>
              <Container small left>
                <AnimateSlideRight>
                  <Nav role="navigation">
                    <NavItem>
                      <Link to="/" onClick={onLinkClick}>Home</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/about" onClick={onLinkClick}>About</Link>
                    </NavItem>
                  </Nav>
                </AnimateSlideRight>
              </Container>
              <Container small left>
                <AnimateFadeIn>
                  <p>What I'm <Link to="/reading" onClick={onLinkClick}>Reading</Link></p>
                </AnimateFadeIn>
              </Container>
            </Container>
          </Section>
        </Wrapper>
      </AnimateFadeInFast>
    );
  }
}
