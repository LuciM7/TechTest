import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import * as userMenuActions from "../actions/UserMenuActions"

And ("I click on the user menu to display the dropdown", () => {
    userMenuActions.clickOnUserMenu()
})

When ("I click on the Login button within the dropdown", () => {
    userMenuActions.clickOnLoginButton()
})

Then ("I get redirected to the login page", () => {
    userMenuActions.assertUserIsRedirectedToLoginPage()
})
