import React, {Component} from "react";
import {Link} from 'react-router';

// Import Atom Components
import Hamburger       from '../../atoms/Hamburger/Hamburger.js';
import Container       from '../../atoms/Container/Container.js';

// Import Organism Components
import Menu    from '../../organisms/Menu/Menu.js';

import s from './Nav.css'

export default class Nav extends Component {

  render() {
    return (
      <header className={s.root}>
        <Container size="full">
          <Link className={s.home} to="/">James.SL</Link>
          <Hamburger className={s.menu} />
        </Container>
      </header>
    )
  }
}
