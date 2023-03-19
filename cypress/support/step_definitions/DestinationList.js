import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import * as destinationListActions from "../actions/DestinationListActions"

When ("I select the first destination that appears on the list", () => {
    destinationListActions.selectFirstDestionationFromList()
})

Then ("I get redirected to the page of that destination", () => {
    destinationListActions.checkDestinationRedirectingIsCorrect()
})