import React, { Component } from 'react';
import Brick from './Brick';

class FirstRow extends Component {
	render() {
		return (
			<>
				<div></div>
				<div className={'detail'}>House 1</div>
				<div className={'detail'}>House 2</div>
				<div className={'detail'}>House 3</div>
				<div className={'detail'}>House 4</div>
				<div className={'detail'}>House 5</div>

				<div className={'detailLeft'}>{this.props.reference}</div>
				<Brick
					updateCurrentAnswer={this.props.updateCurrentAnswer}
					reference={`${this.props.reference}House1`}
					content={this.props.content}
				></Brick>
				<Brick
					updateCurrentAnswer={this.props.updateCurrentAnswer}
					reference={`${this.props.reference}House2`}
					content={this.props.content}
				></Brick>
				<Brick
					updateCurrentAnswer={this.props.updateCurrentAnswer}
					reference={`${this.props.reference}House3`}
					content={this.props.content}
				></Brick>
				<Brick
					updateCurrentAnswer={this.props.updateCurrentAnswer}
					reference={`${this.props.reference}House4`}
					content={this.props.content}
				></Brick>
				<Brick
					updateCurrentAnswer={this.props.updateCurrentAnswer}
					reference={`${this.props.reference}House5`}
					content={this.props.content}
				></Brick>
			</>
		);
	}
}

export default FirstRow;
