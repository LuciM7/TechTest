const navigationMenu = "[data-cy='common-header--navigation']";
const button = ".aa-btn"
const loginUrl = "https://www.tourradar.com/login"

export const clickOnUserMenu = () => {
    cy.get(navigationMenu).find('li').last().click()
}

export const clickOnLoginButton = () => {
    cy.get(button).contains("Log In").click()
}

export const assertUserIsRedirectedToLoginPage = () => {
    cy.url().should("eq", loginUrl)
}