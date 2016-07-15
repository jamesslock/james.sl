import React, {Component, PropTypes} from "react";
import Helmet from "react-helmet";

// Import Organism Components

// Import Styles
import styles from 'global/main.css';

export default class Container extends Component {
	render () {
    const {children} = this.props
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
