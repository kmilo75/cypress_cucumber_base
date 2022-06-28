///<reference types ="cypress" />

import HomePageElements from "../pageElements/HomePageElements";

const element = new HomePageElements();
export default class HomePageActions {

	constructor() {

	}

	visitHome() {
		cy.visit("/");
	}

}