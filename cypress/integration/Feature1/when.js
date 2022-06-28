///<reference types = "cypress"/>

import HomePageActions from "../pageObjects/pageactions/HomePageActions";

const homePageActions = new HomePageActions();

When('I click in the book exams button on the home page', () => {
    homePageActions.clickBookingButton();
})