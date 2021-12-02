import React, { Component } from 'react';
import Selection from './Selection';

class Brick extends Component {
	constructor(props) {
		super(props);
		this.answerSubmitted = this.answerSubmitted.bind(this);
		this.possibilityAdded = this.possibilityAdded.bind(this);
		this.possibilityRemoved = this.possibilityRemoved.bind(this);

		this.state = {
			possibilities: [...this.props.content],
		};
	}

	possibilityAdded(possibility) {
		this.state.possibilities.push(possibility);
		this.answerSubmitted();
	}

	possibilityRemoved(possibility) {
		let indexToRemove = this.state.possibilities.indexOf(possibility);
		this.state.possibilities.splice(indexToRemove, 1);
		this.answerSubmitted();
	}

	answerSubmitted() {
		if (this.state.possibilities.length === 1) {
			this.props.updateCurrentAnswer(
				this.props.reference,
				this.state.possibilities[0]
			);
		} else if (
			// Only need to update to '' if they've gone to zero possibilites (remove whatever is currently entered), or they have gone up from 1 to 2. Nothing else requires an update
			this.state.possibilities.length === 0 ||
			this.state.possibilities.length === 2
		) {
			this.props.updateCurrentAnswer(this.props.reference, '');
		}
	}

	render() {
		return (
			<div key={this.props.reference} className='brick'>
				<ul className="brickContainer">
					{this.props.content.map(content =>
						<Selection
							possibilityRemoved={this.possibilityRemoved}
							possibilityAdded={this.possibilityAdded}
							className={'selection'}
							key={`selection${content}`}
						>
							{content}
						</Selection>
					)}
				</ul>
			</div>
		);
	}
}

export default Brick;
