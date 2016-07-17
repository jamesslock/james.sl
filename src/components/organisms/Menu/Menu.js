import React, {Component} from 'react';
import {Link} from 'react-router';

// Import Atom Components
import Container       from '../../atoms/Container/Container.js';
import Section       from '../../atoms/Section/Section.js';

import s from './Menu.css';
import {verticalCenter} from 'global/helpers.css';

export default class Menu extends Component {
  render() {
    const {onLinkClick} = this.props;

    const {
      className,
    } = this.props;

		const classNames = [
      s.root,
      s ? s[s] : null,
      className,
    ].join(' ');

    return (
      <div className={[classNames, verticalCenter].join(' ')}>
        <Section>
          <Container>
            <Container size="small" align="left">
              <nav className={s.nav} role="navigation">
                <div className={s.navItem}>
                  <Link to="/" onClick={onLinkClick}>Home</Link>
                </div>
                <div className={s.navItem}>
                  <Link to="/about" onClick={onLinkClick}>About</Link>
                </div>
                <div className={s.navItem}>
                  <Link to="/writing" onClick={onLinkClick}>Writing</Link>
                </div>
                <div className={s.navItem}>
                  <Link to="/contact" onClick={onLinkClick}>Contact</Link>
                </div>
              </nav>
            </Container>
            <Container size="small" align="left">
              <p>What I'm <Link to="/reading" onClick={onLinkClick}>Reading</Link> / <Link to="/watching" onClick={onLinkClick}>Watching</Link> / <Link to="/listening" onClick={onLinkClick}>Listening</Link></p>
            </Container>
          </Container>
        </Section>
      </div>
    );
  }
}
