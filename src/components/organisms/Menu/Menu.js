import React, {Component} from 'react';
import {Link} from 'react-router';

// Import Atom Components
import Container       from '../../atoms/Container/Container.js';
import Section       from '../../atoms/Section/Section.js';
import AnimateFadeInFast    from '../../atoms/Animate/AnimateFadeInFast.js';
import AnimateFadeIn    from '../../atoms/Animate/AnimateFadeIn.js';
import AnimateSlideRight    from '../../atoms/Animate/AnimateSlideRight.js';

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
      <AnimateFadeInFast>
        <div className={[classNames, verticalCenter].join(' ')}>
          <Section>
            <Container>
              <Container size="small" align="left">
                <AnimateSlideRight>
                  <nav className={s.nav} role="navigation">
                    <div className={s.navItem}>
                      <Link to="/" onClick={onLinkClick}>Home</Link>
                    </div>
                    <div className={s.navItem}>
                      <Link to="/writing" onClick={onLinkClick}>Writing</Link>
                    </div>
                  </nav>
                </AnimateSlideRight>
              </Container>
              <Container size="small" align="left">
                <AnimateFadeIn>
                  <p>What I'm <Link to="/reading" onClick={onLinkClick}>Reading</Link></p>
                </AnimateFadeIn>
              </Container>
            </Container>
          </Section>
        </div>
      </AnimateFadeInFast>
    );
  }
}
