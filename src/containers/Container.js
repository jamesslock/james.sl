import React, {Component, PropTypes} from "react";

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
