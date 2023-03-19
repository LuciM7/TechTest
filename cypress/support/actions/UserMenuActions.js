const navigationMenu = "[data-cy='common-header--navigation']";
const userMenuIcon = ".ao-header-navigation__profile"

export const clickOnUserMenu = () => {
    cy.get(navigationMenu).find(userMenuIcon).click(userMenuIcon)
}