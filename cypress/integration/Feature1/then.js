///<reference types = "cypress"/>

import HomePageActions from "../pageObjects/pageactions/HomePageActions";

const homepageActions = new HomePageActions();

Then('I should see the Search bar section displayed correctly', () => {
    searchPageActions.isCorrectlyDisplayed();
})
