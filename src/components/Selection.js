import React, { Component } from 'react';

class Selection extends Component {
	constructor() {
		super();
		this.state = { visible: true };
		this.togglePossible = this.togglePossible.bind(this);
	}

	togglePossible() {
		if (this.state.visible) {
			this.props.possibilityRemoved(this.props.children);
		} else {
			this.props.possibilityAdded(this.props.children);
		}

		this.setState({
			visible: !this.state.visible,
		});
	}

	render() {
		return (
			<li
				onClick={this.togglePossible}
				className={this.state.visible === true ? 'selection' : 'selection notPossible'}
			>
				{this.props.children}
			</li>
		);
	}
}

export default Selection;
