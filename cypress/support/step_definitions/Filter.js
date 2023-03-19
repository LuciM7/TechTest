import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import * as filterActions from "../actions/FilterActions"

When("I select {string} age range", (ageRange) => {
    filterActions.selectAgeRange(ageRange)
})

Then("I should only get destinatios that are operated in the selected range", () => {
    filterActions.checkResultsAreCorrect()
})