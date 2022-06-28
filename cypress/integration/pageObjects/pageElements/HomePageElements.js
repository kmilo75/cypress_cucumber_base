///<reference types ="cypress" />
const loc = require("./../../../locators.json")

export default class HomePageElements {

//This file ONLY contains the getters for the locators 

//This is just an example. The string loc.homePage.homeContentFeatured.container represents the 
//locators structure in the locators.json file
getHomeContentFeaturedContainer(){
    return cy.get(loc.homePage.homeContentFeatured.container);
}

}