import React, { Component } from "react"
import { Link } from 'react-router'
import styled from 'styled-components'

// Import Atom Components
import Hamburger       from '../../atoms/Hamburger/Hamburger.js'
import Container       from '../../atoms/Container/Container.js'
import AnimateFadeIn    from '../../atoms/Animate/AnimateFadeIn.js'

const Header = styled.header`
  padding: 20px 0;
  position: fixed;
  width: 100%;
  z-index: 120;
`;

const MenuTrigger = styled(Hamburger)`
  float: right;
  position: relative;
  z-index: 90;
`;

const HomeLink = styled(Link)`
  float: left;
`;

export default class Nav extends Component {

  render() {
    return (
      <Header>
        <Container full>
          <AnimateFadeIn>
            <HomeLink to="/">JSL</HomeLink>
            <MenuTrigger />
          </AnimateFadeIn>
        </Container>
      </Header>
    )
  }
}
