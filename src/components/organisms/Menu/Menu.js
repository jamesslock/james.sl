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
            <h1>Menu</h1>
            <nav role="navigation">
              <Link to="/" onClick={onLinkClick}>Home</Link>
              <Link to="/post" onClick={onLinkClick}>Post</Link>
            </nav>
          </Container>
        </Section>
      </div>
    );
  }
}
