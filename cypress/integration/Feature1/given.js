///<reference types = "cypress"/>

import HomePageActions from "./../pageObjects/pageactions/HomePageActions";

const homePageActions = new HomePageActions();

Given('I am in the home page', () => {
    homePageActions.visitHome();
})