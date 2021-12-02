import React, { Component } from 'react';
import Row from './Row';
import Prompt from './Prompt';
import FirstRow from './FirstRow';
import CheckButton from './CheckButton';

import {
	BIRDS,
	BLEND,
	BLUE,
	BLUEMASTER,
	BRIT,
	COFFEE,
	DANE,
	DOGS,
	DUNHILL,
	FISH,
	GERMAN,
	GREEN,
	HORSES,
	MILK,
	NORWEIGAN,
	PALL_MALL,
	RED,
	BEER,
	CATS,
	PRINCE,
	SWEDE,
	TEA,
	WATER,
	WHITE,
	YELLOW,
} from '../constants/constants';

class Grid extends Component {
	correctAnswer = {
		NationalityHouse1: NORWEIGAN,
		NationalityHouse2: DANE,
		NationalityHouse3: BRIT,
		NationalityHouse4: GERMAN,
		NationalityHouse5: SWEDE,

		ColorHouse1: YELLOW,
		ColorHouse2: BLUE,
		ColorHouse3: RED,
		ColorHouse4: GREEN,
		ColorHouse5: WHITE,

		BeverageHouse1: WATER,
		BeverageHouse2: TEA,
		BeverageHouse3: MILK,
		BeverageHouse4: COFFEE,
		BeverageHouse5: BEER,

		PetHouse1: CATS,
		PetHouse2: HORSES,
		PetHouse3: BIRDS,
		PetHouse4: FISH,
		PetHouse5: DOGS,

		SmokingHouse1: DUNHILL,
		SmokingHouse2: BLEND,
		SmokingHouse3: PALL_MALL,
		SmokingHouse4: PRINCE,
		SmokingHouse5: BLUEMASTER,
	};

	constructor() {
		super();

		this.state = {
			NationalityHouse1: '',
			NationalityHouse2: '',
			NationalityHouse3: '',
			NationalityHouse4: '',
			NationalityHouse5: '',

			ColorHouse1: '',
			ColorHouse2: '',
			ColorHouse3: '',
			ColorHouse4: '',
			ColorHouse5: '',

			BeverageHouse1: '',
			BeverageHouse2: '',
			BeverageHouse3: '',
			BeverageHouse4: '',
			BeverageHouse5: '',

			PetHouse1: '',
			PetHouse2: '',
			PetHouse3: '',
			PetHouse4: '',
			PetHouse5: '',

			SmokingHouse1: '',
			SmokingHouse2: '',
			SmokingHouse3: '',
			SmokingHouse4: '',
			SmokingHouse5: '',
		};

		this.updateCurrentAnswer = this.updateCurrentAnswer.bind(this);
		this.checkCurrentAnswer = this.checkCurrentAnswer.bind(this);
	}

	checkCurrentAnswer() {

		// Very fast way to compare two objects
		// Serialise them and compare the strings
		const correctAnswerString = JSON.stringify(this.state);
		const currentAnswerString = JSON.stringify(this.correctAnswer);

		if (currentAnswerString === correctAnswerString) {
			return true;
		} else {
			return false;
		}
	}

	updateCurrentAnswer(key, val) {
		// Our next state depends on the last updated state, so we cant just do the "normal" setState and pass in an object
		// We have to pass in a callback so each new update to state builds upon what happened before so we don't "lose" selections
		// Which was happening before I used the callback method of updating
		this.setState(() => {
			const newState = { ...this.state };
			newState[key] = val;
			return newState;
		});
	}

	render() {
		return (
			<>
				<Prompt />
				<div className="grid">
					<FirstRow
						updateCurrentAnswer={this.updateCurrentAnswer}
						reference={'Nationality'}
						content={[NORWEIGAN, DANE, BRIT, GERMAN, SWEDE]}
					></FirstRow>
					<Row
						updateCurrentAnswer={this.updateCurrentAnswer}
						reference={'Color'}
						content={[BLUE, YELLOW, WHITE, RED, GREEN]}
					></Row>
					<Row
						updateCurrentAnswer={this.updateCurrentAnswer}
						reference={'Beverage'}
						content={[MILK, COFFEE, BEER, WATER, TEA]}
					></Row>
					<Row
						updateCurrentAnswer={this.updateCurrentAnswer}
						reference={'Pet'}
						content={[HORSES, CATS, BIRDS, FISH, DOGS]}
					></Row>
					<Row
						updateCurrentAnswer={this.updateCurrentAnswer}
						reference={'Smoking'}
						content={[PRINCE, DUNHILL, PALL_MALL, BLEND, BLUEMASTER]}
					></Row>
				</div>
				<CheckButton checkCurrentAnswer={this.checkCurrentAnswer}></CheckButton>
			</>
		);
	}
}

export default Grid;
