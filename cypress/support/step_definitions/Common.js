import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given("I visit the TourRadar home page", () => {
    cy.visit("/", {timeout: 50000})
})
