///<reference types = "cypress"/>

before(function () {
    // root-level hook
    // runs once before all tests
    cy.fixture('../fixtures/ui_texts').then(function (regdata) {
        globalThis.regdata = regdata
    })
})
