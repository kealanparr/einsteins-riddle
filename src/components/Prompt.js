import React, { Component } from 'react';
import Hint from './Hint';

class Prompt extends Component {
	render() {
		return (
			<div className="promptContainer">
				<p className={'prompt'}>
					There are 5 houses painted five different colors.
				</p>
				<p className={'prompt'}>
					In each house lives a person with a different nationality.
				</p>
				<p className={'prompt'}>
					These five owners drink a certain type of beverage, smoke a certain
					brand of cigar and keep a certain pet.
				</p>
				<p className={'prompt'}>
					No owners have the same pet, smoke the same brand of cigar or drink
					the same beverage.
				</p>
				<Hint />
			</div>
		);
	}
}

export default Prompt;
