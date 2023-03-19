import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import * as userMenuActions from "../actions/UserMenuActions"

And ("I click on the user menu", () => {
    userMenuActions.clickOnUserMenu()
})