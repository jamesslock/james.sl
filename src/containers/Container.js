import React, {Component, PropTypes} from "react";


// Import Organism Components
import Nav    from '../components/organisms/Nav/Nav.js';


// Import Styles
import styles from 'global/main.css';

export default class Container extends Component {
	render () {
    const {children} = this.props
		return (
			<div>
				<Nav />
				{this.props.children}
			</div>
		);
	}
}
