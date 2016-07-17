import React, { Component, PropTypes } from 'react';

// Import Organism Components
import Menu    from '../../organisms/Menu/Menu.js';

import s from './Hamburger.css';

export default class Hamburger extends Component {

	constructor(props) {
    super(props);
    this.showMenu.bind(this);
    this.state = {
      showMenu: false,
    }
  }

  showMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
		const {showMenu} = this.state;
    const isActive = showMenu ? s.active : null;
    const rootClass = [s.root];

		const {
      className,
      children,
      ...remainingProps,
    } = this.props;

		const classNames = [
      s.root,
      s ? s[s] : null,
      className,
    ].join(' ');

    return (
			<div>
	      <button
					className={[classNames, isActive].join(' ')}
					onClick={ () => this.showMenu() }
	      >
    			<div className={s.inner} />
	      </button>

				{ showMenu ?
            <Menu onLinkClick={ () => this.showMenu() } />
          :
            null
        }
			</div>
    )

  }
};

Hamburger.propTypes = {
  className: PropTypes.string,
};
