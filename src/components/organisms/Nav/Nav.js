import React, {Component} from "react";
import {Link} from 'react-router';

// Import Atom Components
import Hamburger       from '../../atoms/Hamburger/Hamburger.js';
import Container       from '../../atoms/Container/Container.js';
import AnimateFadeIn    from '../../atoms/Animate/AnimateFadeIn.js';

// Import Organism Components
import Menu    from '../../organisms/Menu/Menu.js';

import s from './Nav.css'

export default class Nav extends Component {

  render() {
    return (
      <header className={s.root}>
        <Container size="full">
          <AnimateFadeIn>
            <Link className={s.home} to="/">JSL</Link>
            <Hamburger className={s.menu} />
          </AnimateFadeIn>
        </Container>
      </header>
    )
  }
}
