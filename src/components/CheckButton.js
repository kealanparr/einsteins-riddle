import React, { Component } from 'react';

class CheckButton extends Component {

	constructor() {
		super();
		this.checkAnswer = this.checkAnswer.bind(this);

		/// This is initially set to `null` so it isn't rendered on site load/first time through this logic, or when we need to hide it again after 3s
		this.state = {
			correctAnswer: null
		}
	}

	checkAnswer() {
		clearTimeout(this.currentTimeout);
		const correct = this.props.checkCurrentAnswer();
		this.setState({
			correctAnswer: correct
		});
		/// Used to hide the solutionHelp message
		this.currentTimeout = setTimeout(
			() => this.setState({ correctAnswer: null }),
			3000
		);
	}

	render() {
		return (
			<div className={'buttonContainer'}>
				<button onClick={this.checkAnswer} className={'check'}>Check Answer</button>
				{this.state.correctAnswer &&
					<div>
						<div className='solutionHelp'>This is correct! 😃</div>
						<div className='solutionHelp'>Well done 🎉🎉</div>
					</div>
				}
				{this.state.correctAnswer === false &&
					<div>
						<div className={'solutionHelp'}>This isn't correct 🤔🤔</div>
						<div className={'solutionHelp'}>Keep trying!</div>
					</div>
				}
			</div>
		);
	}
}

export default CheckButton;
